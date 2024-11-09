import { vacancyService } from "@/features/agency/vacancy/services";
import JobFullPage from "./JobFullPage";
import type { Metadata } from "next";

export const revalidate = 60

async function getVacancyDataPage(jobSlug: string) {
  return await vacancyService.getVacancyDataBySlug(jobSlug)
}

export async function generateMetadata({ params }: { params: { jobSlug: string } }): Promise<Metadata> {
  const jobData = await getVacancyDataPage(params.jobSlug)

  return {
    title: jobData?.title,
    description: jobData?.description,
    openGraph: {
      title: jobData?.title,
      description: jobData?.description
    }
  }
}

export default async function VacancyPage({ params }: { params: { jobSlug: string } }) {
  const jobData = await getVacancyDataPage(params.jobSlug)

  return (
    <div className='flex gap-3'>
      <JobFullPage {...jobData} />
    </div>
  );
}