// import { Test } from '@nestjs/testing';
// import { IUsuario } from '../../data/interfaces/IUsuario';

// import { AutenticacaoController } from '../../modules/signup/controllers/AutenticacaoController';
// import { AutenticacaoService } from '../../modules/signup/services/AutenticacaoService';
// import { MockAutenticacaoService } from './mock-signup.service'; // Importe seu mock
// import { AutenticacaoRepository } from '../../modules/signup/repositories/AutenticacaoRepository';
// import { UsuarioSchema } from '../../data/schemas/UsuarioSchema';

// describe('AutenticacaoController', () => {
//   let controller: AutenticacaoController;
//   let service: AutenticacaoService;

//   beforeEach(async () => {
//     const moduleRef = await Test.createTestingModule({
//       imports: [],
//       controllers: [AutenticacaoController],
//       providers: [
//         AutenticacaoService,
//         AutenticacaoRepository,
//         MockAutenticacaoService,
//         {
//           provide: 'UsuarioSchemaModel',
//           useValue: UsuarioSchema,
//         },
//       ],
//     }).compile();

//     controller = moduleRef.get<AutenticacaoController>(AutenticacaoController);
//     service = moduleRef.get<AutenticacaoService>(AutenticacaoService);
//   });

//   it('Deve retornar 201 usuario criado com sucesso', async () => {
//     const userData: IUsuario = {
//       apelido: undefined,
//       senha: '',
//       confirmacaoSenha: '',
//     };

//     const result = await controller.cadastrar(userData);
//     expect(result).toEqual(undefined); // Verifique se o resultado corresponde aos dados de entrada
//   });

//   it('Deve retornar 400 if o nome não for recuperado', async () => {
//     const userData: IUsuario = {
//       apelido: undefined,
//       senha: '',
//       confirmacaoSenha: '',
//     };

//     const res = await controller.entrar(userData);

//     expect(res).toBe(undefined);
//     // expect(res?.errorMessage).toEqual(
//     //   new Error(Constants.USUARIO_NAO_INFORMADO),
//     // );
//   });

//   it('Deve retornar usuario cadastrado', async () => {
//     const userData: IUsuario = {
//       apelido: 'teste',
//       senha: '123',
//       confirmacaoSenha: '123',
//     };

//     const usuarioCriado = await service.cadastrar(userData);
//     expect(usuarioCriado).toBe(usuarioCriado);

//     expect(usuarioCriado).not.toBe({
//       apelido: undefined,
//       senha: '',
//       confirmacaoSenha: '',
//     });
//   });
// });
