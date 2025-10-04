import { PartialType } from '@nestjs/mapped-types';
import { CreateFarmshopDto } from './create-farmshop.dto';

export class UpdateFarmshopDto extends PartialType(CreateFarmshopDto) {}
