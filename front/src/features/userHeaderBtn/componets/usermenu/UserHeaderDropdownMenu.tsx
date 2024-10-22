'use client'

import { FC } from "react"
import { Loader, Button } from "@/shared/components/ui";
import { useGetUserHeaderData } from "../../hooks";
import { UserMenu } from "./UserMenu";
import Link from "next/link";

export const UserHeaderMenu:FC = () => {
    const {user, isFetching} = useGetUserHeaderData()
    return (
        <>
            { isFetching ? (<Loader />) : user ? (
                    <UserMenu {...user} />
                ) : (
                    <>
                        <Button variant='default'><Link href="/auth/candidat">Candidat</Link></Button>
                        <Button variant='default'><Link href="/auth/agency">Agency</Link></Button>
                    </>
                )
            }
        </>
    )
}