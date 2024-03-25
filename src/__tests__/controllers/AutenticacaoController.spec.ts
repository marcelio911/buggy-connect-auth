import { Test } from '@nestjs/testing';

import { MockAutenticacaoService } from '../__mock__/mock-autenticacao.service'; // Importe seu mock
import { AutenticacaoController } from '../../modules/autenticacao/controllers/autenticacao.controller';
import { AutenticacaoService } from '../../modules/autenticacao/services/autenticacao.service';
import { AutenticacaoRepository } from '../../modules/autenticacao/autenticacao.repository';
import {
  Autenticacao,
  AutenticacaoSchema,
} from '../../modules/autenticacao/data/schemas/AutenticacaoSchema';
import { AutenticacaoDomain } from '../../modules/autenticacao/domains/autenticacao.domain';
import { JwtService } from '@nestjs/jwt';
import { Connection, connect, Model } from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { getModelToken } from '@nestjs/mongoose';
import { Constants } from '../../utils/contantes/Contants';
import { Response } from 'express';
import { IAutenticacaoDto } from '../../modules/autenticacao/data/interfaces/IAutenticacaoDto';
import { IHttpResponse } from '../../infra/IHttpResponse';

describe('AutenticacaoController', () => {
  let controller: AutenticacaoController;
  let service: AutenticacaoService;
  let jwtService: JwtService;
  let domain: AutenticacaoDomain;
  let autenticacaoModel: Model<Autenticacao>;
  let mongod: MongoMemoryServer;
  let mongoConnection: Connection;

  beforeAll(async () => {
    mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();
    mongoConnection = (await connect(uri)).connection;
    autenticacaoModel = mongoConnection.model(
      Autenticacao.name,
      AutenticacaoSchema,
    );
  });

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [AutenticacaoController],
      providers: [
        AutenticacaoService,
        AutenticacaoDomain,
        JwtService,
        AutenticacaoRepository,
        MockAutenticacaoService,
        {
          provide: getModelToken(Autenticacao.name),
          useValue: autenticacaoModel,
        },
      ],
    }).compile();

    controller = moduleRef.get<AutenticacaoController>(AutenticacaoController);
    service = moduleRef.get<AutenticacaoService>(AutenticacaoService);
    domain = moduleRef.get<AutenticacaoDomain>(AutenticacaoDomain);
    jwtService = moduleRef.get<JwtService>(JwtService);
  });

  afterAll(async () => {
    await mongoConnection.dropDatabase();
    await mongoConnection.close();
    await mongod.stop();
  });

  afterEach(async () => {
    const collections = mongoConnection.collections;
    for (const key in collections) {
      const collection = collections[key];
      await collection.deleteMany({});
    }
  });

  it('should be service defined', () => {
    expect(service).toBeDefined();
  });
  it('should be autenticacaoModel defined', () => {
    expect(autenticacaoModel).toBeDefined();
  });
  it('should be jwtService defined', () => {
    expect(jwtService).toBeDefined();
  });

  it('should be domain defined', () => {
    expect(domain).toBeDefined();
  });

  describe('Deve retornar 201 usuario criado com sucesso', async () => {
    const responseObject = {
      messaged: Constants.USUARIO_CRIADO_COM_SUCESSO,
    };
    const response: Partial<Response> = {
      status: jest
        .fn()
        .mockImplementation()
        .mockReturnValue(201)
        .mockReturnThis(),
      json: jest.fn().mockImplementation().mockReturnValue(responseObject),
    };

    jest.spyOn(service, 'cadastrar').mockImplementation(() => response);

    const mock = await controller.cadastrar(
      'marcos@test.com',
      'senha1',
      response as Response,
    );
    expect(mock).toEqual(response.json); // Verifique se o resultado corresponde aos dados de entrada
  });

  //   it('Deve retornar 400 if o nome não for recuperado', async () => {
  //     const user: IAutenticacaoDto = {
  //       apelido: 'undefined',
  //       senha: '',
  //       permitido: true,
  //       desativado: false,
  //     };

  //     const res = await controller.entrar(user.apelido, user.senha);

  //     expect(res).toBe(undefined);
  //   });

  //   it('Deve retornar usuario cadastrado', async () => {
  //     const userData: IAutenticacaoDto = {
  //       apelido: 'teste',
  //       senha: '123',
  //       permitido: true,
  //       desativado: false,
  //     };

  //     const responseObject = {
  //       message: Constants.USUARIO_CRIADO_COM_SUCESSO,
  //     };
  //     const response: any = {
  //       status: jest.fn().mockImplementation().mockReturnValue(200),
  //       json: jest.fn().mockImplementation().mockReturnValue(responseObject),
  //     };

  //     const usuarioCriado = await controller.cadastrar(
  //       userData.apelido,
  //       userData.senha,
  //       response,
  //     );
  //     expect(usuarioCriado).toBe(usuarioCriado);

  //     expect(usuarioCriado).not.toBe({
  //       apelido: undefined,
  //       senha: '',
  //       confirmacaoSenha: '',
  //     });
  //   });
});
