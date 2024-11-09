'use client'

import { Card, Heading, PaginationWithLinks } from "@/shared/components";
import { TCategoryBySlug } from "../types";

import styles from './categories.module.scss'
import { VacancyCard } from "@/features/vacancyPage/components/vacancyCard/VacancyCard";
import { useSearchParams } from "next/navigation";
import { ISearchTerm } from "@/features/vacancyPage/types/searchTerm.type";
import CategoryList from "./Categories";

export function Catalog({ name, slug, description, jobs, count, pageCount }: TCategoryBySlug) {
    const searchParams = useSearchParams()
    const params: ISearchTerm = {
        page: parseInt((searchParams.get('page') as string) || '1'),
        limit: parseInt((searchParams.get('limit') as string) || '10')
    }

    return (
        <div className={styles.wrapper}>
            <div className='w-[300px]'><CategoryList /></div>
            <div className='flex-col'>
                <div className={styles.header}>
                    <div className={styles.info}>
                        <Heading>{name}</Heading>
                        {description && <p>{description}</p>}
                    </div>
                </div>

                <div className={styles.catalog}>
                    <div className={styles.vacancies}>
                        {jobs.length ? (
                            <>
                                {jobs.map(job => <VacancyCard {...job} key={job.id} />)}
                                <Card className='mt-5'>
                                    <PaginationWithLinks
                                        page={params.page || 1}
                                        limit={params.limit || 10}
                                        totalCount={count}
                                        pageSizeSelectOptions={{
                                            pageSizeOptions: [5, 10, 25, 50]
                                        }}
                                    />
                                </Card>
                            </>
                        ) : (
                            <div>Category whithout vacancies</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}