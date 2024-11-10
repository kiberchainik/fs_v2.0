import { vacancyService } from "@/features/agency/vacancy/services";
import JobFullPage from "./JobFullPage";
import type { Metadata } from "next";

export const revalidate = 60;

async function getVacancyDataPage(jobSlug: string) {
  return await vacancyService.getVacancyDataBySlug(jobSlug);
}

export default async function VacancyPage({ params }: { params: { jobSlug: string } }) {
  // Запрос выполняется один раз и используется для обоих случаев
  const jobData = await getVacancyDataPage(params.jobSlug)

  const metadata: Metadata = {
    title: jobData.title,
    description: jobData.description,
    openGraph: {
      title: jobData.title,
      description: jobData.description,
    },
  }
  return (
    <>
      <div className='flex gap-3'>
        <JobFullPage {...jobData} /> {/* Передаем данные вакансии в компонент */}
      </div>
    </>
  );
}