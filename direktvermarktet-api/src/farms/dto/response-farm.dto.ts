import { Exclude, Expose } from 'class-transformer';
import { ResponseImageDto } from 'src/images/dto/response-image.dto';
import { ResponseLocationDto } from 'src/locations/dto/response-location.dto';

@Exclude()
export class ResponseFarmDto {
    @Expose() id: string;
    @Expose() name: string;
    @Expose() slogan: Date;
    @Expose() description: string;
    @Expose() url?: string;
    @Expose() location: ResponseLocationDto;
    @Expose() previewImage?: ResponseImageDto;
    @Expose() avatarImage?: ResponseImageDto;
    @Expose() images: ResponseFarmDto[];
}