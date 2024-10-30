import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsOptional, IsString, MinLength } from "class-validator"

export class LoginDto{
    @ApiProperty({
        required: true,
        description: 'In this field you must specify the email address that was used for registration.'
    })
    @IsString({message: 'Email to by string'})
    @IsEmail({}, {message: 'Email incorrect'})
    email: string

    @ApiProperty({
        required: true,
        description: 'In this field you must specify the password that you entered during registration.'
    })
    @IsString({message: 'Password to by string'})
    @MinLength(6, {message: 'Password length from 6 simbols'})
    password: string

    @IsOptional()
    @IsString()
    code: string
}