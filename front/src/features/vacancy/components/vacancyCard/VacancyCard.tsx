import { IVacanciaesFullDate } from "@/features/agency/vacancy/types";
import { Button, Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/components";
import { MAIN_URL } from "@/shared/config";
import { formatDate } from "@/shared/utils";
import Link from "next/link";

import styles from './vacancyCard.module.scss'
import { CiCalendar, CiClock2, CiRead } from "react-icons/ci"

import { VacancyCardAuthorInfo } from "./VCAuthorInfo";

export function VacancyCard({ title, slug, description, agency, branch, categories, createdAt, reallyUpTo, views }: IVacanciaesFullDate) {
    description = description.slice(0, 150) + '...'
    return (
        <Card className='max-w-96'>
            <CardHeader>
                <CardTitle className='text-wrap'>
                    <Link href={MAIN_URL.fullVacancy(slug)} className='text-left text-balance text-2xl font-light'>{title}</Link>
                </CardTitle>
                <div className={styles.headerDateInfo}>
                    <CiCalendar /> {formatDate(createdAt)}
                    {reallyUpTo && <><CiClock2 /> {formatDate(reallyUpTo)}</>}
                </div>
                <div className={styles.headerDateInfo}>
                    <CiRead /> {views}
                </div>
            </CardHeader>
            <CardDescription className='p-6' dangerouslySetInnerHTML={{ __html: description }}></CardDescription>
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