'use client'

import Spinner from "@/shared/components/Spinner/Spinner";
import { useGetCandidats } from "../../hooks/useCandidatCarousel";
import { CarouselMain } from "../CarouselMain"
import { CandidatCard } from "./CandidatCard";
import { CandidatSkeleton } from "./CandidatSkeleton";

export default function Candidats() {
    const { candidats, isFetching } = useGetCandidats()
    return (
        <div className="w-screen flex flex-col md:flex-row bg-[#cee5ec] dark:bg-[#091b20] -ml-5 gap-20 my-20 md:h-[450px] items-center">
            <div className="flex flex-col gap-2 w-full md:w-[40%] bg-[#b1dbe9] dark:bg-[#082933] p-10 h-full items-center justify-center">
                <h2 className="p-4 text-5xl w-full">
                    I nuovi talenti<br /><span className="text-[#069cd0] text-[48px] font-light">su LavIdea</span>
                </h2>
                <span className="p-5 text-base">
                    La nostra piattaforma mette a disposizione profili aggiornati, strumenti di selezione e tutto il necessario per individuare i migliori talenti
                </span>
            </div>
            <div className="w-full md:w-[60%] mt-6">
                <CarouselMain>
                    {isFetching && <div className="w-full text-center p-5"><CandidatSkeleton /></div>}
                    {candidats && candidats.map((candidat) => (
                        <CandidatCard key={candidat.firstname + candidat.surname} {...candidat} />
                    ))}
                </CarouselMain>
            </div>
        </div>
    )
}