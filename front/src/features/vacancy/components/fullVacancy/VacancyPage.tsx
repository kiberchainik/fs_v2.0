'use client'

import { IVacanciaesFullDate } from "@/features/agency/vacancy/types"
import styles from './vacancyPage.module.scss'
import { CiCalendarDate, CiRead } from "react-icons/ci"
import { formatDate, generatePostUrl } from "@/shared/utils";
import { useAppSelector } from "@/shared/hooks";
import Link from "next/link";
import { VacancyCardAuthorInfo } from "../vacancyCard/VCAuthorInfo"
import Breadcrumbs from "@/features/breadcrumbs/components/BreadCrumbs"
import { Button, Description, Heading } from "@/shared/components";
import { UserRole } from "@/features/auth/types";
import { CandidateBtns } from "../candidatBtns/CandidateBtns";
import { useEffect, useState } from "react";

export default function VacancyPage({
  id,
  title,
  description,
  views,
  createdAt,
  reallyUpTo,
  categories,
  agency,
  branchId,
  branch,
  contractType,
  experienceMinimalJob,
  levelEducation,
  modeJob,
  workingTimeJob,
  breadcrumbs,
  savedBy,
  sendCandidature: curriculum
}: IVacanciaesFullDate) {
  const authUser = useAppSelector(state => state.reducer.user.data)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true);
  }, []);

  const author = {
    slug: branchId ? branch.id : agency.slug,
    name: branchId ? branch.name : agency.agency_name,
    location: branchId ? branch.location : agency.address,
    logo: branchId ? branch.logo : agency.logo,
    email: branchId ? branch.email : agency.user.email,
    phone: branchId ? branch.phone : agency.phone,
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperVacancy}>
        <Heading className={styles.title}>{title}</Heading>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <div className={styles.jobInfo}>
          <div className={styles.viewsData}>
            <div className={styles.views}><span><CiRead /></span> {views}</div>
            <div className={styles.createdAt}><span><CiCalendarDate /></span> {formatDate(createdAt)}</div>
            {reallyUpTo && <div className={styles.reallyUpTo}>Attuale fino {formatDate(reallyUpTo)}</div>}
          </div>
          {authUser?.role !== UserRole.Agency && <div className={styles.favoriteCandidat}>
            <CandidateBtns jobId={id!} authUser={authUser!} curriculum={curriculum!} savedBy={savedBy!} />
          </div>}
        </div>
        <div className={styles.description}>
          {isClient && (
            <div className="prose max-w-none"><Description>{description}</Description></div>
          )}
        </div>
      </div>
      <div className={styles.authorSector}>
        <div className='grid gap-y-3 font-bold text-sm'>
          <span>{contractType && contractType.name}</span>
          <span>{experienceMinimalJob && experienceMinimalJob.name}</span>
          <span>{workingTimeJob && workingTimeJob.name}</span>
          <span>{levelEducation && levelEducation.name}</span>
          <span>{modeJob && modeJob.name}</span>
        </div>
        <VacancyCardAuthorInfo {...author} />
        <div className={styles.authorSector_btn}>
          <Button variant='default'>
            <Link href={generatePostUrl(categories)}>Altri offerte</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}