'use client'

import { Button, Card, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/shared/components";
import { CiBoxList, CiFilter, CiGrid41 } from "react-icons/ci"

import { useAppDispatch, useAppSelector } from "@/shared/hooks";
import { RootState } from "@/shared/store";
import { setSortBy, sortJobs } from "../../slice/sliceVacancy";
import { useTranslations } from "next-intl";

export default function Sorted() {
  const t = useTranslations('vacancy_page')
  const dispatch = useAppDispatch();
  const sortBy = useAppSelector((state: RootState) => state.reducer.vacancies.sortBy)

  const handleSortChange = (value: string) => {
    dispatch(setSortBy(value as "title" | "createdAt" | "views" | "salary"));
    dispatch(sortJobs())
  };

  return (
    <div className='flex gap-3 w-full'>
      <Card className='w-full rounded-full'>
        <div className='flex p-5 items-center justify-between'>
          <div className='flex justify-start gap-x-2'>
            <Select onValueChange={handleSortChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sorted by ..." />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="createdAt">{t('sortByDate')}</SelectItem>
                  <SelectItem value="title">{t('sortByTitle')}</SelectItem>
                  <SelectItem value="salary">{t('sortBySalary')}</SelectItem>
                  <SelectItem value="views">{t('sortByViews')}</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className='flex justify-end gap-x-1'>
            <Button variant='link' size='sm' className='text-xl'>
              <CiGrid41 />
            </Button>
            <Button variant='link' size='sm' className='text-xl'>
              <CiBoxList />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}