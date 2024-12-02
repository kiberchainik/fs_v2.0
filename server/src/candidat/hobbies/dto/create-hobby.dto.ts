import { IsNotEmpty, IsString } from "class-validator";

export class CreateHobbyDto {
    @IsNotEmpty({ message: 'Hobbie обязателен для указания' })
    @IsString({ message: 'Hobbie должен быть строкой' })
    hobbie: string
}
