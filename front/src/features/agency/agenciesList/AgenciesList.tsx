'use client'

import { ISearchTerm } from "@/features/vacancy/types/searchTerm.type"
import { IAgencyResponce } from "../profile/types/agensy.type"
import { useSearchParams } from "next/navigation"
import { PAGE_LIMIT_DEFAULT, PAGE_NUM_DEFAULT } from "@/shared/constants/seo.constants"
import { Card, PaginationWithLinks } from "@/shared/components"

import styles from './agenciesList.module.scss'
import { AgencyCard } from "@/features/carousel/components/agencies/AgencyCard"
import { useTranslations } from "next-intl"

export default function AgenciesList({ agencies, count, pageCount }: IAgencyResponce) {
    const t = useTranslations('agency.agencyList')
    const searchParams = useSearchParams()
    const params: ISearchTerm = {
        page: parseInt((searchParams.get('page') as string) || PAGE_NUM_DEFAULT),
        limit: parseInt((searchParams.get('limit') as string) || PAGE_LIMIT_DEFAULT)
    }

    if (agencies.length === 0) return <div>{t('agencyListEmpty')}</div>

    return (
        <div className="container mx-auto">
            <div className="text-left pb-4 border-b border-neutral-300 border-dashed">
                <h2 className="text-[50px] text-[#1e356a] font-bold">{t('h2')}</h2>
                <p className="text-lg text-[#069cd0]">{t('p')}</p>
            </div>
            <div>
                <div className="flex flex-row flex-wrap min-w-screen min-h-screen p-4 mt-5">
                    {agencies && agencies.map(agency => (
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
        </div>
    )
}