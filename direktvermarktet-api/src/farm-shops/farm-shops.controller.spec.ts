import { Test, TestingModule } from '@nestjs/testing';
import { FarmShopsController } from './farm-shops.controller';
import { FarmShopsService } from './farm-shops.service';

describe('FarmShopsController', () => {
  let controller: FarmShopsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FarmShopsController],
      providers: [FarmShopsService],
    }).compile();

    controller = module.get<FarmShopsController>(FarmShopsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
