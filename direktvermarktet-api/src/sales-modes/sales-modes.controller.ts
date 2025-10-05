import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SalesModesService } from './sales-modes.service';
import { CreateSalesModeDto } from './dto/create-sales-mode.dto';
import { UpdateSalesModeDto } from './dto/update-sales-mode.dto';

@Controller('sales-modes')
export class SalesModesController {
  constructor(private readonly salesModesService: SalesModesService) {}

  @Post()
  create(@Body() createSalesModeDto: CreateSalesModeDto) {
    return this.salesModesService.create(createSalesModeDto);
  }

  @Get()
  findAll() {
    return this.salesModesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salesModesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSalesModeDto: UpdateSalesModeDto) {
    return this.salesModesService.update(+id, updateSalesModeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.salesModesService.remove(+id);
  }
}
