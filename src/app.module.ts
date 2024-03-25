import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AutenticacaoModule } from './modules/autenticacao/autenticacao.module';
import { PerfisDeUsuarioModule } from './modules/perfis-de-usuario/perfis-de-usuario.module';
import { EmailServiceService } from './modules/notifications/email-service/email-service.service';

@Module({
  imports: [
    AutenticacaoModule,
    PerfisDeUsuarioModule,
    ConfigModule.forRoot({ envFilePath: `.env.${process.env.NODE_ENV}` }),
    MongooseModule.forRoot(
      `mongodb+srv://${encodeURIComponent(
        process.env.USER_DB as string,
      )}:${encodeURIComponent(process.env.PASS_DB as string)}@${
        process.env.HOST_DB
      }/`,
    ),
    PerfisDeUsuarioModule,
  ],
  controllers: [AppController],
  providers: [AppService, EmailServiceService],
})
export class AppModule {}
