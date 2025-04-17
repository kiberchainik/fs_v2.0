'use client'

import { useGetAgencies } from "../../hooks/useAgencyCarousel";
import { CarouselMain } from "../CarouselMain"
import { AgencyCard } from "./AgencyCard";
import { AgencySkeleton } from "./AgencySkeleton";
import { CarouselItem } from "@/shared/components";
import { TranslationFunc } from "@/i18n";

export default function Agencies({ t }: { t: TranslationFunc }) {
    const title = t('title')
    const subText = t('subTitle')
    const { agencies, isFetching } = useGetAgencies()

    return (
        <div className="bg-[#f4d2ba] dark:bg-neutral-900 py-16 px-2 md:px-10 m-0 md:m-10 md:rounded-3xl bg-opacity-50">
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