import { FC, PropsWithChildren } from "react";
import styles from './logo.module.scss'
import { cn } from "@/shared/utils";
import Link from "next/link";

interface IStyles {
    className?: string
}

export const Logo: FC<PropsWithChildren<IStyles>> = ({ className }) => {
    return <Link href='/' className={cn(styles.wrapper, className)}>
        FindSolution
    </Link>
}