import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { FarmShopCreateRequest, FarmShopResponse, FarmShopUpdateRequest } from '@direktvermarktet/schemas';

@Injectable()
export class FarmShopsService {

  constructor(private readonly prisma: PrismaService) { }

  async create(request: FarmShopCreateRequest): Promise<FarmShopResponse> {
    const { farmId, ...data } = request;
    const previewImage = request.previewImage ? { create: request.previewImage } : undefined;
    const avatarImage = request.avatarImage ? { create: request.avatarImage } : undefined;
    return this.prisma.farmShop.create({
      data: {
        ...data,
        farm: { connect: { id: request.farmId } },
        location: {
          create: request.location
        },
        previewImage: previewImage,
        avatarImage: avatarImage
      },
      include: {
        location: true,
        farm: { include: { location: true, previewImage: true, avatarImage: true } },
        previewImage: true,
        avatarImage: true
      }
    })
  }

  findAll(): Promise<FarmShopResponse[]> {
    return this.prisma.farmShop.findMany({
      include: {
        location: true,
        farm: { include: { location: true, previewImage: true, avatarImage: true } },
        previewImage: true,
        avatarImage: true
      }
    });
  }

  findById(id: string): Promise<FarmShopResponse | null> {
    return this.prisma.farmShop.findUnique({
      where: { id: id },
      include: {
        location: true,
        farm: { include: { location: true, previewImage: true, avatarImage: true } },
        previewImage: true,
        avatarImage: true
      }
    })
  }

  update(id: string, request: FarmShopUpdateRequest): Promise<FarmShopResponse> {
    return this.prisma.farmShop.update({
      where: { id: id },
      data: { ...request },
      include: {
        location: true,
        farm: { include: { location: true, previewImage: true, avatarImage: true } },
        previewImage: true,
        avatarImage: true
      }
    })
  }

  async remove(id: string): Promise<void> {
    await this.prisma.$transaction(async (transaction) => {

      const farmShop = await transaction.farmShop.findUnique({ where: { id: id } })
      if (!farmShop) return;

      await transaction.farmShop.delete({ where: { id: id } });
      await transaction.location.delete({ where: { id: farmShop.locationId } })
      if (farmShop.previewImageId) {
        await transaction.image.delete({ where: { id: farmShop.previewImageId } })
      }
      if (farmShop.avatarImageId) {
        await transaction.image.delete({ where: { id: farmShop.avatarImageId } })
      }
    })
  }
}
