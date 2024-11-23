'use client'

import { IVacanciaesFullDate } from "@/features/agency/vacancy/types";
import CarouselJobs from "@/features/carousel/components/Carousel";
import VacancyPage from "@/features/vacancy/components/fullVacancy/VacancyPage";
import { Card } from "@/shared/components";

export default function JobFullPage(jobData: IVacanciaesFullDate) {
    return (
        <>
            <Card className='flex flex-col gap-y-3 p-5'>
                <VacancyPage {...jobData} />
                {/** Contacnt form */}
            </Card>
            {/* <CarouselJobs /> */}
        </>
    );
}