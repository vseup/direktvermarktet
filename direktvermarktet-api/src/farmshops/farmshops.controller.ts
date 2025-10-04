import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FarmshopsService } from './farmshops.service';
import { CreateFarmshopDto } from './dto/create-farmshop.dto';
import { UpdateFarmshopDto } from './dto/update-farmshop.dto';

@Controller('farmshops')
export class FarmshopsController {
  constructor(private readonly farmshopsService: FarmshopsService) {}

  @Post()
  create(@Body() createFarmshopDto: CreateFarmshopDto) {
    return this.farmshopsService.create(createFarmshopDto);
  }

  @Get()
  findAll() {
    return this.farmshopsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.farmshopsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFarmshopDto: UpdateFarmshopDto) {
    return this.farmshopsService.update(+id, updateFarmshopDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.farmshopsService.remove(+id);
  }
}
