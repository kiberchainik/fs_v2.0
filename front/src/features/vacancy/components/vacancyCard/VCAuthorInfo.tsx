import { Avatar, AvatarFallback, AvatarImage, Button } from "@/shared/components"
import { MAIN_URL } from "@/shared/config"
import Link from "next/link"

import styles from './vacancyCard.module.scss'
import { CiMail, CiMap, CiPhone, CiVoicemail } from "react-icons/ci"

interface IAuthorData {
    slug: string
    name: string
    location: string
    logo: string
    email: string
    phone: string
}

export function VacancyCardAuthorInfo({ name, slug, email, location, phone, logo }: IAuthorData) {
    name = name.slice(0, 25)
    return (
        <div className={styles.footerAutorInfo}>
            <div className={styles.footerAutorInfo_top}>
                <div>
                    <Avatar>
                        <AvatarImage src={logo} alt={name} />
                        <AvatarFallback>{name.slice(0, 1)}</AvatarFallback>
                    </Avatar>
                </div>
                <div>
                    <Button variant='outline' size='sm'>
                        <Link href={MAIN_URL.agencyPageInfo(slug)}>{name}</Link>
                    </Button>
                </div>
            </div>
            <div className={styles.footerAutorInfo_bottom}>
                <div className={styles.authorContactData}><span><CiMap /></span> {location}</div>
                <div className={styles.authorContactData}><span><CiMail /></span> {email}</div>
                <div className={styles.authorContactData}><span><CiPhone /></span> {phone}</div>
            </div>
        </div>
    )
}