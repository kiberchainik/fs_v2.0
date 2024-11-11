import { vacancyService } from "@/features/agency/vacancy/services";
import JobFullPage from "./JobFullPage";
import type { Metadata, ResolvingMetadata } from "next";
import CategoryMenu from "@/features/category/components/Categories"
import { cache } from "react";

export const revalidate = 60;

type Props = {
  params: { jobSlug: string }
}

const getJobData = cache(
  async (jobSlug: string) => {
    return await vacancyService.getVacancyDataBySlug(jobSlug)
  }
)

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const jobData = await getJobData(params.jobSlug)
  //const previosImages = (await parent).openGraph?.images || []

  return {
    title: jobData.title,
    description: jobData.description,
    openGraph: {
      title: jobData.title,
      description: jobData.description,
      //images: ['/some-specific-page-image.jpg', ...previosImages]
    }
  }
}

export default async function VacancyPage({ params }: Props) {
  const jobData = await getJobData(params.jobSlug)

  return (
    <div className='mt-6'>
      <div className='flex gap-5 justify-between m-10'>
        <div className='w-1/3 hidden md:block'>
          <CategoryMenu />
        </div>
        <div className='flex flex-col gap-y-5 w-full'>
          <JobFullPage {...jobData} />
        </div>
      </div>
    </div>
  );
}