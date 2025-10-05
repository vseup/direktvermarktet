import { Type } from "class-transformer";
import { IsNotEmpty, IsOptional, IsString, IsUrl, MaxLength, MinLength, ValidateNested } from "class-validator";
import { CreateImageDto } from "src/images/dto/create-image.dto";
import { CreateLocationDto } from "src/locations/dto/create-location.dto";

export class CreateFarmDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(50)
  name: string

  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(50)
  slogan: string

  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(2000)
  description: string

  @IsOptional()
  @IsString()
  @IsUrl()
  url?: string

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CreateLocationDto)
  location: CreateLocationDto

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateImageDto)
  previewImage?: CreateImageDto

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateImageDto)
  avatarImage?: CreateImageDto
}