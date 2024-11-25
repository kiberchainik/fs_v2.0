'use client'

import { Button, Card, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/shared/components";
import { CiBoxList, CiFilter, CiGrid41 } from "react-icons/ci"

import { useAppDispatch, useAppSelector } from "@/shared/hooks";
import { RootState } from "@/shared/store";
import { setSortBy, sortJobs } from "../../slice/sliceVacancy";
import { DialogFilter } from "@/features/filter/components/DialogFilter";

export default function VacancyFilter() {
  const dispatch = useAppDispatch();
  const sortBy = useAppSelector((state: RootState) => state.reducer.vacancies.sortBy)

  const handleSortChange = (value: string) => {
    dispatch(setSortBy(value as "title" | "createdAt" | "views"));
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
                  <SelectItem value="createdAt">Data</SelectItem>
                  <SelectItem value="title">Title</SelectItem>
                  <SelectItem value="views">Popular</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className='flex justify-end gap-x-1'>
            <DialogFilter />
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