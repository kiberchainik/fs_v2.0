import styles from './maincomponents.module.scss'
import { MainFilterVacancy } from '../../features/mainComponents/components/MainFilterVacancy'

export const TopSector = () => {
    return (
        <div className={styles.hero_form}>
            <MainFilterVacancy />
        </div>
    )
}