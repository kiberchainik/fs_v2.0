import { IsBoolean, IsNotEmpty } from "class-validator"

export class CandidateSettingsDto {
    @IsBoolean({ message: 'Formato impostazione non valido' })
    isShowCVInSearch: boolean

    @IsBoolean({ message: 'Formato impostazione non valido' })
    isOpenForAgency: boolean
}