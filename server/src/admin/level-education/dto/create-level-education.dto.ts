import { IsString } from "class-validator";

export class CreateLevelEducationDto {
    @IsString({message: 'Level name cannont be empty. NameOnly text format'})
    name: string
}