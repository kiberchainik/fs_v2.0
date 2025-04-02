import { FC, PropsWithChildren, ReactElement } from "react";
import styles from './header.module.scss'
import { cn } from "@/shared/utils";
import { Logo, LanguageSwitcher } from "@/shared/components";
import { ToggleTheme } from "../ui/";
import { UserHeaderMenu } from "@/features/userHeaderBtn/componets/usermenu/UserHeaderDropdownMenu"

interface IStyles {
    className?: string
    children?: ReactElement
}

export const Header: FC<PropsWithChildren<IStyles>> = ({ children, className }) => {
    return <header className={cn(styles.wrapper, 'dark:bg-neutral-900/80')}>
        <div className={cn(styles.header, className)}>
            <div className='hidden sm:flex'><Logo /></div>
            <div className='flex w-full items-center'>
                {children}
            </div>
            <div className='flex gap-x-2 items-center'>
                <UserHeaderMenu />
                <LanguageSwitcher />
                <ToggleTheme />
            </div>
        </div>
    </header>
}