import { IsString } from "class-validator";

export class CreateWorkingTimeDto {
    @IsString({message: 'Working time name cannont be empty. NameOnly text format'})
    name: string
}