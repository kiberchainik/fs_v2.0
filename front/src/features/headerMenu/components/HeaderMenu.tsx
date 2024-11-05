'use client'

import { headerMainMenu } from "@/shared/config";

import styles from './headerMenu.module.scss'
import { HeaderDesctopMenu, HeaderMobileMenu } from "."

export function HeaderMenu () {
    const headerMenu = headerMainMenu()
    
    return (
        <>
            <div className='hidden md:flex'>
                <HeaderDesctopMenu  headerMenu={headerMenu} />
            </div>
            <div className='md:hidden'>
                <HeaderMobileMenu  headerMenu={headerMenu} />
            </div>
        </>
    )
}