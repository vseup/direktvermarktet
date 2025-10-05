import { Country } from '@prisma/client';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class ResponseLocationDto {
    @Expose() id: string;
    @Expose() street: string;
    @Expose() houseNumber: string;
    @Expose() postalCode: string;
    @Expose() city: string;
    @Expose() country: Country;
    @Expose() googleMapsUrl?: string;
}