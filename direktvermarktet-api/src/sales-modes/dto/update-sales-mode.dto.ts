import { PartialType } from '@nestjs/mapped-types';
import { CreateSalesModeDto } from './create-sales-mode.dto';

export class UpdateSalesModeDto extends PartialType(CreateSalesModeDto) {}
