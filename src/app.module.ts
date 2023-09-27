import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SignUpController } from './presentation/controllers/SignUpController';

@Module({
  imports: [],
  controllers: [AppController, SignUpController],
  providers: [AppService],
})
export class AppModule {}
