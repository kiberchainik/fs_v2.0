'use client'

import { ISearchTerm } from "@/features/vacancy/types/searchTerm.type"
import { IAgencyResponce } from "../profile/types/agensy.type"
import { useSearchParams } from "next/navigation"
import { PAGE_LIMIT_DEFAULT, PAGE_NUM_DEFAULT } from "@/shared/constants/seo.constants"
import { Card, PaginationWithLinks } from "@/shared/components"

import styles from './agenciesList.module.scss'
import { AgencyCard } from "./AgencyCard"

export default function AgenciesList({ agencies, count, pageCount }: IAgencyResponce) {
    const searchParams = useSearchParams()
    const params: ISearchTerm = {
        page: parseInt((searchParams.get('page') as string) || PAGE_NUM_DEFAULT),
        limit: parseInt((searchParams.get('limit') as string) || PAGE_LIMIT_DEFAULT)
    }

    if (agencies.length === 0) <div>Agency list is empty!</div>

    return (
        <div>
            <div className="flex justify-center items-center min-h-screen p-4">
                {agencies.length > 0 && agencies.map(agency => (
                    <AgencyCard {...agency} key={agency.slug} />
                ))}
            </div>
            <Card className={styles.vacancyPagination}>
                <PaginationWithLinks
                    page={params.page!}
                    limit={params.limit!}
                    totalCount={count!}
                    pageSizeSelectOptions={{
                        pageSizeOptions: [10, 25, 50]
                    }}
                />
            </Card>
        </div>
    )
}