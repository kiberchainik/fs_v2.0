import Agencies from "@/features/carousel/components/agencies/Agencies"
import Candidats from "@/features/carousel/components/candidats/Candidats"
import Vacancies from "@/features/carousel/components/vacancies/Vacancies"
import { BottomCategory, BottomRegions, HeroHeading, MiddleSector, TopSector } from "@/features/mainComponents"
import styles from '@/features/mainComponents/components/maincomponents.module.scss'
import { getTranslations } from "next-intl/server"

export default async function Home() {
  const t = await getTranslations('homePage')

  const getSectionT = (section: string) => (key: string, ...args: any[]) => t(`${section}.${key}`, ...args)
  return (
    <div className='flex flex-col gap-y-3'>
      <div className={styles.wrapper_sector}>
        <HeroHeading t={getSectionT('topSector')} />
        <TopSector t={getSectionT('topSector')} />
      </div>
      <Candidats t={getSectionT('candidatsSector')} />
      <MiddleSector t={getSectionT('middleSector')} />
      <Agencies t={getSectionT('agencySector')} />
      <Vacancies t={getSectionT('vacanciesSector')} />
      <BottomCategory />
      {/* <BottomRegions /> */}
    </div>
  )
}