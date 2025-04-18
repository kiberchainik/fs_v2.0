import { headerMainMenu, MAIN_URL } from "@/shared/config"
import { cn, formatDate } from "@/shared/utils"
import Link from "next/link"
import Image from "next/image"
import { PiCopyrightThin } from "react-icons/pi"

import styles from './footer.module.scss'

export function Footer() {
    const headerMenu = headerMainMenu()
    return (
        <footer className={cn('dark:bg-neutral-900', styles.footer)}>
            <div className={styles.foter_content}>
                <div className={styles.footer_about_lavidea}>
                    <div className={styles.footer_about_lavidea_logo}>
                        <Image src='/icon.webp' alt='LavIdea' height={64} width={64} />
                    </div>
                    <div className={styles.footer_about_lavidea_description}>
                        <p>Lavoro Ideale - Crea e gestisci il tuo curriculum gratuitamente, invia la tua candidatura direttamente sul sito a qualsiasi agenzia</p>
                        <p>Lavoro Ideale - Pubblica offerte di lavoro e trova professionisti in modo rapido e semplice. Rimani sempre in contatto diretto con i candidati</p>
                    </div>
                </div>
                <div className={styles.footer_menu}>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/developers" target="_blank">Developers</Link></li>
                        <li><Link href="/chi-siamo">Chi siamo</Link></li>
                        <li><Link href="/contatti">Contattaci</Link></li>
                    </ul>
                </div>
            </div>
            <div className={styles.footer_copyright}>
                <PiCopyrightThin /> <span>{formatDate(new Date(), { 'dateFormat': 'year' })}</span> <Link href={MAIN_URL.home()}>Lavoro Ideale</Link>
            </div>
        </footer>
    )
}