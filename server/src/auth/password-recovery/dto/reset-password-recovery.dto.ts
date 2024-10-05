import { IsNotEmpty, IsEmail } from "class-validator";

export class ResetPasswordDto {
    @IsEmail({}, {message:'Email is not string'})
    @IsNotEmpty({message: 'required field'})
    email: string
}