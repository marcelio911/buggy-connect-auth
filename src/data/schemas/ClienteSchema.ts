import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { ICliente } from '../interfaces/ICliente';

export type ClienteDocument = mongoose.HydratedDocument<Cliente>;

@Schema()
export class Cliente implements ICliente {
  @Prop({ type: mongoose.Schema.Types.ObjectId, auto: true })
  id?: number;

  @Prop({ required: true })
  nome?: string;

  @Prop({ required: true })
  email?: string;

  @Prop()
  telefone?: string;

  @Prop()
  dataNascimento?: Date;
  @Prop()
  dataCadastro?: Date;
  @Prop()
  dataAtualizacao?: Date;
  @Prop()
  dataExclusao?: Date;
  @Prop()
  ativo?: boolean;
}
export const ClienteSchema = SchemaFactory.createForClass(Cliente);
