'use client'

import { SkeletonCard } from "./Skeleton"
import { useGetVacancy } from "../../hooks/useGetVacancy"
import { VItem } from "./VItem"

import styles from './listvacancy.module.scss'

export function LastVacancies () {
    const {vacancyList, isFetching} = useGetVacancy()

    return (
        <div className={styles.listVacancy}>
            {
                isFetching
                    ? <SkeletonCard />
                    : vacancyList?.items
                        ? vacancyList.items.map(vacancy => (
                            <VItem key={vacancy.id} {...vacancy} />
                        )) : (
                            <div>You dont have vacancies!</div>
                        )
            }
        </div>
    )
}