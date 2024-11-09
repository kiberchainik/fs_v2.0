import CategoryList from "@/features/category/components/Categories";
import VacancyFilter from "@/features/vacancyPage/components/filter/Filter";
import VacancyList from "@/features/vacancyPage/components/vacancyList/VacancyList";

import styles from './vacancy.module.scss'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Vacancies on the Findsol portal',
  description: 'Vacancies on the Findsol portal'
}

export default function VacancyPage() {
  return (
    <div className='flex gap-5 justify-between m-10'>
      <div className='w-1/3 hidden md:flex'>
        <CategoryList />
      </div>
      <div className='flex flex-col gap-y-5 w-full'>
        <VacancyFilter />
        <VacancyList />
      </div>
    </div>
  );
}