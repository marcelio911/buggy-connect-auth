export interface ICliente {
  readonly nome?: string;
  readonly apelido?: string;
  readonly email?: string;
  readonly telefone?: string;
  readonly dataNascimento?: Date;
  readonly dataCadastro?: Date;
  readonly dataAtualizacao?: Date;
  readonly dataExclusao?: Date;
  readonly ativo?: boolean;
  readonly token?: string;
}
