'use client'

import { IVacanciaesFullDate } from "@/features/agency/vacancy/types"
import Breadcrumbs from "@/features/breadcrumbs/components/BreadCrumbs"
import VacancyPage from "@/features/vacancy/components/fullVacancy/VacancyPage"
import { Card, Heading } from "@/shared/components"
import JobPostingJsonLd from "./JobPostingJsonLd"

export default function JobFullPage(jobData: IVacanciaesFullDate) {
    const job = {
        title: jobData.title,
        description: jobData.description,
        datePosted: jobData.createdAt || new Date().toISOString().split("T")[0],
        validThrough: jobData.reallyUpTo || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0], // +30 дней
        employmentType: jobData.contractType.name || "FULL_TIME",
        companyName: jobData.agency?.agency_name || "Не указано",
        companyWebsite: `https://${jobData.agency?.slug}.` || "https://example.com",
        address: {
          street: "Не указано",
          city: "Не указано",
          country:"Не указано",
        },
        salary: jobData.salary || 0,
        currency: "Euro",
      }

    return (
        <>
            <JobPostingJsonLd job={job} />
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