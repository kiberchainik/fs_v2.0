import { ApiProperty } from "@nestjs/swagger"
import { ArrayMinSize, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, IsUrl } from "class-validator"

export class CreateAgencyDto {
  @ApiProperty({ required: true, description: 'Nome dell\'agenzia' })
  @IsNotEmpty({ message: 'Nome dell\'agenzia obbligatorio' })
  @IsString()
  agency_name: string

  @ApiProperty({ required: true, description: 'Indirizio dell\'agenzia obbligatorio' })
  @IsNotEmpty({ message: 'Indirizio dell\'agenzia obbligatorio' })
  @IsString()
  address: string

  @ApiProperty({ required: true, description: 'Numero di telefono obbligatorio', example: '+39 123 456 7890' })
  @IsNotEmpty({ message: 'Numero di telefono obbligatorio' })
  @IsPhoneNumber('IT')
  phone: string

  @ApiProperty({ required: true, description: 'per l\'ottimizzazione SEO è necessario scrivere poche parole per descrivere l\'agenzia' })
  @IsString()
  about: string

  @ApiProperty({ required: true, description: 'Partita IVA o Codice Fiscale obbligatorio' })
  @IsNotEmpty({ message: 'Partita IVA o Codice Fiscale obbligatorio' })
  @IsString()
  p_iva_c_f: string

  @ApiProperty({ required: true, description: 'Sito web dell\'agenzia' })
  @IsString()
  @IsUrl()
  @IsOptional()
  url?: string

  @ApiProperty({ required: true, description: 'Logo dell\'agenzia', example: ['https://example.com/logo (*.jpeg | *.webp | *.png)'] })
  @IsString({
    message: 'Carica almeno un logo dell\'agenzia',
    each: true
  })
  @ArrayMinSize(1, { message: 'Carica almeno un logo dell\'agenzia' })
  @IsNotEmpty({
    each: true,
    message: 'Carica almeno un logo dell\'agenzia'
  })
  logo: string[]
}