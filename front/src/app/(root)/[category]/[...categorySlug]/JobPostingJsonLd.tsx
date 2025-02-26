import { IVacanciaesFullDate } from "@/features/agency/vacancy/types";
import { APP_URL } from "@/shared/config";

export default function JobPostingJsonLd({ jobData }: { jobData: IVacanciaesFullDate }) {
    const jsonLd = {
        "@context": "https://schema.org/",
        "@type": "JobPosting",
        "title": jobData.title,
        "description": jobData.description,
        "datePosted": new Date(jobData.createdAt).toISOString().split("T")[0],
        "validThrough": jobData.reallyUpTo || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0], // +30 дней, если нет даты
        "employmentType": jobData.contractType.name,
        "identifier": {
            "@type": "PropertyValue",
            "name": jobData.agency.agency_name,
            "value": jobData.id
        },
        "hiringOrganization": {
            "@type": "Organization",
            "name": jobData.agency.agency_name,
            "sameAs": `https://${APP_URL}/agenzia-di-lavoro/${jobData.agency.slug}`,
            "logo": jobData.agency.logo
        },
        "jobLocation": {
            "@type": "Place",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": jobData.location,
                "addressRegion": jobData.region,
                "addressCountry": "IT"
            }
        },
        "baseSalary": jobData.salary ? {
            "@type": "MonetaryAmount",
            "currency": "EUR",
            "value": jobData.salary
        } : undefined,
        "applicantLocationRequirements": {
            "@type": "Country",
            "name": "Italy"
        }
    };

    return (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    )
}