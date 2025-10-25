import { LocationCreateRequest, LocationResponse, LocationUpdateRequest } from '@direktvermarktet/schemas';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class LocationsService {

    constructor(private readonly prisma: PrismaService) { }

    create(request: LocationCreateRequest): Promise<LocationResponse> {
        return this.prisma.location.create({
            data: { ...request }
        })
    }

    findAll(): Promise<LocationResponse[]> {
        return this.prisma.location.findMany();
    }

    findById(id: string): Promise<LocationResponse | null> {
        return this.prisma.location.findUnique({
            where: { id: id }
        })
    }

    update(id: string, request: LocationUpdateRequest): Promise<LocationResponse> {
        return this.prisma.location.update({
            where: { id: id },
            data: { ...request }
        })
    }

    async remove(id: string): Promise<void> {
        await this.prisma.location.delete({ where: { id: id } })
    }

}
