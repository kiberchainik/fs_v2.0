'use client'

import { FC } from "react";
import { IUserMenuHeaderData } from "../../types/userMenuData.type";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/shared/components/ui"
import { Avatar, AvatarImage, AvatarFallback } from "@/shared/components/ui"
import { IoIosLogOut } from "react-icons/io"
import { useRouter } from "next/navigation"
import { useLogoutMutation } from "../../hooks"
import { HeaderUserMenu } from "@/shared/config"
import { UserRole } from "@/features/auth/types";
import { cn } from "@/shared/utils";

export const UserMenu: FC<IUserMenuHeaderData> = ({ email, role, avatar, name }) => {
    const router = useRouter()
    const { isLoader, logout } = useLogoutMutation()
    const userMenu = HeaderUserMenu(role)

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className={role === UserRole.Candidat ? 'flex flex-row items-center gap-x-2 border rounded-full w-28' : ''}>
                <Avatar>
                    <AvatarImage src={avatar && avatar[0]} />
                    <AvatarFallback>{email.slice(0, 1)}</AvatarFallback>
                </Avatar>
                {role === UserRole.Candidat && <span className="font-semibold tracking-tight">Crea Cv</span>}
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-full' align='end'>
                <div className='flex flex-row p-3 gap-3'>
                    <div className=''>
                        <Avatar>
                            <AvatarImage src={avatar && avatar[0]} />
                            <AvatarFallback>{email.slice(0, 1)}</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className='flex flex-col text-sm'>
                        {name && <span>{name}</span>}
                        {email && <span>{email}</span>}
                    </div>
                </div>
                <hr />
                {userMenu.map(item => {
                    const Icon = item.icon
                    return (<DropdownMenuItem key={item.href} onClick={() => router.push(item.href)} className='cursor-pointer'>
                        {Icon && <Icon className='size-6 pr-1' />} {item.title}
                    </DropdownMenuItem>)
                })}
                <DropdownMenuItem
                    disabled={isLoader}
                    onClick={() => logout()}
                    className='cursor-pointer'
                >
                    <IoIosLogOut className='mr-2 size-4' /> Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}