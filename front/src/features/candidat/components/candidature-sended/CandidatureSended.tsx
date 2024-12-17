'use client'

import { VacancyCard } from "@/features/vacancy/components/vacancyCard/VacancyCard"
import { useGetSendedCandidature } from "../../hooks"

export function CandidatureSended() {
    const { sendedCandidature, isLoading, error } = useGetSendedCandidature()

    if (isLoading) return <div>Loading...</div>
    return (
        <div>
            {sendedCandidature && sendedCandidature.map((job) => (
                <VacancyCard {...job.jobOffer} key={job.id} />
            ))}
            {error && <div>Error: {error.message}</div>}
            {!sendedCandidature && !isLoading && <div>No saved jobs</div>}
        </div>
    )
}