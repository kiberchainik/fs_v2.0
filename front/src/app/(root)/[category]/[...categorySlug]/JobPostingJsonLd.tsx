import { IVacanciaesFullDate } from "@/features/agency/vacancy/types";

export default function JobPostingJsonLd({ job }: { job: any }) {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    "title": job.title,
    "description": job.description,
    "datePosted": job.createdAt,
    "validThrough": job.reallyUpTo || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0], // +30 дней
    "employmentType": job.contractType.name,
    "hiringOrganization": {
      "@type": "Organization",
      "name": job.agency.agency_name,
      "sameAs": job.agency.slug
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": job.location,
        "addressLocality": job.agency,
        "addressCountry": 'Italia'
      }
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": '',
      "value": {
        "@type": "QuantitativeValue",
        "value": job.salary,
        "unitText": "MONTH"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}