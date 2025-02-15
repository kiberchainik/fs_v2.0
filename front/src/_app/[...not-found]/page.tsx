import { Metadata } from "next";

import styles from './pageNotFound.module.scss'
import Link from "next/link";
import { NO_INDEX_PAGE } from "@/shared/constants/seo.constants";
import { Heading } from "@/shared/components";
import { MAIN_URL } from "@/shared/config";

export const metadata: Metadata = {
    title: 'Page not found!',
    ...NO_INDEX_PAGE
}

export default function NotFoundPage() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.area}>
                <Heading>404. Page not found</Heading>
                <p>pshol naher!</p>
                <Link href={MAIN_URL.home()} className={styles.link}>
                    Go to home page
                </Link>
            </div>
        </div>
    )
}