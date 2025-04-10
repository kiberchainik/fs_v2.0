import { ArrayMinSize, IsDateString, IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString } from "class-validator";

export class CreateCandidatDto {
    @IsNotEmpty({ message: 'Email è obbligatorio' })
    @IsEmail({}, { message: 'Formato email non valido' })
    email: string

    @IsNotEmpty({ message: 'Il nome è obbligatorio' })
    @IsString({ message: 'Formato nome non valido' })
    name: string

    @IsNotEmpty({ message: 'Il cognome è obbligatorio' })
    @IsString({ message: 'Formato cognome non valido' })
    lastname: string

    @IsNotEmpty({ message: 'La data di nascita è obbligatoria' })
    @IsDateString({}, { message: 'Formato data non valido' })
    birthday: string

    @IsString({
        message: 'Fornire almeno un\'immagine',
        each: true
    })
    @ArrayMinSize(1, { message: 'Deve esserci almeno un\'immagine' })
    @IsNotEmpty({
        each: true,
        message: 'Il percorso dell\'immagine non può essere vuoto'
    })
    avatar: string[]

    @IsNotEmpty({ message: 'Il numero di telefono è obbligatorio' })
    @IsPhoneNumber('IT')
    phone: string

    @IsOptional()
    @IsString()
    resident: string

    @IsOptional()
    @IsString()
    about_my: string
}
