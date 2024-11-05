import { FC, PropsWithChildren, ReactElement } from "react";
import styles from './header.module.scss'
import { cn } from "@/shared/utils";
import { Logo } from "@/shared/components";
import { ToggleTheme } from "../ui";
import { UserHeaderMenu } from "@/features/userHeaderBtn/componets/usermenu/UserHeaderDropdownMenu";
import { HeaderMenu } from "@/features/headerMenu/components/HeaderMenu";

interface IStyles {
    className?: string
    children?: ReactElement
}

export const Header: FC<PropsWithChildren<IStyles>> = ({children, className}) => {
    return <div className={styles.wrapper}>
        <div className={cn(styles.header, className)}>
            <div className='hidden md:flex'><Logo /></div>
            {children}
            <div className='flex gap-x-2 items-center'>
                <UserHeaderMenu />
                <ToggleTheme />
            </div>
        </div>
    </div>
}