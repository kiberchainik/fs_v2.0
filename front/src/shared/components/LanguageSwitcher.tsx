"use client"

import { useLocale, useTranslations } from 'next-intl'
import { Link, usePathname } from '@/i18n/_routing'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui'
import { IoLanguageOutline } from "react-icons/io5"

export default function LanguageSwitcher() {
    const t = useTranslations('LocaleSwitcher')
    //const locale = useLocale()
    //const otherLocale = locale === 'en' ? 'de' : 'en'
    const pathname = usePathname();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <IoLanguageOutline />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <Link href={pathname} locale="en">
                        English
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href={pathname} locale="ru">
                        Русский
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href={pathname} locale="it">
                        Italiano
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href={pathname} locale="ro">
                        Romeno
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}