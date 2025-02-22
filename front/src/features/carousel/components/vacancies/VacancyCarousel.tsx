'use client'

import { useGetJobsFromCategoryCarousel } from "../../hooks"
import { CarouselMain } from "../CarouselMain"
import { VacancyCard } from "./VacancyCard"
import { VacancySkeleton } from "./VacancySkeleton"

export default function VacancyCarousel({ slug }: { slug: string }) {
    const { jobs, isFetching } = useGetJobsFromCategoryCarousel(slug)

    return (
        <div className="mt-5">
            <CarouselMain>
                {isFetching && <div className="p-5"><VacancySkeleton /></div>}
                {jobs && jobs.map((job) => (
                    <div className="pl-2 md:pl-4">
                        <VacancyCard key={job.slug} {...job} />
                    </div>
                ))}
            </CarouselMain>
        </div>
    )
}