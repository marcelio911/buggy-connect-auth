export interface IHttpResponse {
  statusCode?: number;
  errorMessage?: string | object;
  data?: object;
  headers?: object;
}
