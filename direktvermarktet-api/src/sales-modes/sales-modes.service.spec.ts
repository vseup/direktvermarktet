import { Test, TestingModule } from '@nestjs/testing';
import { SalesModesService } from './sales-modes.service';

describe('SalesModesService', () => {
  let service: SalesModesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SalesModesService],
    }).compile();

    service = module.get<SalesModesService>(SalesModesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
