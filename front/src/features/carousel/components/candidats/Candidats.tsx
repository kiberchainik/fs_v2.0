'use client'

import { useGetCandidats } from "../../hooks/useCandidatCarousel"
import { CarouselMain } from "../CarouselMain"
import { CandidatCard } from "./CandidatCard"
import { CandidatSkeleton } from "./CandidatSkeleton"
import { CarouselItem } from "@/shared/components"
import { useTranslations } from "next-intl"

export default function Candidats() {
    const { candidats, isFetching } = useGetCandidats()
    const t = useTranslations('homePage.candidatsSector')
    return (
        <div className="-mr-5 flex flex-col md:flex-row bg-[#cee5ec] dark:bg-[#091b20] -ml-5 gap-20 my-20 md:h-[450px] items-center">
            <div className="flex flex-col gap-2 w-full md:w-[40%] bg-[#b1dbe9] dark:bg-[#082933] p-10 h-full items-center justify-center">
                <h2 className="p-4 text-5xl w-full">
                    {t('h2_p1')}<br /><span className="text-[#069cd0] text-[48px] font-light">{t('h2_p2')}</span>
                </h2>
                <span className="p-5 text-base">
                    {t('short_desc')}
                </span>
            </div>
            <div className="w-full md:w-[60%] mt-6">
                <CarouselMain>
                    {isFetching && <div className="w-full text-center p-5"><CandidatSkeleton /></div>}
                    {candidats && candidats.map((candidat) => (
                        <CarouselItem key={candidat.surname + candidat.firstname}>
                            <CandidatCard {...candidat} />
                        </CarouselItem>
                    ))}
                </CarouselMain>
            </div>
        </div>
    )
}