import { IUsuario } from '../../../data/interfaces/IUsuario';

export interface ISignUpController {
  entrar(usuario: IUsuario): void;
  cadastrar(usuario: IUsuario): void;
  sair(usuario: IUsuario): void;
}
