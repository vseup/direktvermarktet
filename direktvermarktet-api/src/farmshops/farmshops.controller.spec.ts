import { Test, TestingModule } from '@nestjs/testing';
import { FarmshopsController } from './farmshops.controller';
import { FarmshopsService } from './farmshops.service';

describe('FarmshopsController', () => {
  let controller: FarmshopsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FarmshopsController],
      providers: [FarmshopsService],
    }).compile();

    controller = module.get<FarmshopsController>(FarmshopsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
