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
import { setCountTotalJobs, setError, setJobs, setLoading, setPageCount } from "../../slice/sliceVacancy";
import Filter from "../sorted/Filter";
import Breadcrumbs from "@/features/breadcrumbs/components/BreadCrumbs"

export default function VacancyList({ jobs, count: totalJobs, pageCount: totalPages, name, category_not_found, description, breadcrumbs }: TCategoryBySlug) {
  const { data: vacancyList, isLoading, page, totalCountJobs, limit } = useAppSelector(state => state.reducer.vacancies)
  const dispatch = useAppDispatch()
  const searchParams = useSearchParams()
  const params: ISearchTerm = {
    page: parseInt((searchParams.get('page') as string) || page!.toString()),
    limit: parseInt((searchParams.get('limit') as string) || limit!.toString())
  }

  useEffect(() => {
    if (jobs) {
      dispatch(setJobs(jobs))
      dispatch(setCountTotalJobs(totalJobs!))
      dispatch(setPageCount(totalPages!))
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
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <div className={styles.category_info}>
            {category_not_found && <div className={styles.category_not_found}>{category_not_found}</div>}
            <div className={styles.category_info_title}>{name}</div>
            <div className={styles.category_info_description}>{description}</div>
          </div>
          <div className={styles.listBlocks}>
            {vacancyList.map(job => <VacancyCard {...job} key={job.id} />)}
          </div>
          <Card className={styles.vacancyPagination}>
            <PaginationWithLinks
              page={params.page!}
              limit={params.limit!}
              totalCount={totalCountJobs!}
              pageSizeSelectOptions={{
                pageSizeOptions: [10, 25, 50]
              }}
            />
          </Card>
        </div>
      )}
    </>
  )
}