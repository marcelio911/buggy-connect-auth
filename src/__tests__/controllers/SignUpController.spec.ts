import { IUsuario } from '../../data/models/IUsuario';
import { SignUpController } from '../../presentation/controllers/SignUpController';
import { Constants } from '../../utils/contants/Contants';

describe('SignUp Controller', () => {
  test('Deve retornar 400 if o nome não for recuperado', async () => {
    const signup = new SignUpController();
    const httpRequest = {
      body: {
        apelido: undefined,
        senha: '',
        confirmacaoSenha: '',
      } as IUsuario,
    };
    const httpResponse = signup.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);

    expect(httpResponse.errorMessage).toEqual(
      new Error(Constants.USUARIO_NAO_INFORMADO),
    );
  });
});
