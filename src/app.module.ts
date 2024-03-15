import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ClienteModule } from './modules/clientes/ClienteModule';
import { AutenticacaoModule } from './modules/autenticacao/autenticacao.module';

@Module({
  imports: [
    AutenticacaoModule,
    ClienteModule,
    ConfigModule.forRoot({ envFilePath: `.env.${process.env.NODE_ENV}` }),
    MongooseModule.forRoot(
      `mongodb+srv://${encodeURIComponent(
        process.env.USER_DB as string,
      )}:${encodeURIComponent(process.env.PASS_DB as string)}@${
        process.env.HOST_DB
      }/`,
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
