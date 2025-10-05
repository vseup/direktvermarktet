import { Module } from '@nestjs/common';
import { SalesModesService } from './sales-modes.service';
import { SalesModesController } from './sales-modes.controller';

@Module({
  controllers: [SalesModesController],
  providers: [SalesModesService],
})
export class SalesModesModule {}
