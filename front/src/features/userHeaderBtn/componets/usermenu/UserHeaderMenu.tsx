'use client'

import { FC } from "react"
import { Avatar, AvatarImage, AvatarFallback } from "@/shared/components/ui";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/shared/components/ui";
import { LuLayoutDashboard, LuLogOut } from "react-icons/lu"
import { useLogoutMutation, useGetUserHeaderData } from "../../hooks";
import { useRouter } from "next/navigation";

export const UserHeaderMenu:FC = () => {
    const router = useRouter()
    const {user, error} = useGetUserHeaderData()
    const {isLoader, logout} = useLogoutMutation()

    if(error || !user) return null

    return (<DropdownMenu>
        <DropdownMenuTrigger>
            <Avatar>
                <AvatarImage src='/public/not-avatar.png' />
                <AvatarFallback>
                    {user.avatar || user.email.slice(0, 1)}
                </AvatarFallback>
            </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-40' align='end'>
            <DropdownMenuItem onClick={() => router.push('/dashboard')} className='cursor-pointer'>
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
    </DropdownMenu>)
}