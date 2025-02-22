'use client'

import { PaginationWithLinks } from "@/shared/components/pagination/component/PaginationWithLinks"
import { VacancyCard } from "../vacancyCard/VacancyCard";
import styles from './vacancyList.module.scss'
import { Card } from "@/shared/components"
import { useAppDispatch, useAppSelector } from "@/shared/hooks";
import { useEffect } from "react";
import { TCategoryBySlug } from "@/features/category/types";
import { useSearchParams } from "next/navigation";
import { ISearchTerm } from "../../types/searchTerm.type";
import { setCountTotalJobs, setError, setJobs, setLoading, setPageCount } from "../../slice/sliceVacancy";
import Breadcrumbs from "@/features/breadcrumbs/components/BreadCrumbs"
import { VacancySkeleton } from "@/features/carousel/components/vacancies/VacancySkeleton";
import Sorted from "../sorted/Sorted";

export default function VacancyList({ jobs, count: totalJobs, pageCount: totalPages, name, category_not_found, description, breadcrumbs }: TCategoryBySlug) {
  const authUser = useAppSelector(state => state.reducer.user.data)
  const dispatch = useAppDispatch()
  const searchParams = useSearchParams()

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

  const { data: vacancyList, isLoading, page, totalCountJobs, limit } = useAppSelector(state => state.reducer.vacancies)
  const params: ISearchTerm = {
    page: parseInt((searchParams.get('page') as string) || page!),
    limit: parseInt((searchParams.get('limit') as string) || limit!)
  }
  if (!vacancyList) return null
  console.log(vacancyList.length);

  return (
    <>
      <Sorted />
      {isLoading ? (<VacancySkeleton />) : vacancyList && (
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