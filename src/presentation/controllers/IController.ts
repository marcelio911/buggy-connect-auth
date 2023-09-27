import { IHttpRequest } from '../../infra/IHttpRequest';
import { IHttpResponse } from '../../infra/IHttpResponse';

export interface IController {
  handle(httpRequest: IHttpRequest): IHttpResponse;
}
