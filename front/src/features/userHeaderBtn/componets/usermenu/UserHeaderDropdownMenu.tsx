'use client'

import { FC, useEffect } from "react"
import { Loader, Button } from "@/shared/components/ui";
import { useGetUserHeaderData } from "../../hooks";
import { UserMenu } from "./UserMenu";
import Link from "next/link";
import { useAppSelector } from "@/shared/hooks"
import { MAIN_URL } from "@/shared/config";

export const UserHeaderMenu: FC = () => {
    const { data: user, isLoading, error } = useAppSelector(state => state.reducer.user)
    const { refetch } = useGetUserHeaderData()

    useEffect(() => {
        refetch()
    }, [refetch])

    return (
        <>
            {isLoading ? (<Loader />) : user ? (
                <UserMenu {...user} />
            ) : (
                <>
                    <Button variant='default'><Link href={MAIN_URL.authCandidat()}>Candidat</Link></Button>
                    <Button variant='default'><Link href={MAIN_URL.authAgency()}>Agency</Link></Button>
                </>
            )
            }
        </>
    )
}