// Exemplo de um mock para AutenticacaoService

import { InformacoesAdicionaisUsuarioDto } from '../../modules/autenticacao/data/interfaces/InformacoesAdicionaisUsuarioDto';

export class MockAutenticacaoService {
  async signUp(
    user: InformacoesAdicionaisUsuarioDto,
  ): Promise<InformacoesAdicionaisUsuarioDto> {
    // Implemente a lógica do mock aqui
    return user;
  }
}
