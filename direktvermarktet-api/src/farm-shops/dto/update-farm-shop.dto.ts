import { PartialType } from '@nestjs/mapped-types';
import { CreateFarmShopDto } from './create-farm-shop.dto';

export class UpdateFarmShopDto extends PartialType(CreateFarmShopDto) {}
