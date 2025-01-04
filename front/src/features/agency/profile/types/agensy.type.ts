import { IUser } from "@/features/auth/types";
import { IJobsResponce, IVacanciaesFullDate } from "../../vacancy/types";

export interface IAgencyData {
    id: string
    agency_name: string
    slug: string
    address: string
    phone: string
    p_iva_c_f: string
    createdAt: string
    userId: string
    about: string
    url: string
    logo: string[]
}

export type TAgencyCard = Omit<IAgencyData, 'id' | 'userId' | 'p_iva_c_f'> & {
    user: Pick<IUser, 'email'>
}

export interface IAgencyResponce {
    agencies: TAgencyCard[]
    count: number;
    pageCount: number;
}

export type TAgencyDataResponse = {
    agencyData: IAgencyData & {
        jobOffers: IVacanciaesFullDate[]
        user: Pick<IUser, 'email'>
    }
    count: number;
    pageCount: number;
}