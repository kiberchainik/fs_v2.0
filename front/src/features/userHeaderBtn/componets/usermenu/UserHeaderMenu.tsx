'use client'

import { FC } from "react"
import { Avatar, AvatarImage, AvatarFallback, Loader } from "@/shared/components/ui";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/shared/components/ui";
import { LuLayoutDashboard, LuLogOut } from "react-icons/lu"
import { useLogoutMutation, useGetUserHeaderData } from "../../hooks";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const UserHeaderMenu:FC = () => {
    const router = useRouter()
    const {user, isFetching} = useGetUserHeaderData()
    const {isLoader, logout} = useLogoutMutation()

    return (
        <>
            { isFetching ? (<Loader />) : user ? (
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Avatar>
                                <AvatarImage src={user.avatar} />
                                <AvatarFallback>{ user.email.slice(0, 1) }</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className='w-40' align='end'>
                            <DropdownMenuItem onClick={() => router.push(`/${user.role.toLowerCase()}/profile`)} className='cursor-pointer'>
                                <LuLayoutDashboard className='mr-2 size-4' /> Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                disabled={isLoader}
                                onClick={() => logout()}
                                className='cursor-pointer'
                            >
                                <LuLogOut className='mr-2 size-4' />
                                Выйти
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                ) : (
                    <Link href='/auth'>Login</Link>
                )
            }
        </>
    )
}