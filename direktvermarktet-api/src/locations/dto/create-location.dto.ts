import { Country } from "@prisma/client"
import { IsEnum, IsNotEmpty, IsOptional, IsString, IsUrl, MaxLength, MinLength } from "class-validator"

export class CreateLocationDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(1)
    @MaxLength(50)
    street: string

    @IsNotEmpty()
    @IsString()
    @MinLength(1)
    @MaxLength(20)
    houseNumber: string

    @IsNotEmpty()
    @IsString()
    @MinLength(1)
    @MaxLength(20)
    postalCode: string

    @IsNotEmpty()
    @IsString()
    @MinLength(1)
    @MaxLength(50)
    city: string

    @IsNotEmpty()
    @IsEnum(Country)
    country: Country

    @IsOptional()
    @IsUrl()
    googleMapsUrl?: string
}