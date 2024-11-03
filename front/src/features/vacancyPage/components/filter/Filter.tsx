import { Button, Card, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/shared/components";
import { CiBoxList, CiGrid41 } from "react-icons/ci"

export default function VacancyFilter() {
    return (
      <div className='flex gap-3 w-full'>
        <Card className='w-full rounded-full'>
          <div className='flex p-5 items-center justify-between'>
            <div className='flex justify-start gap-x-2'>
              <Select>
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
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Per page ..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="20">20</SelectItem>
                    <SelectItem value="30">30</SelectItem>
                    <SelectItem value="40">40</SelectItem>
                    <SelectItem value="50">50</SelectItem>
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