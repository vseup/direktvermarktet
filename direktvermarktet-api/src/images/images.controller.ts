import { Controller, Get, Post, Body, Put, Param, Delete, NotFoundException } from '@nestjs/common';
import { ImagesService } from './images.service';
import { type ImageResponse, type ImageCreateRequest, type ImageUpdateRequest } from '@direktvermarktet/schemas'

@Controller('images')
export class ImagesController {

  constructor(private readonly imagesService: ImagesService) { }

  @Post()
  create(@Body() request: ImageCreateRequest): Promise<ImageResponse> {
    return this.imagesService.create(request);
  }

  @Get()
  findAll(): Promise<ImageResponse[]> {
    return this.imagesService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<ImageResponse> {
    const image = await this.imagesService.findById(id);
    if (!image) throw new NotFoundException('Image not found')
    return image;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() request: ImageUpdateRequest): Promise<ImageResponse> {
    return this.imagesService.update(id, request);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.imagesService.remove(id);
  }
}
