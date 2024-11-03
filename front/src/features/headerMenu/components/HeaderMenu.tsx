'use client'

import { headerMainMenu } from "@/shared/config";
import Link from "next/link"

import styles from './headerMenu.module.scss'

export function HeaderMenu () {
    const headerMenu = headerMainMenu()
    return (
        <ul className='flex py-1 px-2 gap-x-4'>
            {headerMenu.map(menu => (
                <Link href={menu.href} key={menu.href}>
                    {menu.title}
                </Link>
            ))}
        </ul>
    )
}