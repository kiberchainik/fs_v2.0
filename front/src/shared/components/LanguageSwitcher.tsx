"use client"

import { useLocale } from 'next-intl'
import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui'
import { IoLanguageOutline } from "react-icons/io5"
import { useTransition } from 'react'
import { Language, setLanguage } from '@/i18n'

export default function LanguageSwitcher() {
    const [isPending, startTransition] = useTransition()
    const locale = useLocale()

    const changeLanguage = (locale: Language) => {
        startTransition(async () => {
            try {
                await setLanguage(locale)
            } catch (error) {
                console.log(error)
            }
        })
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <IoLanguageOutline />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <Button variant={'link'} onClick={() => changeLanguage('en')}>
                        English
                    </Button>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Button variant={'link'} onClick={() => changeLanguage('ru')}>
                        Русский
                    </Button>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Button variant={'link'} onClick={() => changeLanguage('it')}>
                        Italiano
                    </Button>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Button variant={'link'} onClick={() => changeLanguage('ro')}>
                        Romeno
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}