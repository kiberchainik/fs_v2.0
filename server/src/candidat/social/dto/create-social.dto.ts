import { IsString, IsUrl } from "class-validator";

export class CreateSocialDto {
    @IsUrl()
    @IsString()
    social: string
}