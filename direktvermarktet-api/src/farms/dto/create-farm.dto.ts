import { IsNotEmpty, IsOptional, IsString, IsUrl, IsUUID, MaxLength, MinLength } from "class-validator";

export class CreateFarmDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  name: string

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  slogan: string

  @IsNotEmpty()
  @IsString()
  @MinLength(0)
  @MaxLength(2000)
  description: string

  @IsOptional()
  @IsString()
  @IsUrl()
  url?: string

  @IsUUID()
  @IsNotEmpty()
  locationId: string;

  @IsUUID()
  @IsOptional()
  previewImageId?: string;
}