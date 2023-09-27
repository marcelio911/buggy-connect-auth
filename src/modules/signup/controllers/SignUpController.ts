import { Body, Controller, Get, Post } from '@nestjs/common';
import { ISignUpController } from './IController';
import { SignUpService } from '../services/SignUpService';
import { IUsuario } from '../../../data/interfaces/IUsuario';

@Controller('signup')
export class SignUpController implements ISignUpController {
  constructor(readonly service: SignUpService) {}

  @Get('login')
  async entrar(@Body() usuario: IUsuario) {
    const res = await this.service.entrar(usuario);
    console.log('Entrou no controller ', res);
    return usuario;
  }

  @Post('logout')
  async sair(@Body() usuario: IUsuario) {
    return this.service.sair(usuario);
  }

  @Post('register')
  async cadastrar(@Body() usuario: IUsuario) {
    return await this.service.cadastrar(usuario);
  }
}
