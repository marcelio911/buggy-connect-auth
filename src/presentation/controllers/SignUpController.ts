import { IUsuario } from '../../data/models/IUsuario';
import { IHttpRequest } from '../../infra/IHttpRequest';
import { IHttpResponse } from '../../infra/IHttpResponse';
import { Constants } from '../../utils/contants/Contants';
import { IController } from './IController';

export class SignUpController implements IController {
  handle(httpRequest: IHttpRequest): IHttpResponse {
    this.validation(httpRequest);

    const response: IHttpResponse = {
      ...httpRequest,
      statusCode: 400,
      errorMessage: new Error(Constants.USUARIO_NAO_INFORMADO),
    };
    return response;
  }

  validation(httpRequest: IHttpRequest): boolean | Error {
    const usuario: IUsuario = httpRequest.body;

    if (!usuario?.apelido) {
      return Error(Constants.USUARIO_NAO_INFORMADO);
    }
    return true;
  }
}
