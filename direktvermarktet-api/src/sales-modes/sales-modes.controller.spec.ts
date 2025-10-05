import { Test, TestingModule } from '@nestjs/testing';
import { SalesModesController } from './sales-modes.controller';
import { SalesModesService } from './sales-modes.service';

describe('SalesModesController', () => {
  let controller: SalesModesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SalesModesController],
      providers: [SalesModesService],
    }).compile();

    controller = module.get<SalesModesController>(SalesModesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
