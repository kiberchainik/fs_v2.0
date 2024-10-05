import { IsNotEmpty, IsString } from "class-validator";

export class NewPasswordDto {
    @IsString({message:'Password is faled'})
    @IsNotEmpty({message: 'required field'})
    password: string
}