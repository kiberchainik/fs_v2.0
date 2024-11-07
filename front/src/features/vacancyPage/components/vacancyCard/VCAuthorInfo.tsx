import { Avatar, AvatarFallback, AvatarImage, Button } from "@/shared/components"
import { MAIN_URL } from "@/shared/config"
import Link from "next/link"

import styles from './vacancyCard.module.scss'

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
                        <Link href={MAIN_URL.branchPageInfo(slug)}>{name}</Link>
                    </Button>
                </div>
            </div>
            <div>
                <div>{location}</div>
                <div>{email}</div>
                <div>{phone}</div>
            </div>
        </div>
    )
}