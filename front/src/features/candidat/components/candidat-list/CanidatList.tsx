'use client'

import { useSearchParams } from "next/navigation"
import { ICandidatResponse } from "../../types/candidat.list.type"
import { ISearchTerm } from "@/features/vacancy/types/searchTerm.type"
import { PAGE_LIMIT_DEFAULT, PAGE_NUM_DEFAULT } from "@/shared/constants/seo.constants"
import { Card, PaginationWithLinks } from "@/shared/components"
import { CandidatCard } from "@/features/carousel/components/candidats/CandidatCard"

export const CandidatList = ({ candidats, count, pageCount }: ICandidatResponse) => {
    const searchParams = useSearchParams()
    const params: ISearchTerm = {
        page: parseInt((searchParams.get('page') as string) || PAGE_NUM_DEFAULT),
        limit: parseInt((searchParams.get('limit') as string) || PAGE_LIMIT_DEFAULT)
    }

    if (candidats.length === 0) return <div>Agency list is empty!</div>

    return (
        <div className="container mx-auto">
            <div>
                <div className="flex flex-row flex-wrap min-w-screen min-h-screen p-4 mt-5 gap-3">
                    {candidats && candidats.map(candidat => (
                        <CandidatCard {...candidat} key={candidat.user.email} />
                    ))}
                </div>
                <Card className='p-4 rounded-full'>
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