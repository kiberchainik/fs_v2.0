'use client'

import { FC } from "react"
import { ICarouselJobs } from "../../types/carousel.type"
import { Button, Description } from "@/shared/components"
import Link from "next/link"
import { formatDate, generatePostUrl } from "@/shared/utils"
import Image from "next/image"
import { PiEyeLight } from "react-icons/pi"

export const VacancyCard: FC<ICarouselJobs> = ({ categories, createdAt, slug, title, views, agency, description, contractType, experienceMinimalJob, levelEducation, modeJob, reallyUpTo, workingTimeJob }) => {
    return (
        <div className="md:w-[410px] w-80 mb-4">
            <div className="shadow-2xl shadow-sky-300/20 rounded-3xl bg-white dark:bg-neutral-800 p-6">
                <div className="flex flex-row items-center gap-x-5">
                    <div className="shadow-2xl shadow-slate-700-500/20 rounded-2xl p-5">
                        <Image src={agency.logo[0]} alt={agency.agency_name} width={64} height={64} className="h-16 w-16" />
                    </div>
                    <div className="company-info">
                        <h4 className="mb-0">
                            <a className="text-2xl text-[#1e356a] font-semibold">{agency.agency_name}</a>
                        </h4>
                        <small className="text-[#069cd0] text-base">{formatDate(createdAt)}</small>
                    </div>
                </div>
                <div className="py-4 mt-3">
                    <ul className="flex flex-row flex-wrap gap-2 text-sm">
                        {contractType !== null && <li className="rounded-full dark:bg-opacity-10 bg-[#dcf6fc] text-[#249ab2] py-2 px-3">{contractType.name}</li>}
                        {levelEducation !== null && <li className="rounded-full dark:bg-opacity-10 bg-[#e0f2e5] text-[#2bb853] p-2">{levelEducation.name}</li>}
                        {modeJob !== null && <li className="rounded-full dark:bg-opacity-10 bg-[#fef3d9] text-[#b38626] p-2">{modeJob.name}</li>}
                        {workingTimeJob !== null && <li className="rounded-full dark:bg-opacity-10 bg-[#f2e1d5] text-[#f97316] p-2">{workingTimeJob.name}</li>}
                    </ul>
                    <h4 className="mb-3 mt-4 text-3xl text-[#1e356a] font-bold">
                        <Link href={generatePostUrl(categories, slug)}>{title}</Link>
                    </h4>
                    <small className="text-sm text-[#069cd0]"><Description>{description.substring(0, 100) + '...'}</Description></small>
                </div>
                <div className="flex flex-row items-center dark:border-neutral-700 border-t border-dashed pt-4 justify-between">
                    <div className="flex flex-row gap-x-2 items-center">
                        <PiEyeLight className="text-primary text-2xl" /> <span className="text-primary font-light text-xl">{views}</span>
                    </div>
                    <div className="">
                        <Button>
                            <Link href={generatePostUrl(categories, slug)} className="">Legi di piu ...</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}