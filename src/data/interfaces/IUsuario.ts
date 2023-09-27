export interface IUsuario {
  readonly apelido?: string;
  readonly senha?: string;
  readonly confirmacaoSenha?: string;
  readonly email?: string;
  readonly dataCadastro?: Date;
  readonly dataAtualizacao?: Date;
  readonly dataExclusao?: Date;
  readonly ativo?: boolean;
  readonly token?: string;
}
