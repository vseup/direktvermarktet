import { Module } from '@nestjs/common';
import { FarmShopsService } from './farm-shops.service';
import { FarmShopsController } from './farm-shops.controller';

@Module({
  controllers: [FarmShopsController],
  providers: [FarmShopsService],
})
export class FarmShopsModule {}
