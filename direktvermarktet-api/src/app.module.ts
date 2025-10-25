import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FarmsModule } from './farms/farms.module';
import { PrismaModule } from 'prisma/prisma.module';
import { ImagesModule } from './images/images.module';
import { LocationsModule } from './locations/locations.module';
import { OpeningHoursModule } from './opening-hours/opening-hours.module';
import { SalesModesModule } from './sales-modes/sales-modes.module';
import { FarmShopsModule } from './farm-shops/farm-shops.module';
import { APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core'
import { ZodSerializerInterceptor, ZodValidationPipe } from 'nestjs-zod'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV ?? 'dev'}`
    }),
    PrismaModule,
    FarmsModule,
    ImagesModule,
    LocationsModule,
    OpeningHoursModule,
    SalesModesModule,
    FarmShopsModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_PIPE, useClass: ZodValidationPipe },
    { provide: APP_INTERCEPTOR, useClass: ZodSerializerInterceptor },
  ],
})
export class AppModule { }
