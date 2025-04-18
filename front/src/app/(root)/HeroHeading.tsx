import { getTranslations } from 'next-intl/server'
import Image from "next/image"

import styles from '@/features/mainComponents/components/maincomponents.module.scss'

export async function HeroHeading() {
    const t = await getTranslations('homePage.topSector')

    return (
        <div className={styles.hero_banner}>
            <div className={styles.hero_banner__content}>
                <h1>{t('h1')}</h1>
                <p>{t('p')}</p>
                <div className={styles.hero_banner__content__tags}>
                    <span>
                        <a href="#" className="dark:bg-opacity-20">{t('operaio')}</a>
                    </span>
                    <span>
                        <a href="#" className="dark:bg-opacity-20">{t('contabile')}</a>
                    </span>
                    <span>
                        <a href="#" className="dark:bg-opacity-20">{t('economista')}</a>
                    </span>
                    <span>
                        <a href="#" className="dark:bg-opacity-20">{t('venditore')}</a>
                    </span>
                    <span>
                        <a href="#" className="dark:bg-opacity-20">{t('autista')}</a>
                    </span>
                </div>
            </div><div className={styles.hero_banner__image}>
                <div className={styles.hero_banner__image__img}>
                    <Image
                        src="/ban-image1.webp"
                        alt="lavoro-ideale"
                        quality={100}
                        width={500}
                        height={500}
                        className="!w-[500px] !h-[500px]"
                    />
                </div>
            </div>
        </div>
    )
}