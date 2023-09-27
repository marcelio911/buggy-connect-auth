import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UsuarioRepository } from './repositories/UsuarioRepository';
import { UsuarioSchema } from '../../data/schemas/UsuarioSchema';
import { UsuarioService } from './services/UsuarioService';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.username}:${process.env.password}@${process.env.hostname}/authDatabase`,
      {
        connectionName: 'usuarios',
      },
    ),
  ],
  controllers: [],
  providers: [UsuarioService, UsuarioRepository, UsuarioSchema],
})
export class UsuarioModule {}
