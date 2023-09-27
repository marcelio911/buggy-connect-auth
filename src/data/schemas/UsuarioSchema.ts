import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IUsuario } from '../interfaces/IUsuario';
import * as mongoose from 'mongoose';

export type UsuarioDocument = mongoose.HydratedDocument<Usuario>;
@Schema()
export class Usuario implements IUsuario {
  @Prop({ type: mongoose.Schema.Types.ObjectId, auto: true })
  id?: number;

  @Prop({ required: true })
  nome?: string;

  @Prop({ required: true })
  apelido?: string;

  @Prop({ required: true })
  senha?: string;

  @Prop()
  confirmacaoSenha?: string;

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

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
