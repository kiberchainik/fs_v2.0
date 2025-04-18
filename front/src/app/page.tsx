import Agencies from "@/features/carousel/components/agencies/Agencies"
import Candidats from "@/features/carousel/components/candidats/Candidats"
import Vacancies from "@/features/carousel/components/vacancies/Vacancies"
import { BottomCategory, BottomRegions, MiddleSector } from "@/features/mainComponents"
import styles from '@/features/mainComponents/components/maincomponents.module.scss'
import { getTranslations } from "next-intl/server"
import { TopSector } from "./(root)/TopSector"
import { HeroHeading } from "./(root)/HeroHeading"

export default async function Home() {
  //const t = await getTranslations('homePage')
  return (
    <div className='flex flex-col gap-y-3'>
      <div className={styles.wrapper_sector}>
        <HeroHeading />
        <TopSector />
      </div>
      <Candidats />
      <MiddleSector />
      <Agencies />
      <Vacancies />
      <BottomCategory />
      {/* <BottomRegions /> */}
    </div>
  )
}