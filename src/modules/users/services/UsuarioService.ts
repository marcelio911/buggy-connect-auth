import { Injectable } from '@nestjs/common';
import { IUsuario } from '../../../data/interfaces/IUsuario';
import { Constants } from '../../../utils/contantes/Contants';
import { IService } from '../../../@main/services/IService';
import { UsuarioRepository } from '../repositories/UsuarioRepository';

@Injectable()
export class UsuarioService implements IService<IUsuario> {
  constructor(readonly repository: UsuarioRepository) {
    this.repository = repository;
  }
  findByEmail(data: IUsuario): Promise<IUsuario | null> {
    const userFound = this.repository.findByEmail(data.email as string);
    return userFound;
  }
  listar(): Promise<IUsuario[]> {
    return this.repository.listar();
  }
  atualizar(b: IUsuario): Promise<IUsuario> {
    return this.repository.atualizar(b);
  }
  remover(c: IUsuario): Promise<void> {
    return this.repository.remover(c);
  }

  cadastrar(usuario: IUsuario): Promise<IUsuario> {
    return this.repository.cadastrar(usuario);
  }

  validation(usuario: IUsuario): boolean | Error {
    const exist = this.repository.findByEmail(usuario?.email as string);

    if (!!exist) {
      return Error(Constants.USUARIO_JA_CADASTRADO);
    }

    if (!usuario?.apelido) {
      return Error(Constants.USUARIO_NAO_INFORMADO);
    }

    return true;
  }
}
