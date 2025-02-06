'use client'

import Spinner from "@/shared/components/Spinner/Spinner";
import { useGetAgencies } from "../../hooks/useAgencyCarousel";
import { CarouselMain } from "../CarouselMain"
import { AgencyCard } from "./AgencyCard";

export default function Agencies() {
    const title = "Agencies"
    const { agencies, isFetching } = useGetAgencies()
    return (
        <CarouselMain titleCarousel={title}>
            {isFetching && <div className="w-full text-center p-5"><Spinner /></div>}
            {agencies && agencies.map((agency) => (
                <AgencyCard key={agency.agency_name} {...agency} />
            ))}
        </CarouselMain>
    )
}