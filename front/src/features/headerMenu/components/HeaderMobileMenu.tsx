import Link from "next/link"

import styles from './headerMenu.module.scss'
import { Card, Sheet, SheetContent, SheetTrigger } from "@/shared/components"
import { AlignJustify } from "lucide-react"
import { MenuItems } from "@/shared/config"
import CategoryList from "@/features/category/components/Categories"

interface HeaderMenuProps {
  headerMenu: MenuItems[];
}

export function HeaderMobileMenu({ headerMenu }: HeaderMenuProps) {
  return (
    <Sheet>
      <SheetTrigger>
        <AlignJustify />
      </SheetTrigger>
      <SheetContent side='left'>
        <Link href='/'>
          FindSol
        </Link>
        <Card className="p-4 mt-5">
          <nav className='flex flex-col gap-3 lg:gap-4'>
            {headerMenu.map(menu => (
              <Link href={menu.href} key={menu.href}>
                {menu.title}
              </Link>
            ))}
          </nav>
        </Card>
        <div className='mt-5'>
          <CategoryList />
        </div>
      </SheetContent>
    </Sheet>
  )
}