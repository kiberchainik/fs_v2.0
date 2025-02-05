'use client'

import { VacancyCard } from "@/features/vacancy/components/vacancyCard/VacancyCard"
import { useGetSavedJobs } from "../../hooks"

export function Favorite() {
    const { savedJobs, isLoading, error } = useGetSavedJobs()

    if (isLoading) return <div>Loading...</div>
    return (
        <div>
            {savedJobs && savedJobs.map((job) => (
                <VacancyCard {...job.jobOffer} key={job.id} />
            ))}
            {error && <div>Error: {error.message}</div>}
            {!savedJobs && !isLoading && <div>No saved jobs</div>}
        </div>
    )
}