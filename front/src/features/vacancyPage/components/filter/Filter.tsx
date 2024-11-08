import { Button, Card, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/shared/components";
import { CiBoxList, CiGrid41 } from "react-icons/ci"
import { useAppDispatch, useAppSelector } from 'react-redux';
import { setSortBy, sortJobs } from '@/store/vacancySlice'

export default function VacancyFilter() {
const dispatch = useAppDispatch();
    const sortBy = useAppSelector((state: RootState) => state.jobs.sortBy)

const handleSortChange = (value: string) => {
        // Устанавливаем критерий сортировки и сортируем вакансии
        dispatch(setSortBy(value as "title" | "createdAt" | "views"));
        dispatch(sortJobs());
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
                    <SelectItem value="date">Data</SelectItem>
                    <SelectItem value="popular">Popular</SelectItem>
                    <SelectItem value="new">New</SelectItem>
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