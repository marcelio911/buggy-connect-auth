import { Body, Controller, Post } from '@nestjs/common';
import { ISignUpController } from './IController';
import { SignUpService } from '../services/SignUpService';
import { IUsuario } from '../../../data/interfaces/IUsuario';

@Controller('signup')
export class SignUpController implements ISignUpController {
  constructor(readonly service: SignUpService) {}

  @Post('login')
  async entrar(@Body() usuario: IUsuario) {
    return this.service.entrar(usuario);
  }

  @Post('logout')
  async sair(@Body() usuario: IUsuario) {
    return this.service.sair(usuario);
  }

  @Post('register')
  async cadastrar(@Body() usuario: IUsuario) {
    return this.service.cadastrar(usuario);
  }
}
