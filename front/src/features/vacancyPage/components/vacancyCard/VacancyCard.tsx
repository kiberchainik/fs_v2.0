import { IVacanciaesFullDate } from "@/features/agency/vacancy/types";
import { Button, Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/components";
import { MAIN_URL } from "@/shared/config";
import { formatDate } from "@/shared/utils";
import Link from "next/link";

import styles from './listvacancy.module.scss'
import { VacancyCardAuthorInfo } from "./VCAuthorInfo";

export function VacancyCard ({title, slug, description, agency, branch, categories, createdAt, reallyUpTo, views}:IVacanciaesFullDate) {
    return (
        <Card className='max-w-96'>
            <CardHeader>
                <CardTitle className='text-wrap'>
                    <Button variant='link'>
                        <Link href={MAIN_URL.fullVacancy(slug)} className='text-left text-balance'>{title}</Link>
                    </Button>
                </CardTitle>
                <div className={styles.headerDateInfo}>
                    <i>Created:</i> {formatDate(createdAt)}
                    {reallyUpTo && <><i>Really up to:</i> {formatDate(reallyUpTo)}</>}
                </div>
                <div className=''>
                    Views: {views}
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