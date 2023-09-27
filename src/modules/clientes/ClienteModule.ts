import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ClienteRepository } from './repositories/ClienteRepository';
import { Cliente, ClienteSchema } from '../../data/schemas/ClienteSchema';
import { ClienteService } from './services/ClienteService';
import { ClienteController } from './controllers/ClienteController';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Cliente.name, schema: ClienteSchema }]),
  ],
  controllers: [ClienteController],
  providers: [ClienteService, ClienteRepository, Cliente],
})
export class ClienteModule {}
