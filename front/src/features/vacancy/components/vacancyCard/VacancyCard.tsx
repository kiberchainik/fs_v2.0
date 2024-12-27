import { IVacanciaesFullDate } from "@/features/agency/vacancy/types"
import { Button, Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/components"
import { formatDate, generatePostUrl } from "@/shared/utils"
import Link from "next/link"

import styles from './vacancyCard.module.scss'
import { CiCalendar, CiClock2, CiRead } from "react-icons/ci"

import { VacancyCardAuthorInfo } from "./VCAuthorInfo"
import { IUserMenuHeaderData } from "@/features/userHeaderBtn/types/userMenuData.type"
import { CandidateBtns } from "../candidatBtns/CandidateBtns"
import { useEffect, useState } from "react"
import DOMPurify from 'isomorphic-dompurify'

interface IVacancyCardProps extends IVacanciaesFullDate {
    authUser: IUserMenuHeaderData
}

export function VacancyCard({ id, title, slug, description, agency, branch, categories, createdAt, reallyUpTo, views, savedBy, sendCandidature, authUser }: IVacancyCardProps) {
    const [isClient, setIsClient] = useState(false);
    const sanitizedContent = DOMPurify.sanitize(description.slice(0, 150) + '...' || '')
    useEffect(() => {
        setIsClient(true)
    }, [])
    console.log(agency);

    return (
        <Card className='max-w-96'>
            <CardHeader>
                <CardTitle className='text-wrap'>
                    <Link href={`${generatePostUrl(categories, slug!)}`} className='text-left text-balance text-2xl font-light'>{title}</Link>
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
            {isClient && <CardDescription className='p-6' dangerouslySetInnerHTML={{ __html: sanitizedContent }}></CardDescription>}
            <CardFooter>
                {
                    branch ? (
                        <VacancyCardAuthorInfo
                            email={branch.email}
                            location={branch.location}
                            logo={branch.logo}
                            name={branch.name}
                            phone={branch.phone}
                            slug={branch.id}
                        />
                    ) : (
                        <VacancyCardAuthorInfo
                            email={agency.user.email}
                            location={agency.address}
                            logo={agency.logo}
                            name={agency.agency_name}
                            phone={agency.phone}
                            slug={agency.slug}
                        />
                    )
                }
            </CardFooter>
        </Card>
    )
}