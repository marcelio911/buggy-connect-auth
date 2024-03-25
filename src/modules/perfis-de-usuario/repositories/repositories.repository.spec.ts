import { Test, TestingModule } from '@nestjs/testing';
import { PerfisDeUsuarioRepository } from './repositories.repository';

describe('PerfisDeUsuarioRepository', () => {
  let service: PerfisDeUsuarioRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PerfisDeUsuarioRepository],
    }).compile();

    service = module.get<PerfisDeUsuarioRepository>(PerfisDeUsuarioRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
