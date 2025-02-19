'use client'

import Spinner from "@/shared/components/Spinner/Spinner"
import { useJobsCarousel } from "../../hooks/useJobsCarousel"
import { VacancyCard } from "./VacancyCard"
import { VacancySkeleton } from "./VacancySkeleton"

export default function Vacancies() {
    const title = "Trova lavoro ideale velocemente"
    const subtext = "Scopri le migliori opportunità di lavoro disponibili. Trova rapidamente il lavoro ideale che corrisponde alle tue competenze e aspirazioni."
    const { jobs, isFetching } = useJobsCarousel()
    return (
        <div className="flex flex-col justify-center gap-2 mx-10">
            <div className="text-left">
                <h2 className="text-[50px] text-[#1e356a] font-bold">Trova <span className="font-normal text-[#069cd0]">Lavoro Ideale</span> in pochi minuti</h2>
                <p className="text-lg text-[#069cd0]">Trova rapidamente il lavoro ideale e inizia una nuova avventura professionale.<br />Le migliori agenzie ti stanno aspettando con offerte di lavoro che corrispondono alle tue competenze e aspirazioni</p>
            </div>
            <div className="flex md:flex-wrap md:flex-row md:gap-y-5 flex-col items-start mt-10 md:justify-between">
                {isFetching &&
                    <>
                        <VacancySkeleton />
                        <VacancySkeleton />
                        <VacancySkeleton />
                    </>
                }
                {jobs && jobs.map((job) => (
                    <VacancyCard key={job.slug} {...job} />
                ))}
            </div>
        </div>
    )
}