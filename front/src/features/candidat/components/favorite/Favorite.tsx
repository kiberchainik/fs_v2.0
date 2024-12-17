'use client'

import { VacancyCard } from "@/features/vacancy/components/vacancyCard/VacancyCard"
import { useGetSavedJobs } from "../../hooks/useGetSavedJobs"
import { Heading } from "@/shared/components";
import { formatDate } from "@/shared/utils";

export function Favorite() {
    const { savedJobs, isLoading, error } = useGetSavedJobs()
    console.log(savedJobs);
    if(isLoading) return <div>Loading...</div>
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