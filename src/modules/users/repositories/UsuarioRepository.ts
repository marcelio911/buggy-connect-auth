import { InjectModel } from '@nestjs/mongoose';
import { IRepository } from '../../../@main/repositories/IRepository';
import { IUsuario } from '../../../data/interfaces/IUsuario';
import { UsuarioSchema } from '../../../data/schemas/UsuarioSchema';
import { Model } from 'mongoose';

export class UsuarioRepository implements IRepository<UsuarioSchema> {
  constructor(
    @InjectModel(UsuarioSchema.name) private usuarioModel: Model<UsuarioSchema>,
  ) {}
  async cadastrar(a: UsuarioSchema): Promise<IUsuario> {
    const usuarioCriado = new this.usuarioModel(a);
    return usuarioCriado.save();
  }
  async listar(): Promise<IUsuario[]> {
    return this.usuarioModel.find().exec();
  }
  async atualizar(b: UsuarioSchema): Promise<IUsuario> {
    return new this.usuarioModel(b).updateOne();
  }
  async remover(c: UsuarioSchema): Promise<void> {
    new this.usuarioModel(c).deleteOne();
  }
  async findByEmail(email: string): Promise<IUsuario | null> {
    return this.usuarioModel.findOne({ email }).exec();
  }
}
