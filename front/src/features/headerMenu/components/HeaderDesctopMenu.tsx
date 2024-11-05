import Link from "next/link"

import styles from './headerMenu.module.scss'
import { MenuItems } from "@/shared/config";

interface HeaderMenuProps {
    headerMenu: MenuItems[];
}

export const HeaderDesctopMenu = ({ headerMenu }: HeaderMenuProps) => {
    
    return (
        <div className='hidden md:flex'>
            <nav className='flex py-1 px-2 gap-x-4 items-center lg:gap-4 ml-8'>
                {headerMenu.map((menu) => (
                    <Link href={menu.href} key={menu.href}>
                        {menu.title}
                    </Link>
                ))}
            </nav>
        </div>
    )
}