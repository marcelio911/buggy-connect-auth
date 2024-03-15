import { HttpException, HttpStatus } from '@nestjs/common';

import { IHttpResponse } from '../../../infra/IHttpResponse';
import { Constants } from '../../../utils/contantes/Contants';
import { ErrorCode } from '../../../utils/contantes/ErrorNumber';

export const capturarRespostasAutenticacao = (
  error: Error | HttpException,
): IHttpResponse => {
  switch (error.message) {
    case Constants.USUARIO_INVALIDO:
      return usuarioInvalidoResponse(error);
    case Constants.USUARIO_JA_CADASTRADO:
      return usuarioJaCadastradoResponse(error);
    case Constants.USUARIO_NAO_ENCONTRADO:
      return usuarioNaoEncontradoResponse(error);
    default:
      return erroDesconhecidoResponse(error);
  }
};

function usuarioNaoEncontradoResponse(error: any): IHttpResponse {
  const httpResponse: IHttpResponse = {
    statusCode: HttpStatus.NOT_ACCEPTABLE,
    errorCode: ErrorCode.USUARIO_NAO_ENCONTRADO,
    errorMessage: Constants.USUARIO_NAO_ENCONTRADO,
    data: {
      ...(error.response ? error.response : error),
    },
  };
  return httpResponse;
}

function erroDesconhecidoResponse(error: any): IHttpResponse {
  const httpResponse: IHttpResponse = {
    statusCode: HttpStatus.BAD_REQUEST,
    errorCode: ErrorCode.GENERICO,
    errorMessage: Constants.ERRO_DESCONHECIDO,
    data: {
      ...(error.response ? error.response : error),
    },
  };
  return httpResponse;
}

function usuarioJaCadastradoResponse(error: any): IHttpResponse {
  const httpResponse: IHttpResponse = {
    statusCode: HttpStatus.NOT_ACCEPTABLE,
    errorCode: ErrorCode.USUARIO_JA_CADASTRADO,
    errorMessage: new Error(Constants.USUARIO_JA_CADASTRADO),
    data: {
      ...(error.response ? error.response : error),
    },
  };
  return httpResponse;
}

function usuarioInvalidoResponse(error: any): IHttpResponse {
  const httpResponse: IHttpResponse = {
    statusCode: HttpStatus.BAD_REQUEST,
    errorCode: ErrorCode.USUARIO_INVALIDO,
    errorMessage: new Error(Constants.USUARIO_INVALIDO),
    data: {
      ...(error.response ? error.response : error),
    },
  };
  return httpResponse;
}
