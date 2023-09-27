import { Injectable } from '@nestjs/common';
import { ICliente } from '../../../data/interfaces/ICliente';
import { Constants } from '../../../utils/contantes/Contants';
import { IService } from '../../../@main/services/IService';
import { ClienteRepository } from '../repositories/ClienteRepository';

@Injectable()
export class ClienteService implements IService<ICliente> {
  constructor(readonly repository: ClienteRepository) {
    this.repository = repository;
  }
  findByEmail(data: ICliente): Promise<ICliente | null> {
    const userFound = this.repository.findByEmail(data.email as string);
    return userFound;
  }
  listar(): Promise<ICliente[]> {
    return this.repository.listar();
  }
  atualizar(b: ICliente): Promise<ICliente> {
    return this.repository.atualizar(b);
  }
  remover(c: ICliente): Promise<void> {
    const data = { ...c };
    data.dataExclusao = new Date();
    data.ativo = false;
    return this.repository.remover(data);
  }

  cadastrar(usuario: ICliente): Promise<ICliente> {
    return this.repository.cadastrar(usuario);
  }

  validation(usuario: ICliente): boolean | Error {
    const exist = this.repository.findByEmail(usuario?.email as string);

    if (!!exist) {
      return Error(Constants.USUARIO_JA_CADASTRADO);
    }

    return true;
  }
}
