'use client'

import { IVacanciaesFullDate } from "@/features/agency/vacancy/types"
import Breadcrumbs from "@/features/breadcrumbs/components/BreadCrumbs";
import VacancyPage from "@/features/vacancy/components/fullVacancy/VacancyPage"
import { Card, Heading } from "@/shared/components"

export default function JobFullPage(jobData: IVacanciaesFullDate) {
    return (
        <>
            <div className="flex flex-col gap-y-4">
                <Heading>{jobData.categories.name}</Heading>
                <Breadcrumbs breadcrumbs={jobData.breadcrumbs} />
            </div>
            <div className='flex flex-col gap-y-3'>
                <VacancyPage {...jobData} />
                * Contacnt form
            </div>
        </>
    );
}