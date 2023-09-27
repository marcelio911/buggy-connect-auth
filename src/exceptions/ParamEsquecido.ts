export class ParamEsquecidoError extends Error {
  constructor(paramName: string) {
    super(`Atributo não fornecido: ${paramName}`);
    this.name = 'ParamEsquecidoError';
  }
}
