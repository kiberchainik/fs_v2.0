'use client'

import { PaginationWithLinks } from "@/shared/components/pagination/component/PaginationWithLinks";
import { useGetVacancyListPage } from "../../hooks/useGetVacancyList";
import { VacancyCard } from "../vacancyCard/VacancyCard";
import styles from './vacancyList.module.scss'
import { Card } from "@/shared/components";
import { SkeletonCard } from '@/features/vacancyPage/components/vacancyCard/Skeleton'
import { useAppSelector } from "@/shared/hooks";
import { useEffect } from "react";
import { useParams } from "next/navigation";

export default function VacancyPage() {
  const { jobSlug } = useParams<{ jobSlug: string }>()
  const { data: vacancyList, isLoading, error } = useAppSelector(state => state.reducer.vacancies)
  const { query, params } = useGetVacancyListPage()

  useEffect(() => {
    query.refetch()
  }, [query.refetch])

  if (!vacancyList) return null
  return (
    <>
      {isLoading ? (<SkeletonCard />) : vacancyList && (
        <div className={styles.listVacancy}>
          <div className={styles.listBlocks}>
            {vacancyList.items.map(job => <VacancyCard {...job} />)}
          </div>
          <Card className={styles.vacancyPagination}>
            <PaginationWithLinks
              page={params.page || 1}
              limit={params.limit || 10}
              totalCount={vacancyList?.count}
              pageSizeSelectOptions={{
                pageSizeOptions: [5, 10, 25, 50]
              }}
            />
          </Card>
        </div>
      )}
    </>
  )
}