import { IsString } from "class-validator";

export class CreateModeJobDto {
    @IsString({message: 'Mode job name cannont be empty. NameOnly text format'})
    name: string
}