import { Test, TestingModule } from '@nestjs/testing';
import { PerfisDeUsuarioController } from './perfis-de-usuario.controller';

describe('PerfisDeUsuarioController', () => {
  let controller: PerfisDeUsuarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PerfisDeUsuarioController],
    }).compile();

    controller = module.get<PerfisDeUsuarioController>(PerfisDeUsuarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
