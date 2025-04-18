import styles from './maincomponents.module.scss'
import { MainFilterVacancy } from './MainFilterVacancy'

export const TopSector = () => {
    return (
        <div className={styles.hero_form}>
            <MainFilterVacancy />
        </div>
    )
}