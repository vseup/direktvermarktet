import { Test, TestingModule } from '@nestjs/testing';
import { FarmshopsService } from './farmshops.service';

describe('FarmshopsService', () => {
  let service: FarmshopsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FarmshopsService],
    }).compile();

    service = module.get<FarmshopsService>(FarmshopsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
