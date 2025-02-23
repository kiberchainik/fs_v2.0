import { NO_INDEX_PAGE } from "@/shared/constants/seo.constants";
import { Metadata } from "next";
import VacancyEdit from "./VacancyEdit";

export const metadata: Metadata = {
	title: 'Vacancy edit',
	...NO_INDEX_PAGE
}

export default function VacancyEditPage() {
    return (
      <div className='flex flex-col gap-x-3 justify-center m-5'>
        <VacancyEdit />
      </div>
    );
}