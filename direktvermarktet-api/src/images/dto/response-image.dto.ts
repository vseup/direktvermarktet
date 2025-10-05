import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class ResponseImageDto {
    @Expose() id: string;
    @Expose() path: string;
}