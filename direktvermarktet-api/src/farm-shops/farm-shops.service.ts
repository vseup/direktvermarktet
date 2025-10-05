import { Injectable } from '@nestjs/common';
import { CreateFarmShopDto } from './dto/create-farm-shop.dto';
import { UpdateFarmShopDto } from './dto/update-farm-shop.dto';

@Injectable()
export class FarmShopsService {
  create(createFarmShopDto: CreateFarmShopDto) {
    return 'This action adds a new farmShop';
  }

  findAll() {
    return `This action returns all farmShops`;
  }

  findOne(id: number) {
    return `This action returns a #${id} farmShop`;
  }

  update(id: number, updateFarmShopDto: UpdateFarmShopDto) {
    return `This action updates a #${id} farmShop`;
  }

  remove(id: number) {
    return `This action removes a #${id} farmShop`;
  }
}
