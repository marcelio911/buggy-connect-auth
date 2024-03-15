export interface IAutenticacaoDto {
  readonly id?: number;
  readonly apelido: string;
  readonly senha: string;
  readonly permitido: boolean;
  readonly desativado: boolean;
  readonly dataCadastro?: Date;
  readonly dataAtualizacao?: Date;
  readonly dataExclusao?: Date;
  readonly accessToken?: string;
}

export class AutenticacaoResponseDto {
  id?: number;
  apelido?: string;
  permitido?: boolean;
  desativado?: boolean;
  dataCadastro?: Date;
  dataAtualizacao?: Date;
  dataExclusao?: Date;
  accessToken?: string;

  static convertToResponseDto(
    autenticacao: IAutenticacaoDto,
  ): AutenticacaoResponseDto {
    return {
      id: autenticacao.id,
      apelido: autenticacao.apelido,
      permitido: autenticacao.permitido,
      desativado: autenticacao.desativado,
      dataCadastro: autenticacao.dataCadastro,
      dataAtualizacao: autenticacao.dataAtualizacao,
      dataExclusao: autenticacao.dataExclusao,
      accessToken: autenticacao.accessToken,
    } as AutenticacaoResponseDto;
  }
}
