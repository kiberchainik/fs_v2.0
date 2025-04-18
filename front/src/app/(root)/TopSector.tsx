import styles from '@/features/mainComponents/components/maincomponents.module.scss'
import { MainFilterVacancy } from '../../features/mainComponents'

export const TopSector = () => {
    return (
        <div className={styles.hero_form}>
            <MainFilterVacancy />
        </div>
    )
}