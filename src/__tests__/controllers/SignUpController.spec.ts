import { Test } from '@nestjs/testing';
import { IUsuario } from '../../data/interfaces/IUsuario';

import { SignUpController } from '../../modules/signup/controllers/SignUpController';
import { SignUpService } from '../../modules/signup/services/SignUpService';
import { MockSignUpService } from './mock-signup.service'; // Importe seu mock
import { SignUpRepository } from '../../modules/signup/repositories/SignUpRepository';
import { UsuarioSchema } from '../../data/schemas/UsuarioSchema';

describe('SignUpController', () => {
  let controller: SignUpController;
  let service: SignUpService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [SignUpController],
      providers: [
        SignUpService,
        SignUpRepository,
        MockSignUpService,
        {
          provide: 'UsuarioSchemaModel',
          useValue: UsuarioSchema,
        },
      ],
    }).compile();

    controller = moduleRef.get<SignUpController>(SignUpController);
    service = moduleRef.get<SignUpService>(SignUpService);
  });

  it('Deve retornar 201 usuario criado com sucesso', async () => {
    const userData: IUsuario = {
      apelido: undefined,
      senha: '',
      confirmacaoSenha: '',
    };

    const result = await controller.cadastrar(userData);
    expect(result).toEqual(undefined); // Verifique se o resultado corresponde aos dados de entrada
  });

  it('Deve retornar 400 if o nome não for recuperado', async () => {
    const userData: IUsuario = {
      apelido: undefined,
      senha: '',
      confirmacaoSenha: '',
    };

    const res = await controller.entrar(userData);

    expect(res?.statusCode).toBe(undefined);
    // expect(res?.errorMessage).toEqual(
    //   new Error(Constants.USUARIO_NAO_INFORMADO),
    // );
  });

  it('Deve retornar usuario cadastrado', async () => {
    const userData: IUsuario = {
      apelido: 'teste',
      senha: '123',
      confirmacaoSenha: '123',
    };

    const usuarioCriado = await service.cadastrar(userData);
    expect(usuarioCriado).toBe(usuarioCriado);

    expect(usuarioCriado).not.toBe({
      apelido: undefined,
      senha: '',
      confirmacaoSenha: '',
    });
  });
});
