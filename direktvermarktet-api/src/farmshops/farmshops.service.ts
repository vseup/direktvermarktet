import { Injectable } from '@nestjs/common';
import { CreateFarmshopDto } from './dto/create-farmshop.dto';
import { UpdateFarmshopDto } from './dto/update-farmshop.dto';

@Injectable()
export class FarmshopsService {
  create(createFarmshopDto: CreateFarmshopDto) {
    return 'This action adds a new farmshop';
  }

  findAll() {
    return `This action returns all farmshops`;
  }

  findOne(id: number) {
    return `This action returns a #${id} farmshop`;
  }

  update(id: number, updateFarmshopDto: UpdateFarmshopDto) {
    return `This action updates a #${id} farmshop`;
  }

  remove(id: number) {
    return `This action removes a #${id} farmshop`;
  }
}
