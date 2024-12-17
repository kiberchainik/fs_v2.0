import { IVacanciaesFullDate } from "@/features/agency/vacancy/types"

export interface ICandidatureResponse {
    id: string
    jobOfferId: string
    candidateId: string
    jobOffer: IVacanciaesFullDate
    savedAt: string
}