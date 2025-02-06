'use client'

import Spinner from "@/shared/components/Spinner/Spinner"
import { useJobsCarousel } from "../../hooks/useJobsCarousel"
import { CarouselMain } from "../CarouselMain"
import { VacancyCard } from "./VacancyCard"

export default function Vacancies() {
    const title = "Vacancies"
    const { jobs, isFetching } = useJobsCarousel()
    return (
        <CarouselMain titleCarousel={title}>
            {isFetching && <div className="w-full text-center p-5"><Spinner /></div>}
            {jobs && jobs.map((job) => (
                <VacancyCard key={job.slug} {...job} />
            ))}
        </CarouselMain>
    )
}