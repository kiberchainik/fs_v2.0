'use client'

import { useTranslations } from "next-intl"
import { useJobsCarousel } from "../../hooks/useJobsCarousel"
import { VacancyCard } from "./VacancyCard"
import { VacancySkeleton } from "./VacancySkeleton"

export default function Vacancies() {
    const t = useTranslations('homePage.vacanciesSector')
    const title = t('title')
    const subtext = t('subTitle')
    const { jobs, isFetching } = useJobsCarousel()
    return (
        <div className="flex flex-col justify-center gap-2 mx-10">
            <div className="text-left">
                <h2 className="text-[50px] text-[#1e356a] font-bold">{t('h2_p1')} <span className="font-normal text-[#069cd0]">{t('h2_p2')}</span> {t('h2_p3')}</h2>
                <p className="text-lg text-[#069cd0]">{t('short_desc_p1')}<br />{t('short_desc_p2')}</p>
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