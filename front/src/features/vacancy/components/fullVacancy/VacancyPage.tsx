import { IVacanciaesFullDate } from "@/features/agency/vacancy/types"
import styles from './vacancyPage.module.scss'
import { CiCalendarDate, CiCirclePlus, CiHeart, CiRead } from "react-icons/ci"
import { formatDate } from "@/shared/utils";
import { useAppSelector } from "@/shared/hooks";
import Link from "next/link";
import { VacancyCardAuthorInfo } from "../vacancyCard/VCAuthorInfo"
import Breadcrumbs from "@/features/breadcrumbs/components/BreadCrumbs"
import { Button, Heading } from "@/shared/components";

export default function VacancyPage({ id, title, description, views, createdAt, reallyUpTo, categories, agency, branchId, branch, contractType, experienceMinimalJob, levelEducation, modeJob, workingTimeJob, breadcrumbs }: IVacanciaesFullDate) {
  const authUser = useAppSelector(state => state.reducer.user.data?.email)

  const author = {
    slug: branchId ? branch.id : agency.slug,
    name: branchId ? branch.name : agency.agency_name,
    location: branchId ? branch.location : agency.address,
    logo: branchId ? branch.logo : agency.logo,
    email: branchId ? branch.email : agency.user.email,
    phone: branchId ? branch.phone : agency.phone,
  }

  const saveInFavorite = () => {
    console.log('job id = ' + id)
    console.log('authUser email = ' + authUser);
  }

  const sendCandudature = () => {
    console.log('job id = ' + id)
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
          <div className={styles.favoriteCandidat}>
            <Button onClick={() => saveInFavorite()}>
              <CiHeart />
            </Button>
            <Button onClick={() => sendCandudature()}>
              <CiCirclePlus /> Candidati
            </Button>
          </div>
        </div>
        <div className={styles.description}>
          <p dangerouslySetInnerHTML={{ __html: description }}></p>
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
            <Link href={'#'}>Altri offerte</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}