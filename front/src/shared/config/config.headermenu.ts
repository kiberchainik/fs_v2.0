import { UserRole } from "@/features/auth/types"
import { IconType } from "react-icons"
import { IoIosPerson, IoIosContact , IoIosGitBranch, IoIosMegaphone, IoMdDesktop } from "react-icons/io"

interface MenuItems {
    icon: IconType
    href: string
    title: string
}

//export function HeaderUserMenu(role: UserRole): MenuItems[] {
    export const HeaderUserMenu = (role:UserRole):MenuItems[] => {
        return role === UserRole.Agency ? [
            {
                icon: IoMdDesktop,
                href: '/agency',
                title: 'Dashboard'
            },
            {
                icon: IoIosContact,
                href: '/agency/profile',
                title: 'Profile'
            },
            {
                icon: IoIosGitBranch,
                href: '/agency/add-branch',
                title: 'New branch'
            },
            {
                icon: IoIosMegaphone ,
                href: '/agency/create-vacancy',
                title: 'Create vacancy'
            },
            {
                icon: IoIosPerson,
                href: '/agency/favorites',
                title: 'Workers favorites'
            }
        ] : [
            {
                icon: IoIosPerson,
                href: '/candidat/edit-profile',
                title: 'Profile'
            }
        ]
    }
//}