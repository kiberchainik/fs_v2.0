'use client'

import { useTranslations } from "next-intl";
import { useGetAgencies } from "../../hooks/useAgencyCarousel";
import { CarouselMain } from "../CarouselMain"
import { AgencyCard } from "./AgencyCard";
import { AgencySkeleton } from "./AgencySkeleton";
import { CarouselItem } from "@/shared/components";

export default function Agencies() {
    const t = useTranslations('homePage.agencySector')
    const title = t('title')
    const subText = t('subTitle')
    const { agencies, isFetching } = useGetAgencies()

    return (
        <div className="bg-[#f4d2ba] dark:bg-neutral-900 py-16 px-10 m-10 rounded-3xl bg-opacity-50">
            <CarouselMain titleCarousel={title} subText={subText}>
                {isFetching && <div className="w-full text-center p-5"><AgencySkeleton /></div>}
                {agencies && agencies.map((agency) => (
                    <CarouselItem key={agency.slug}>
                        <AgencyCard key={agency.agency_name} {...agency} />
                    </CarouselItem>
                ))}
            </CarouselMain>
        </div>
    )
}