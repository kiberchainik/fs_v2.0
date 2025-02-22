'use client'

import { ISearchTerm } from "@/features/vacancy/types/searchTerm.type"
import { IAgencyResponce } from "../profile/types/agensy.type"
import { useSearchParams } from "next/navigation"
import { PAGE_LIMIT_DEFAULT, PAGE_NUM_DEFAULT } from "@/shared/constants/seo.constants"
import { Card, PaginationWithLinks } from "@/shared/components"

import styles from './agenciesList.module.scss'
import { AgencyCard } from "@/features/carousel/components/agencies/AgencyCard"

export default function AgenciesList({ agencies, count, pageCount }: IAgencyResponce) {
    const searchParams = useSearchParams()
    const params: ISearchTerm = {
        page: parseInt((searchParams.get('page') as string) || PAGE_NUM_DEFAULT),
        limit: parseInt((searchParams.get('limit') as string) || PAGE_LIMIT_DEFAULT)
    }

    if (agencies.length === 0) return <div>Agency list is empty!</div>

    return (
        <div className="container mx-auto">
            <div className="text-left pb-4 border-b border-neutral-300 border-dashed">
                <h2 className="text-[50px] text-[#1e356a] font-bold">Agenzie di lavoro</h2>
                <p className="text-lg text-[#069cd0]">Scopri la lista di agenzie di reclutamento. Ogni agenzia è specializzata in diversi settori e offre una vasta gamma di opportunità di lavoro. Trova l'agenzia che meglio si adatta alle tue esigenze e inizia la tua ricerca di lavoro con noi. Le migliori agenzie sono qui per aiutarti a trovare il lavoro dei tuoi sogni.</p>
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