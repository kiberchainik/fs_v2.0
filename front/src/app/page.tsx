import Agencies from "@/features/carousel/components/agencies/Agencies"
import Candidats from "@/features/carousel/components/candidats/Candidats"
import Vacancies from "@/features/carousel/components/vacancies/Vacancies"
import { BottomCategory, BottomRegions, HeroHeading, MiddleSector, TopSector } from "@/features/mainComponents"
import styles from './maincomponents.module.scss'

export default function Home() {
  return (
    <div className='flex flex-col gap-y-3'>
      <div className={styles.wrapper_sector}>
        <TopSector />
        <HeroHeading />
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