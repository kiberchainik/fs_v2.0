'use client'

import { FC } from "react";
import { IUserMenuHeaderData } from "../../types/userMenuData.type";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/shared/components/ui";
import { Avatar, AvatarImage, AvatarFallback } from "@/shared/components/ui";
import { LuLayoutDashboard, LuLogOut } from "react-icons/lu"
import { useRouter } from "next/navigation";
import { useLogoutMutation } from "../../hooks";

export const UserMenu:FC<IUserMenuHeaderData> = ({email, isVerified, role, avatar, name}) => {
    const router = useRouter()
    const {isLoader, logout} = useLogoutMutation()
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar>
                    <AvatarImage src={avatar} />
                    <AvatarFallback>{ email.slice(0, 1) }</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-40' align='end'>
                <DropdownMenuItem onClick={() => router.push(`/${role.toLowerCase()}/profile`)} className='cursor-pointer'>
                    <LuLayoutDashboard className='mr-2 size-4' /> Profile
                </DropdownMenuItem>
                <DropdownMenuItem
                    disabled={isLoader}
                    onClick={() => logout()}
                    className='cursor-pointer'
                >
                    <LuLogOut className='mr-2 size-4' /> Выйти
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}