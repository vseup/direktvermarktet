import { Controller, Get, Post, Body, Param, Put, Delete, NotFoundException } from '@nestjs/common';
import { FarmShopsService } from './farm-shops.service';
import { type FarmShopResponse, type FarmShopCreateRequest, type FarmShopUpdateRequest } from '@direktvermarktet/schemas'

@Controller('farm-shops')
export class FarmShopsController {

  constructor(private readonly farmShopsService: FarmShopsService) { }

  @Post()
  create(@Body() request: FarmShopCreateRequest): Promise<FarmShopResponse> {
    return this.farmShopsService.create(request);
  }

  @Get()
  findAll(): Promise<FarmShopResponse[]> {
    return this.farmShopsService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<FarmShopResponse> {
    const farmShop = await this.farmShopsService.findById(id);
    if (!farmShop) throw new NotFoundException('Farmshop not found')
    return farmShop;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() request: FarmShopUpdateRequest): Promise<FarmShopResponse> {
    return this.farmShopsService.update(id, request);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.farmShopsService.remove(id);
  }
}
