import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SignupModule } from './modules/signup/SignUpModule';

@Module({
  imports: [SignupModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
