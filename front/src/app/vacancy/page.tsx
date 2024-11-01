import CategoryList from "@/features/category/components/Categories";
import VacancyFilter from "@/features/vacancyPage/components/filter/Filter";
import VacancyList from "@/features/vacancyPage/components/vacancyList/VacancyList";

export default function VacancyPage() {
    return (
      <div className='flex gap-3'>
        <VacancyFilter />
        <CategoryList />
        <VacancyList />
      </div>
    );
  }