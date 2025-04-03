'use client'

import { VacancyCard } from "@/features/vacancy/components/vacancyCard/VacancyCard"
import { useGetSavedJobs } from "../../hooks"
import Spinner from "@/shared/components/Spinner/Spinner"
import { FcFinePrint } from "react-icons/fc"

export function Favorite() {
    const { savedJobs, isLoading, error } = useGetSavedJobs()

    if (isLoading) return <div><Spinner /></div>
    return (
        <div>
            {savedJobs && savedJobs.map((job) => (
                <VacancyCard {...job.jobOffer} key={job.id} />
            ))}
            {error && <div>Error: {error.message}</div>}
            {!savedJobs && !isLoading && <div className="grid justify-center items-center"><FcFinePrint className="h-20 w-20" /></div>}
        </div>
    )
}