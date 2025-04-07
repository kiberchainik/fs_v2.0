'use client'

import { FC, useEffect } from "react"
import { Loader, Button } from "@/shared/components/ui"
import { useGetUserHeaderData } from "../../hooks"
import { UserMenu } from "./UserMenu"
import Link from "next/link"
import { useAppSelector } from "@/shared/hooks"
import { MAIN_URL } from "@/shared/config"
import { useTranslations } from "next-intl"

export const UserHeaderMenu: FC = () => {
    const { data: user, isLoading, error } = useAppSelector(state => state.reducer.user)
    const { refetch } = useGetUserHeaderData()
    const account_header_btns = useTranslations('header.account_header_btns')

    useEffect(() => {
        refetch()
    }, [refetch])

    return (
        <>
            {isLoading ? (<Loader />) : user ? (
                <UserMenu {...user} />
            ) : (
                <>
                    <Button variant='default'><Link href={MAIN_URL.authCandidat()}>{account_header_btns('btn_candidat')}</Link></Button>
                    <Button variant='default'><Link href={MAIN_URL.authAgency()}>{account_header_btns('btn_agency')}</Link></Button>
                </>
            )
            }
        </>
    )
}