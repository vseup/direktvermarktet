import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FarmsModule } from './farms/farms.module';
import { FarmshopsModule } from './farmshops/farmshops.module';

@Module({
  imports: [FarmsModule, FarmshopsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
