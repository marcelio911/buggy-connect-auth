import { Test, TestingModule } from '@nestjs/testing';
import { PerfisDeUsuarioDomain } from './perfis-de-usuario.domain';

describe('PerfisDeUsuarioDomain', () => {
  let service: PerfisDeUsuarioDomain;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PerfisDeUsuarioDomain],
    }).compile();

    service = module.get<PerfisDeUsuarioDomain>(PerfisDeUsuarioDomain);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
