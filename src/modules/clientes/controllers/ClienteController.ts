import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { IClienteController } from './IController';
import { ClienteService } from '../services/ClienteService';
import { ICliente } from '../../../data/interfaces/ICliente';

@Controller('clientes')
export class ClienteController implements IClienteController {
  constructor(readonly service: ClienteService) {}

  @Post()
  async cadastrar(@Body() body: ICliente) {
    const res = await this.service.cadastrar(body);
    console.log('Entrou no controller ', res);
    return res;
  }

  @Delete()
  async remover(@Body() body: ICliente) {
    const res = await this.service.remover(body);
    console.log('Entrou no remover ', res);
    return res;
  }

  @Put()
  async atualizar(@Body() body: ICliente) {
    const res = await this.service.atualizar(body);
    console.log('Entrou no atualizar ', res);
    return res;
  }

  @Get()
  async listar() {
    return await this.service.listar();
  }
}
