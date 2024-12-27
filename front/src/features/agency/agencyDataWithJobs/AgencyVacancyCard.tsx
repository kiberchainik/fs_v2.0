'use client'

import { IUserMenuHeaderData } from "@/features/userHeaderBtn/types/userMenuData.type"
import { IVacanciaesFullDate } from "../vacancy/types"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/components"
import { CandidateBtns } from "@/features/vacancy/components/candidatBtns/CandidateBtns"
import { formatDate, generatePostUrl } from "@/shared/utils"
import { Link } from "lucide-react"
import { CiCalendar, CiClock2, CiRead } from "react-icons/ci"
import DOMPurify from 'isomorphic-dompurify'

import styles from './agencyData.module.scss'
import { useEffect, useState } from "react"

interface IVacancyCardProps extends IVacanciaesFullDate {
    authUser: IUserMenuHeaderData
}

export default function AgencyVacancyCard({ id, title, slug, description, categories, createdAt, reallyUpTo, views, savedBy, sendCandidature, authUser }: IVacancyCardProps) {
    const [isClient, setIsClient] = useState(false);
    const sanitizedContent = DOMPurify.sanitize(description.slice(0, 150) + '...' || '')
    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <Card className='w-80 p-5'>
            <CardHeader>
                <CardTitle className='text-wrap'>
                    <Link href={`${generatePostUrl(categories, slug!)}`}>{title}</Link>
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
                    dangerouslySetInnerHTML={{ __html: sanitizedContent }}
                    className="prose max-w-none"
                ></CardDescription>
            )}
            <CardFooter>

            </CardFooter>
        </Card>
    )
}