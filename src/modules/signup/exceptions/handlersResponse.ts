import { IUsuario } from '../../../data/interfaces/IUsuario';
import { IHttpResponse } from '../../../infra/IHttpResponse';
import { Constants } from '../../../utils/contantes/Contants';

export const capturarRespostas = (
  error: Error,
  usuario?: IUsuario,
): IHttpResponse => {
  const response: IHttpResponse = {
    statusCode: 400,
    errorMessage: new Error(Constants.USUARIO_NAO_INFORMADO),
    data: {
      usuario,
      error,
    },
  };
  return response;
};
