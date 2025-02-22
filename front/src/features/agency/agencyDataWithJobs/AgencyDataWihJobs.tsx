'use client'

import { Button, Card, Description, Heading } from "@/shared/components"
import { TAgencyDataResponse } from "../profile/types/agensy.type"
import { useAppSelector } from "@/shared/hooks"
import Image from 'next/image'
import styles from './agencyData.module.scss'
import Link from "next/link"
import { IoLocationSharp } from "react-icons/io5"
import { RatingStars } from "@/features/rating/components/RatingStars"
import { formatDate } from "@/shared/utils"
import { VacancyCard } from "@/features/carousel/components/vacancies/VacancyCard"


export default function AgencyDataWithJobs({ agencyData, count, pageCount }: TAgencyDataResponse) {
    const authUser = useAppSelector(state => state.reducer.user.data)

    return (
        <div className={styles.agencyCardWrapper}>
            <div className="flex flex-wrap lg:flex-row items-center justify-between gap-5 mb-5">
                <div className="flex flex-col md:flex-row gap-5 items-center">
                    <div className="bg-white dark:bg-neutral-900 rounded-2xl p-7 shadow-2xl shadow-slate-700-500/50 dark:shadow-gray-300-100">
                        <Image src={agencyData.logo[0]} alt={agencyData.agency_name} height={40} width={40} className='h-10 w-10' />
                    </div>
                    <div className="flext flex-col gap-2">
                        <div className="flex flex-col md:flex-row gap-3 items-end">
                            <Heading>{agencyData.agency_name}</Heading>
                            <small className="flex flex-row items-center"><IoLocationSharp /> {agencyData.address}</small>
                        </div>
                        <small>P.IVA/CF: {agencyData.p_iva_c_f}</small>
                        <div className="flex flex-row gap-2 items-center">
                            {authUser?.id && authUser.id !== agencyData.userId && <div className="rating me-1">
                                <RatingStars userId={agencyData.userId} reviewerId={authUser.id} />
                            </div>}
                        </div>
                        <div className="mt-4 flex flex-row gap-3">
                            <span className="text-[#17233e] bg-[#d3e7ee] py-2 px-4 rounded-full text-sm dark:text-slate-500 dark:bg-zinc-800">{formatDate(agencyData.createdAt)}</span>
                            <Link target="_blank" href={agencyData.url} className="text-[#17233e] bg-[#d3e7ee] py-2 px-4 rounded-full text-sm dark:text-slate-500 dark:bg-zinc-800">Agency site</Link>
                        </div>
                    </div>
                </div>
                <div className="">
                    <Button>Следить за вакансиями</Button>
                </div>
            </div>
            <div>
                <div className="prose max-w-none text-slate-400"><Description>{agencyData.about}</Description></div>
            </div>
            <div>
                <div className="flex flex-row flex-wrap min-w-screen min-h-screen p-4 mt-5 gap-5">
                    {agencyData.jobOffers && agencyData.jobOffers.map(job => (
                        <VacancyCard {...job} key={job.slug} />
                    ))}
                </div>
            </div>
        </div>
    )
}