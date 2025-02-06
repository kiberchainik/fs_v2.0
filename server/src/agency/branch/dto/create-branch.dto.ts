import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsOptional, IsPhoneNumber, IsString } from "class-validator"

export class CreateBranchDto {
    @ApiProperty({ required: true, description: 'Nome della filiale' })
    @IsString({ message: 'Nome della filiale' })
    name: string

    @ApiProperty({ required: true, description: 'Nome della filiale' })
    @IsString({ message: 'È necessario fornire un\'e-mail' })
    @IsEmail({}, { message: 'È necessario fornire un\'e-mail' })
    email: string

    @ApiProperty({ required: true, description: 'Si prega di fornire telefono della filiale' })
    @IsString({ message: 'Formato telefono non valido' })
    @IsPhoneNumber('IT')
    phone: string

    @ApiProperty({ required: false, description: 'Si prega di fornire telefono della filiale, se necessario' })
    @IsOptional()
    fax?: string

    @ApiProperty({ required: true, description: 'Si prega di fornire l\'indirizzo completo della filiale' })
    @IsString({ message: 'Si prega di fornire l\'indirizzo completo della filiale' })
    address: string

    @ApiProperty({ required: true, description: 'Indicare la città in cui si trova la filiale' })
    @IsString({ message: 'Indicare la città in cui si trova la filiale' })
    location: string

    @ApiProperty({ required: true, description: 'Indicare la regione in cui si trova la filiale' })
    @IsString({ message: 'Indicare la regione in cui si trova la filiale' })
    region: string

    @ApiProperty({ required: false, description: 'Url dell\'immagine, se necessario' })
    @IsString({ message: 'url dell\'immagine, se necessario' })
    @IsOptional()
    logo?: string

    @ApiProperty({ required: true, description: '' })
    @IsOptional()
    @IsString({ message: 'Scrivi una breve descrizione del filiale' })
    about_branch?: string
}