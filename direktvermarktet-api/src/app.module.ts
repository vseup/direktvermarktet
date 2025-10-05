import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FarmsModule } from './farms/farms.module';
import { FarmshopsModule } from './farmshops/farmshops.module';
import { PrismaModule } from 'prisma/prisma.module';
import { ImagesModule } from './images/images.module';
import { LocationsModule } from './locations/locations.module';
import { OpeningHoursModule } from './opening-hours/opening-hours.module';
import { SalesModesModule } from './sales-modes/sales-modes.module';

@Module({
  imports: [PrismaModule, FarmsModule, FarmshopsModule, ImagesModule, LocationsModule, OpeningHoursModule, SalesModesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
