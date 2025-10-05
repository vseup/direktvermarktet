import { Injectable } from '@nestjs/common';
import { CreateSalesModeDto } from './dto/create-sales-mode.dto';
import { UpdateSalesModeDto } from './dto/update-sales-mode.dto';

@Injectable()
export class SalesModesService {
  create(createSalesModeDto: CreateSalesModeDto) {
    return 'This action adds a new salesMode';
  }

  findAll() {
    return `This action returns all salesModes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} salesMode`;
  }

  update(id: number, updateSalesModeDto: UpdateSalesModeDto) {
    return `This action updates a #${id} salesMode`;
  }

  remove(id: number) {
    return `This action removes a #${id} salesMode`;
  }
}
