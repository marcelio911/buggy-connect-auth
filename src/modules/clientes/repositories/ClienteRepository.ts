import { InjectModel } from '@nestjs/mongoose';
import { IRepository } from '../../../@main/repositories/IRepository';
import { ICliente } from '../../../data/interfaces/ICliente';
import { Cliente } from '../../../data/schemas/ClienteSchema';
import { Model } from 'mongoose';

export class ClienteRepository implements IRepository<Cliente> {
  constructor(
    @InjectModel(Cliente.name) private clienteModel: Model<Cliente>,
  ) {}
  async cadastrar(a: Cliente): Promise<ICliente> {
    const clienteCriado = new this.clienteModel(a);
    return clienteCriado.save();
  }
  async listar(): Promise<ICliente[]> {
    return this.clienteModel.find().exec();
  }
  async atualizar(b: Cliente): Promise<ICliente> {
    const object = await this.findByEmail(b.email as string);
    return new this.clienteModel(object).replaceOne(b);
  }
  async remover(c: Cliente): Promise<void> {
    new this.clienteModel(c).updateOne();
  }
  async findByEmail(email: string): Promise<Cliente | null> {
    return this.clienteModel.findOne({ email }).exec();
  }
}
