import { FC } from "react"
import { ICarouselCandidate } from "../../types/carousel.type"
import { CarouselItem, Description } from "@/shared/components"
import Image from "next/image"

export const CandidatCard: FC<ICarouselCandidate> = ({ avatar, education, firstname, surname, about_my, skills, user }) => {
    return (
        <CarouselItem key={surname + firstname}>
            <div className="mb-6 rounded-3xl bg-white p-6 w-[350px] text-[#335371]">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Image className="mr-5 rounded-full object-cover h-20 w-20 shadow-xl shadow-blue-300/30" height={80} width={80} src={avatar[0]} alt={firstname} />
                        <div>
                            <h3 className="text-base font-semibold text-gray-900">{`${firstname} ${surname}`}</h3>
                            <span className="block text-xs font-normal">{user.email}</span>
                        </div>
                    </div>
                </div>
                <div className="my-6 text-sm font-normal">
                    <Description>{about_my}</Description>
                </div>
                {education && <div className="mt-6 flex items-center justify-between border-t border-dashed border-[#ccc]/50">
                    <div className="flex gap-x-1 pt-5">
                        {education.map((item) => (item.grade && <span key={item.grade} className="bg-[#f3f5f0] rounded-full p-2 px-3 text-sm mb-1 inline-block text-[rgba(0, 40, 78, 0.8)]">{item.grade}</span>))}
                    </div>
                </div>}
            </div>
        </CarouselItem>
    )
}