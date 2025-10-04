import { Module } from '@nestjs/common';
import { FarmshopsService } from './farmshops.service';
import { FarmshopsController } from './farmshops.controller';

@Module({
  controllers: [FarmshopsController],
  providers: [FarmshopsService],
})
export class FarmshopsModule {}
