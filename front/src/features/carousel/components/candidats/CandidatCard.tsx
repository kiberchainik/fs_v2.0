import { FC } from "react"
import { ICarouselCandidate } from "../../types/carousel.type"
import { CarouselItem } from "@/shared/components"
import Image from "next/image"

export const CandidatCard: FC<ICarouselCandidate> = ({ avatar, education, firstname, surname }) => {
    return (
        <CarouselItem key={surname + firstname}>
            <div className="flex flex-col items-center gap-y-2">
                <Image src={avatar[0]} alt={firstname} fill className="w-24 h-24 rounded-full" />
                <div className="flex flex-col items-center gap-y-2">
                    <span className="text-lg font-bold">{`${firstname} ${surname}`}</span>
                    {education && education.map((item) => (item.grade && <span key={item.grade} className="text-sm">{item.grade}</span>))}
                </div>
            </div>
        </CarouselItem>
    )
}