import { UserRole } from "@/features/auth/types"
import { IconType } from "react-icons"
import { IoIosPerson, IoIosContact , IoIosGitBranch, IoIosMegaphone, IoMdDesktop } from "react-icons/io"
import { AGENCY_DROPDOWN_URL, AGENCY_URL, CANDIDAT_DROPDOWN_URL } from "./config.url"

interface MenuItems {
    icon: IconType
    href: string
    title: string
}


export const HeaderUserMenu = (role:UserRole):MenuItems[] => {
    return role === UserRole.Agency ? [
        {
            icon: IoMdDesktop,
            href: AGENCY_DROPDOWN_URL.dashboard(),
            title: 'Dashboard'
        },
        {
            icon: IoIosContact,
            href: AGENCY_DROPDOWN_URL.profile(),
            title: 'Profile'
        },
        {
            icon: IoIosGitBranch,
            href: AGENCY_DROPDOWN_URL.branch('create'),
            title: 'New branch'
        },
        {
            icon: IoIosMegaphone ,
            href: AGENCY_DROPDOWN_URL.vacancy('create'),
            title: 'Create vacancy'
        },
        {
            icon: IoIosPerson,
            href: AGENCY_DROPDOWN_URL.favorites(),
            title: 'Workers favorites'
        }
    ] : [
        {
            icon: IoIosPerson,
            href: CANDIDAT_DROPDOWN_URL.dashboard(),
            title: 'Profile'
        },
        {
            icon: IoIosPerson,
            href: CANDIDAT_DROPDOWN_URL.profile(),
            title: 'Profile'
        }
    ]
}