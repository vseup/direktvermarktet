import { Test, TestingModule } from '@nestjs/testing';
import { FarmShopsService } from './farm-shops.service';

describe('FarmShopsService', () => {
  let service: FarmShopsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FarmShopsService],
    }).compile();

    service = module.get<FarmShopsService>(FarmShopsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
