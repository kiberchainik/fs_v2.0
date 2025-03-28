'use client'

import { VacancyCard } from "@/features/vacancy/components/vacancyCard/VacancyCard"
import { useGetSendedCandidature } from "../../hooks"
import Spinner from "@/shared/components/Spinner/Spinner"
import { useTranslations } from "next-intl"

export function CandidatureSended() {
    const t = useTranslations('contactsPage.candidatureSended')
    const { sendedCandidature, isLoading, error } = useGetSendedCandidature()

    if (isLoading) return <div><Spinner /></div>
    return (
        <div>
            {sendedCandidature && sendedCandidature.map((job) => (
                <VacancyCard {...job.jobOffer} key={job.id} />
            ))}
            {error && <div>{t('error')} {error.message}</div>}
            {!sendedCandidature && !isLoading && <div>{t('candidatureSendedEmpty')}</div>}
        </div>
    )
}