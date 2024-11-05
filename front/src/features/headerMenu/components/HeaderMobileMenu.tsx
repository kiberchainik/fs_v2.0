import Link from "next/link"

import styles from './headerMenu.module.scss'
import { Sheet, SheetContent, SheetTrigger } from "@/shared/components"
import { AlignJustify } from "lucide-react"
import { MenuItems } from "@/shared/config"

interface HeaderMenuProps {
  headerMenu: MenuItems[];
}

export function HeaderMobileMenu ({ headerMenu }: HeaderMenuProps) {
    return (
      <Sheet>
        <SheetTrigger>
          <AlignJustify />
        </SheetTrigger>
        <SheetContent side='left'>
          <Link href='/'>
            FindSol
          </Link>
          <nav className='flex flex-col gap-3 lg:gap-4 mt-6'>
                {headerMenu.map(menu => (
                    <Link href={menu.href} key={menu.href}>
                        {menu.title}
                    </Link>
                ))}
          </nav>
        </SheetContent>
      </Sheet>
    )
}