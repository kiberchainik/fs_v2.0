'use client'

import Spinner from "@/shared/components/Spinner/Spinner";
import { useGetCandidats } from "../../hooks/useCandidatCarousel";
import { CarouselMain } from "../CarouselMain"
import { CandidatCard } from "./CandidatCard";

export default function Candidats() {
    const title = "Candidats"
    const { candidats, isFetching } = useGetCandidats()
    return (
        <CarouselMain titleCarousel={title}>
            {isFetching && <div className="w-full text-center p-5"><Spinner /></div>}
            {candidats && candidats.map((candidat) => (
                <CandidatCard key={candidat.firstname + candidat.surname} {...candidat} />
            ))}
        </CarouselMain>
    )
}