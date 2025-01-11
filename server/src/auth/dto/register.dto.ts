import { IsPasswordsMatchinConstraint } from "@/libs/common/decorators/is-passwords-matchin-constraint"
import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsString, MinLength, IsNotEmpty, Validate, IsOptional } from "class-validator"
import { UserRole } from "@prisma/client"

export class RegisterDto {
    @ApiProperty({
        required: true,
        description: 'Email attuale dell\'agenzia'
    })
    @IsNotEmpty({ message: 'Email attuale dell\'agenzia' })
    @IsEmail({}, { message: 'Il formato dell\'email non valido' })
    @IsString({ message: 'Scrivi email attuale' })
    email: string

    @ApiProperty({
        required: true,
        description: 'Password per l\'accesso, minimo 6 caratteri (almeno una lettera maiuscola, almeno un numero, almeno un carattere speciale)'
    })
    @MinLength(6, { message: 'Password per l\'accesso, minimo 6 caratteri (almeno una lettera maiuscola, almeno un numero, almeno un carattere speciale)' })
    @IsString({ message: 'Inserisci password' })
    password: string

    @ApiProperty({
        required: true,
        description: 'Ripeti la password'
    })
    @MinLength(6, { message: 'Le password non corrispondono' })
    @IsString({ message: 'Ripeti la password' })
    @Validate(IsPasswordsMatchinConstraint, {
        message: 'Le password non corrispondono'
    })
    passwordRepeat: string

    @IsOptional()
    @IsString({ message: 'Вы регистируетесь как кандидат или как агентвоство? ' })
    role: UserRole
}