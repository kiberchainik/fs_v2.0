"use client"

import { useLocale } from 'next-intl'
import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui'
import { IoLanguageOutline } from "react-icons/io5"
import { useTransition } from 'react'
import { Language, setLanguage } from '@/i18n'

export const LanguageSwitcher = () => {
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
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className='!w-16'>
                    <IoLanguageOutline />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem onClick={() => changeLanguage('en')}>
                    English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('ru')}>
                    Русский
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('it')}>
                    Italiano
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('ro')}>
                    Romeno
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}