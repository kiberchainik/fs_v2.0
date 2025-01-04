import { ArrayMinSize, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, IsUrl } from "class-validator"

export class CreateAgencyDto {
  @IsNotEmpty({ message: 'Название фирмы нужно указать обязательно' })
  @IsString()
  agency_name: string

  @IsNotEmpty({ message: 'Адрес нужно указать обязательно' })
  @IsString()
  address: string

  @IsNotEmpty({ message: 'Номер телефона нужно указать обязательно' })
  @IsPhoneNumber('IT')
  phone: string

  @IsString()
  about: string

  @IsNotEmpty({ message: 'Регистрационный номер нужно указать обязательно' })
  @IsString()
  p_iva_c_f: string

  @IsString()
  @IsUrl()
  @IsOptional()
  url?: string

  @IsString({
    message: 'Укажите хотя бы одну картинку',
    each: true
  })
  @ArrayMinSize(1, { message: 'Должна быть хотя бы одна картинка' })
  @IsNotEmpty({
    each: true,
    message: 'Путь к картинке не может быть пустым'
  })
  logo: string[]
}