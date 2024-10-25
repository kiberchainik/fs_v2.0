'use client'

import { Card, CardContent, CardDescription, Loader } from "@/shared/components"
import { useGetVacancy } from "../../../vacancy/hooks/useGetVacancy"
import { VItem } from "./VItem"

export function LastVacancies () {
    const {vacancyList, isFetching} = useGetVacancy()

    return (
        <Card className=''>
            <CardContent>
                {
                    isFetching
                        ? <Loader />
                        : vacancyList?.items
                            ? vacancyList.items.map(vacancy => (
                                <VItem key={vacancy.id} {...vacancy} />
                            )) : (
                                <CardDescription>You dont have vacancies!</CardDescription>
                            )
                }
            </CardContent>
        </Card>
    )
}