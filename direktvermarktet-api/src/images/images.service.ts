import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { ImageResponse, ImageCreateRequest, ImageUpdateRequest } from '@direktvermarktet/schemas';

@Injectable()
export class ImagesService {

  constructor(private readonly prisma: PrismaService) { }

  create(request: ImageCreateRequest): Promise<ImageResponse> {
    return this.prisma.image.create({
      data: { ...request }
    })
  }

  findAll(): Promise<ImageResponse[]> {
    return this.prisma.image.findMany();
  }

  findById(id: string): Promise<ImageResponse | null> {
    return this.prisma.image.findUnique({
      where: { id: id }
    })
  }

  update(id: string, request: ImageUpdateRequest): Promise<ImageResponse> {
    return this.prisma.image.update({
      where: { id: id },
      data: { ...request }
    })
  }

  async remove(id: string): Promise<void> {
    await this.prisma.image.delete({ where: { id: id } })
  }
}
