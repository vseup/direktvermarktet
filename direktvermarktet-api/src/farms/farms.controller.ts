import { Controller, Get, Post, Body, Put, Param, Delete, NotFoundException } from '@nestjs/common';
import { FarmsService } from './farms.service';
import { type FarmResponse, type FarmCreateRequest, type FarmUpdateRequest } from '@direktvermarktet/schemas'

@Controller('farms')
export class FarmsController {
  constructor(private readonly farmsService: FarmsService) { }

  @Post()
  create(@Body() request: FarmCreateRequest): Promise<FarmResponse> {
    return this.farmsService.create(request);
  }

  @Get()
  findAll(): Promise<FarmResponse[]> {
    return this.farmsService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<FarmResponse> {
    const farm = await this.farmsService.findById(id);
    if (!farm) throw new NotFoundException('Farm not found')
    return farm;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() request: FarmUpdateRequest): Promise<FarmResponse> {
    return this.farmsService.update(id, request);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.farmsService.remove(id);
  }
}
