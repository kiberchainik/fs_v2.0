import { IsEmail, IsString } from "class-validator"

export class CreateContactDto {
    @IsString()
    name: string

    @IsString()
    @IsEmail({}, { message: 'Email is not valid!' })
    email: string

    @IsString()
    message: string
}