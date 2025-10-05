import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FarmShopsService } from './farm-shops.service';
import { CreateFarmShopDto } from './dto/create-farm-shop.dto';
import { UpdateFarmShopDto } from './dto/update-farm-shop.dto';

@Controller('farm-shops')
export class FarmShopsController {
  constructor(private readonly farmShopsService: FarmShopsService) {}

  @Post()
  create(@Body() createFarmShopDto: CreateFarmShopDto) {
    return this.farmShopsService.create(createFarmShopDto);
  }

  @Get()
  findAll() {
    return this.farmShopsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.farmShopsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFarmShopDto: UpdateFarmShopDto) {
    return this.farmShopsService.update(+id, updateFarmShopDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.farmShopsService.remove(+id);
  }
}
