// Exemplo de um mock para SignUpService

import { IUsuario } from '../../data/interfaces/IUsuario';

export class MockSignUpService {
  async signUp(user: IUsuario): Promise<IUsuario> {
    // Implemente a lógica do mock aqui
    return user;
  }
}
