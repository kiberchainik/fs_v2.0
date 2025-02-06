import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsOptional, IsString, MinLength } from "class-validator"

export class LoginDto {
    @ApiProperty({
        required: true,
        description: 'Email attuale dell\'agenzia'
    })
    @IsString({ message: 'Email to by string' })
    @IsEmail({}, { message: 'Email incorrect' })
    email: string

    @ApiProperty({
        required: true,
        description: 'Password per l\'accesso, minimo 6 caratteri (almeno una lettera maiuscola, almeno un numero, almeno un carattere speciale)'
    })
    @IsString({ message: 'Password to by string' })
    @MinLength(6, { message: 'Password length from 6 simbols' })
    password: string

    @ApiProperty({
        required: false,
        description: 'Codice di verifica per l\'accesso, se e\' stato selezionato two-factor authentication (2FA)'
    })
    @IsOptional()
    @IsString()
    code: string
}