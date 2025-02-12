'use client'

import Spinner from "@/shared/components/Spinner/Spinner";
import { useGetAgencies } from "../../hooks/useAgencyCarousel";
import { CarouselMain } from "../CarouselMain"
import { AgencyCard } from "./AgencyCard";

export default function Agencies() {
    const title = "Risorse umane a portata di clic"
    const subText = "Scopri le migliori agenzie di lavoro nella tua zona"
    const { agencies, isFetching } = useGetAgencies()

    return (
        <div className="bg-[#f4d2ba] py-16 px-10 m-10 rounded-3xl bg-opacity-50">
            <CarouselMain titleCarousel={title} subText={subText}>
                {isFetching && <div className="w-full text-center p-5"><Spinner /></div>}
                {agencies && agencies.map((agency) => (
                    <AgencyCard key={agency.agency_name} {...agency} />
                ))}
            </CarouselMain>
        </div>
    )
}