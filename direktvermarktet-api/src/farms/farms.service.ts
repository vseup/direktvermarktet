import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { FarmCreateRequest, FarmUpdateRequest, FarmResponse } from '@direktvermarktet/schemas';

@Injectable()
export class FarmsService {

  constructor(private readonly prisma: PrismaService) { }

  create(request: FarmCreateRequest): Promise<FarmResponse> {
    const previewImage = request.previewImage ? { create: request.previewImage } : undefined;
    const avatarImage = request.avatarImage ? { create: request.avatarImage } : undefined;
    return this.prisma.farm.create({
      data: {
        ...request,
        location: {
          create: request.location
        },
        previewImage: previewImage,
        avatarImage: avatarImage,
      },
      include: {
        location: true,
        previewImage: true,
        avatarImage: true
      }
    });
  }

  findAll(): Promise<FarmResponse[]> {
    return this.prisma.farm.findMany({
      include: {
        location: true,
        previewImage: true,
        avatarImage: true
      }
    });
  }

  findById(id: string): Promise<FarmResponse | null> {
    return this.prisma.farm.findUnique({
      where: { id: id },
      include: {
        location: true,
        previewImage: true,
        avatarImage: true
      }
    })
  }

  update(id: string, request: FarmUpdateRequest): Promise<FarmResponse> {
    return this.prisma.farm.update({
      where: { id: id },
      data: { ...request },
      include: {
        location: true,
        previewImage: true,
        avatarImage: true
      }
    })
  }

  async remove(id: string): Promise<void> {
    await this.prisma.$transaction(async (transaction) => {

      const farm = await transaction.farm.findUnique({ where: { id: id } })
      if (!farm) return;

      const farmShops = await transaction.farmShop.findMany({ where: { farmId: id } })
      for (const farmShop of farmShops) {
        await transaction.farmShop.delete({ where: { id: farmShop.id } })
        await transaction.location.delete({ where: { id: farmShop.locationId } })
        if (farmShop.previewImageId) {
          await transaction.image.delete({ where: { id: farmShop.previewImageId } })
        }
        if (farmShop.avatarImageId) {
          await transaction.image.delete({ where: { id: farmShop.avatarImageId } })
        }
      }

      await transaction.farm.delete({ where: { id: id } });
      await transaction.location.delete({ where: { id: farm.locationId } })
      if (farm.previewImageId) {
        await transaction.image.delete({ where: { id: farm.previewImageId } })
      }
      if (farm.avatarImageId) {
        await transaction.image.delete({ where: { id: farm.avatarImageId } })
      }
    })
  }
}
