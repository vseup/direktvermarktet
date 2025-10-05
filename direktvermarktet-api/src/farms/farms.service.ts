import { Injectable } from '@nestjs/common';
import { CreateFarmDto } from './dto/create-farm.dto';
import { UpdateFarmDto } from './dto/update-farm.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class FarmsService {

  constructor(private prisma: PrismaService) { }

  create(data: CreateFarmDto) {
    return this.prisma.farm.create({ data });
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
