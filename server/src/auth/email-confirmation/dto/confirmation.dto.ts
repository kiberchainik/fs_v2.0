import { IsNotEmpty, IsString } from "class-validator";

export class ConfirmationDto {
    @IsString({message:'Token is not string'})
    @IsNotEmpty({message: 'required field'})
    toket: string
}