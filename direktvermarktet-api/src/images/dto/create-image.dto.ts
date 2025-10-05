import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateImageDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(1)
    @MaxLength(1024)
    path: string
}