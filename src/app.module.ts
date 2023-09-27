import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SignupModule } from './modules/signup/SignUpModule';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ClienteModule } from './modules/clientes/ClienteModule';

console.log('process.env.username', process.env.USER_DB);
console.log('process.env.password', process.env.PASS_DB);
console.log('process.env.NODE_ENV', process.env.NODE_ENV);

@Module({
  imports: [
    SignupModule,
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
