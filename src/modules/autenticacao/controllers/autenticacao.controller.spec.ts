import { Test, TestingModule } from '@nestjs/testing';
import { AutenticacaoController } from './autenticacao.controller';
import { UsuarioSchema } from '../../../data/schemas/UsuarioSchema';

describe('AutenticacaoController', () => {
  let controller: AutenticacaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AutenticacaoController],
      providers: [
        {
          provide: 'UsuarioSchemaModel',
          useValue: UsuarioSchema,
        },
      ],
    }).compile();

    controller = module.get<AutenticacaoController>(AutenticacaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
