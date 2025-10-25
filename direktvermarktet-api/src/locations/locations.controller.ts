import { type LocationCreateRequest, LocationResponse, type LocationUpdateRequest } from '@direktvermarktet/schemas';
import { Controller, Get, Post, Body, Put, Param, Delete, NotFoundException } from '@nestjs/common';
import { LocationsService } from './locations.service';

@Controller('locations')
export class LocationsController {

    constructor(private readonly locationsService: LocationsService) { }

    @Post()
    create(@Body() request: LocationCreateRequest): Promise<LocationResponse> {
        return this.locationsService.create(request);
    }

    @Get()
    findAll(): Promise<LocationResponse[]> {
        return this.locationsService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: string): Promise<LocationResponse> {
        const location = await this.locationsService.findById(id);
        if (!location) throw new NotFoundException('Location not found')
        return location;
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() request: LocationUpdateRequest): Promise<LocationResponse> {
        return this.locationsService.update(id, request);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.locationsService.remove(id);
    }

}
