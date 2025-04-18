import styles from '@/features/mainComponents/components/maincomponents.module.scss'
import { MainFilterVacancy } from '../../features/mainComponents'
import { getTranslations } from 'next-intl/server'

export async function TopSector() {
    const t = await getTranslations('homePage.topSector')

    return (
        <div className={styles.hero_form}>
            <MainFilterVacancy
                sector={t('sector')}
                locationForm={t('località')}
                contractTypeForm={t('contractType')}
                btn={t('search_btn')}
            />
        </div>
    )
}