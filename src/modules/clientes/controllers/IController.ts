import { ICliente } from '../../../data/interfaces/ICliente';

export interface IClienteController {
  cadastrar(a: ICliente): void;
  listar(): void;
  remover(b: ICliente): void;
  atualizar(c: ICliente): void;
}
