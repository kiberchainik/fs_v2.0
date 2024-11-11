import { IVacanciaesFullDate } from "@/features/agency/vacancy/types"
import { Button, Heading } from "@/shared/components"

import styles from './vacancyPage.module.scss'
import { CiCalendarDate, CiHeart, CiRead } from "react-icons/ci";
import { formatDate } from "@/shared/utils";
import { useAppSelector } from "@/shared/hooks";
import Link from "next/link";
import { MAIN_URL } from "@/shared/config";
import { VacancyCardAuthorInfo } from "../vacancyCard/VCAuthorInfo";

export default function VacancyPage({ id, title, description, views, createdAt, reallyUpTo, categories, agency, branchId, branch }: IVacanciaesFullDate) {
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

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperVacancy}>
        <Heading className={styles.title}>{title}</Heading>
        {categories && (
          <div className={styles.breadcrumbs}>
            <Button variant='link'>
              <Link href={MAIN_URL.categories()}>Offerte di lavoro</Link>
            </Button>
            <span>/</span>
            <Button variant='link'>
              <Link href={MAIN_URL.categories(categories.slug)}>{categories.name}</Link>
            </Button>
          </div>
        )}
        <div className={styles.jobInfo}>
          <div className={styles.viewsData}>
            <div className={styles.views}><span><CiRead /></span> {views}</div>
            <div className={styles.createdAt}><span><CiCalendarDate /></span> {formatDate(createdAt)}</div>
            {reallyUpTo && <div className={styles.reallyUpTo}>Attuale fino {formatDate(reallyUpTo)}</div>}
          </div>
          <div className={styles.saveFavorite}>
            <Button onClick={() => saveInFavorite()}>
              <CiHeart />
            </Button>
          </div>
        </div>
        <div className={styles.description}>
          <p dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>
      </div>
      <div className={styles.authorSector}>
        <VacancyCardAuthorInfo {...author} />
      </div>
    </div>
  );
}