import { IVacanciaesFullDate } from "@/features/agency/vacancy/types"

export interface IFavoriteResponse {
    id: string
    jobOfferId: string
    candidateId: string
    jobOffer: IVacanciaesFullDate
    savedAt: string
}