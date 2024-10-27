import { IsString } from "class-validator";

export class CreateExperienceMinimalDto {
    @IsString({message: 'Experience cannont be empty. NameOnly text format'})
    name: string
}