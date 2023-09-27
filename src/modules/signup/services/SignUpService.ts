import { Injectable } from '@nestjs/common';
import { IUsuario } from '../../../data/interfaces/IUsuario';
import { capturarRespostas } from '../exceptions/handlersResponse';
import { SignUpRepository } from '../repositories/SignUpRepository';

@Injectable()
export class SignUpService {
  constructor(readonly repository: SignUpRepository) {}

  async entrar(usuario: IUsuario): Promise<any> {
    try {
      const res = await this.repository.findByEmail(usuario.email as string);
      return res;
    } catch (error) {
      capturarRespostas(error as Error, usuario);
    }
  }

  async sair(usuario: IUsuario): Promise<any> {
    try {
      return { mensagem: 'Usuário deslogado com sucesso!' };
    } catch (error) {
      capturarRespostas(error as Error, usuario);
    }
  }

  async cadastrar(usuario: IUsuario): Promise<any> {
    try {
      const criado = await this.repository.cadastrar(usuario);
      return {
        mensagem: 'Usuário criado com sucesso!',
        criado,
      };
    } catch (error) {
      capturarRespostas(error as Error, usuario);
    }
  }
}
