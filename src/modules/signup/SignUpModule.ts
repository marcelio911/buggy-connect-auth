import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';

import { SignUpController } from './controllers/SignUpController';
import { SignUpService } from './services/SignUpService';
import { SignUpRepository } from './repositories/SignUpRepository';
import { Usuario, UsuarioSchema } from '../../data/schemas/UsuarioSchema';
import { MongooseModule } from '@nestjs/mongoose';
// import { UsuarioModule } from '../users/UsuarioModule';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Usuario.name, schema: UsuarioSchema }]),
  ],
  controllers: [SignUpController],
  providers: [SignUpService, SignUpRepository],
})
export class SignupModule {}
