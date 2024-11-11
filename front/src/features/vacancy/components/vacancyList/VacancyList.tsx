'use client'

import { PaginationWithLinks } from "@/shared/components/pagination/component/PaginationWithLinks"
import { VacancyCard } from "../vacancyCard/VacancyCard";
import styles from './vacancyList.module.scss'
import { Card } from "@/shared/components";
import { SkeletonCard } from '@/features/vacancy/components/vacancyCard/Skeleton'
import { useAppDispatch, useAppSelector } from "@/shared/hooks";
import { useEffect } from "react";
import { TCategoryBySlug } from "@/features/category/types";
import { useSearchParams } from "next/navigation";
import { ISearchTerm } from "../../types/searchTerm.type";
import { setError, setJobs, setLoading } from "../../slice/sliceVacancy";
import Filter from "../filter/Filter";

export default function VacancyList({ jobs, count, pageCount, name, description }: TCategoryBySlug) {
  const { data: vacancyList, isLoading, error } = useAppSelector(state => state.reducer.vacancies)
  const dispatch = useAppDispatch()
  const searchParams = useSearchParams()
  const params: ISearchTerm = {
    page: parseInt((searchParams.get('page') as string) || '1'),
    limit: parseInt((searchParams.get('limit') as string) || '10')
  }

  useEffect(() => {
    if (jobs) {
      dispatch(setJobs(jobs))
      dispatch(setLoading(false))
    }

    if (!jobs) {
      dispatch(setError('error'))
      dispatch(setLoading(false))
    }
  }, [jobs])

  if (!vacancyList) return null
  return (
    <>
      <Filter />
      {isLoading ? (<SkeletonCard />) : vacancyList && (
        <div className={styles.listVacancy}>
          <div className={styles.category_info}>
            <div className={styles.category_info_title}>{name}</div>
            <div className={styles.category_info_description}>{description}</div>
          </div>
          <div className={styles.listBlocks}>
            {vacancyList.map(job => <VacancyCard {...job} key={job.id} />)}
          </div>
          <Card className={styles.vacancyPagination}>
            <PaginationWithLinks
              page={pageCount}
              limit={params.limit!}
              totalCount={count}
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