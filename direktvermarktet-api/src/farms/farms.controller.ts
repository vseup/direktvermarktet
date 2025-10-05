import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FarmsService } from './farms.service';
import { CreateFarmDto } from './dto/create-farm.dto';
import { UpdateFarmDto } from './dto/update-farm.dto';
import { plainToInstance } from 'class-transformer';
import { ResponseFarmDto } from './dto/response-farm.dto';

@Controller('farms')
export class FarmsController {
  constructor(private readonly farmsService: FarmsService) { }

  @Post()
  async create(@Body() createFarmDto: CreateFarmDto) {
    const farm = await this.farmsService.create(createFarmDto);
    return plainToInstance(
      ResponseFarmDto,
      farm,
      { excludeExtraneousValues: true }
    )
  }

  @Get()
  findAll() {
    return this.farmsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.farmsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFarmDto: UpdateFarmDto) {
    return this.farmsService.update(+id, updateFarmDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.farmsService.remove(+id);
  }
}
