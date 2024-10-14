import { IsNotEmpty, IsPhoneNumber, IsString } from "class-validator"

export class CreateAgencyDto {
  @IsNotEmpty({message: 'Название фирмы нужно указать обязательно'})
  @IsString()
  agency_name: string

  @IsNotEmpty({message: 'Адрес нужно указать обязательно'})
  @IsString()
  address: string

  @IsNotEmpty({message: 'Номер телефона нужно указать обязательно'})
  @IsPhoneNumber()
  phone: string

  @IsString()
  about: string

  @IsNotEmpty({message: 'Регистрационный номер нужно указать обязательно'})
  @IsString()
  p_iva_c_f: string
}