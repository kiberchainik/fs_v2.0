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
        <div className="bg-[#cee5ec] dark:bg-[#091b20] flex flex-col md:flex-row gap-5 mx-0 md:-mx-5">
            <div className="bg-[#b1dbe9] dark:bg-[#082933] p-10 md:w-2/6">
                <h2 className="p-4 text-5xl w-full">
                    {t('h2_p1')}<br /><span className="text-[#069cd0] text-[48px] font-light">{t('h2_p2')}</span>
                </h2>
                <span className="p-5 text-base">
                    {t('short_desc')}
                </span>
            </div>
            <div className="m-5 md:w-4/6">
                <CarouselMain>
                    {isFetching && <div className="w-full text-center p-5"><CandidatSkeleton /></div>}
                    {candidats && candidats.map((candidat) => (
                        <CarouselItem key={candidat.firstname + candidat.surname + candidat.user.login}>
                            <CandidatCard {...candidat} />
                        </CarouselItem>
                    ))}
                </CarouselMain>
            </div>
        </div>
    )
}