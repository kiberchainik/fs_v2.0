import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { useGetProfile, useLogoutMutation } from "../hooks";
import { Avatar, AvatarFallback, AvatarImage, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, Skeleton } from "@/shared/components/ui";
import { LuLogOut } from "react-icons/lu";
import { IUser } from "@/features/auth/types";

interface UserButtonProps { 
    user:IUser
    isLoading:boolean
}

export function UserButton ({user, isLoading}:UserButtonProps) {
    const {logout, isLoader} = useLogoutMutation()

    if(!user) return null

    return <DropdownMenu>
        <DropdownMenuTrigger>
            <Avatar>
                <AvatarImage src={user.picture} />
                <AvatarFallback>
                    {user.displayName.slice(0, 1)}
                </AvatarFallback>
            </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-40' align='end'>
            <DropdownMenuItem disabled={isLoading} onClick={() => logout()}>
                <LuLogOut className='mr-2 size-4' /> Logout
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
}

export function UserButtonLoading() {
    return <Skeleton className='h-10 w-10 rounded-full' />
}