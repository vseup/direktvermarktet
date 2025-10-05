import { Injectable } from '@nestjs/common';
import { CreateFarmDto } from './dto/create-farm.dto';
import { UpdateFarmDto } from './dto/update-farm.dto';
import { PrismaService } from 'prisma/prisma.service';
import { Farm } from '@prisma/client';

@Injectable()
export class FarmsService {

  constructor(private prisma: PrismaService) { }

  async create(createFarmDto: CreateFarmDto): Promise<Farm> {
    return this.prisma.farm.create({
      data: {
        ...createFarmDto,
        location: {
          create: createFarmDto.location
        },
        previewImage: {
          create: createFarmDto.previewImage
        },
        avatarImage: {
          create: createFarmDto.avatarImage
        }
      },
      include: {
        location: true,
        previewImage: true,
        avatarImage: true
      }
    });
  }

  findAll() {
    return `This action returns all farms`;
  }

  findOne(id: number) {
    return `This action returns a #${id} farm`;
  }

  update(id: number, data: UpdateFarmDto) {
    return `This action updates a #${id} farm`;
  }

  remove(id: number) {
    return `This action removes a #${id} farm`;
  }
}
