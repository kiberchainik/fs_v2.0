import { IsString } from "class-validator";

export class CreateContractTypeDto {
    @IsString({message: 'Contract type name cannont be empty. NameOnly text format'})
    name: string
}