import { FC } from "react"
import { ICarouselCandidate } from "../../types/carousel.type"
import { Description } from "@/shared/components"
import Image from "next/image"
import Link from "next/link"
import { MAIN_URL } from "@/shared/config"

export const CandidatCard: FC<ICarouselCandidate> = ({ avatar, education, firstname, surname, about_my, skills, user }) => {
    return (
        <div className="mb-6 rounded-3xl bg-white dark:bg-neutral-900 p-6 w-[350px] text-[#335371] h-full">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <Image className="mr-5 rounded-full object-cover h-20 w-20 shadow-2xl shadow-slate-700-500/20" height={80} width={80} src={avatar[0]} alt={firstname} />
                    <div>
                        <h3 className="text-base font-semibold text-gray-900 dark:text-[#fafaf9]">
                            <Link href={MAIN_URL.candidatData(user.login)}>{`${firstname} ${surname}`}</Link>
                        </h3>
                        <span className="block text-sm font-normal">{user.email}</span>
                    </div>
                </div>
            </div>
            <div className="my-6 text-base font-normal">
                <Description>{about_my}</Description>
            </div>
            {education && <div className="mt-6 flex items-center justify-between border-t border-dashed border-[#ccc]/50 dark:border-neutral-700">
                <div className="flex gap-x-1 pt-5">
                    {education.map((item) => (item.grade && <span key={item.grade} className="bg-[#f3f5f0] rounded-full p-2 px-3 text-sm mb-1 inline-block text-[rgba(0, 40, 78, 0.8)]">{item.grade}</span>))}
                </div>
            </div>}
        </div>
    )
}