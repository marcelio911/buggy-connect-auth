import { Test, TestingModule } from '@nestjs/testing';
import { AutenticacaoService } from './autenticacao.service';
import { AutenticacaoRepository } from '../autenticacao.repository';
import { UsuarioSchema } from '../../../data/schemas/UsuarioSchema';

describe('AutenticacaoService', () => {
  let service: AutenticacaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AutenticacaoService,
        AutenticacaoRepository,
        {
          provide: 'UsuarioSchemaModel',
          useValue: UsuarioSchema,
        },
      ],
    }).compile();

    service = module.get<AutenticacaoService>(AutenticacaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
