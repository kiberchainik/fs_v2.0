'use client'

import { headerMainMenu } from "@/shared/config";

import styles from './headerMenu.module.scss'
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/shared/components";
import { cn } from "@/shared/utils";

export function HeaderMenu() {
    const headerMenu = headerMainMenu()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <>
            <div className="min-[920px]:hidden">
                <Button onClick={toggleMenu} className="focus:outline-none" aria-label="Toggle Menu">
                    {isMenuOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </Button>
            </div>

            <nav className={cn(styles.headerNav, isMenuOpen ? styles.toggleOpen : styles.toggleClose, 'min-[920px]:opacity-100 min-[920px]:scale-100 min-[920px]:pointer-events-auto')}>
                <ul className={styles.list}>
                    {headerMenu.map((menu) => (
                        <Link href={menu.href} key={menu.href} onClick={toggleMenu}>
                            {menu.title}
                        </Link>
                    ))}
                </ul>
            </nav>
        </>
    )
}