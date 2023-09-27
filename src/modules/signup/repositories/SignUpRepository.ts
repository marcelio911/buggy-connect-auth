import { InjectModel } from '@nestjs/mongoose';
import { IRepository } from '../../../@main/repositories/IRepository';
import { IUsuario } from '../../../data/interfaces/IUsuario';
import { Usuario } from '../../../data/schemas/UsuarioSchema';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SignUpRepository implements IRepository<Usuario> {
  constructor(
    @InjectModel(Usuario.name) private usuarioModel: Model<Usuario>,
  ) {}
  async cadastrar(a: Usuario): Promise<IUsuario> {
    const usuarioCriado = new this.usuarioModel(a);
    return usuarioCriado.save();
  }
  async listar(): Promise<IUsuario[]> {
    return this.usuarioModel.find().exec();
  }
  async atualizar(b: Usuario): Promise<IUsuario> {
    return new this.usuarioModel(b).updateOne();
  }
  async remover(c: Usuario): Promise<void> {
    new this.usuarioModel(c).deleteOne();
  }
  async findByEmail(email: string): Promise<IUsuario | null> {
    return this.usuarioModel.findOne({ email }).exec();
  }
}
