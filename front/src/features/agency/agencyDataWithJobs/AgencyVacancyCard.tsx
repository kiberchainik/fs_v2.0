'use client'

import { IUserMenuHeaderData } from "@/features/userHeaderBtn/types/userMenuData.type"
import { IVacanciaesFullDate } from "../vacancy/types"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle, Description } from "@/shared/components"
import { CandidateBtns } from "@/features/vacancy/components/candidatBtns/CandidateBtns"
import { formatDate, generatePostUrl } from "@/shared/utils"
import { CiCalendar, CiClock2, CiRead } from "react-icons/ci"

import styles from './agencyData.module.scss'
import { useEffect, useState } from "react"
import Link from "next/link"

interface IVacancyCardProps extends IVacanciaesFullDate {
    authUser: IUserMenuHeaderData
}

export default function AgencyVacancyCard({ id, title, slug, description, categories, createdAt, reallyUpTo, views, savedBy, sendCandidature, authUser }: IVacancyCardProps) {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <Card className='w-80 p-5'>
            <CardHeader>
                <CardTitle className='text-wrap'>
                    <Link href={generatePostUrl(categories, slug!)} className='text-left text-balance text-2xl font-light'>{title}</Link>
                </CardTitle>
                <div className={styles.headerDateInfo}>
                    <CiCalendar /> {formatDate(createdAt)}
                    {reallyUpTo && <><CiClock2 /> {formatDate(reallyUpTo)}</>}
                </div>
                <div className={styles.headerDateInfo}>
                    <CiRead /> {views}
                </div>
                <CandidateBtns jobId={id!} authUser={authUser!} curriculum={sendCandidature!} savedBy={savedBy!} />
            </CardHeader>
            {isClient && (
                <CardDescription
                    className="prose max-w-none"
                >
                    <Description>{description.slice(0, 150) + '...'}</Description>
                </CardDescription>
            )}
            <CardFooter>

            </CardFooter>
        </Card>
    )
}