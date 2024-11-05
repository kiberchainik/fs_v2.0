import { UserRole } from "@/features/auth/types"
import { IconType } from "react-icons"
import { CiDesktop, CiHeart, CiPalette, CiUser } from "react-icons/ci"
import { PiGitBranchThin } from "react-icons/pi"
import { AGENCY_DROPDOWN_URL, CANDIDAT_DROPDOWN_URL } from "./config.url"

export interface MenuItems {
    icon?: IconType
    href: string
    title: string
}

export const headerMainMenu = ():MenuItems[] => {
    return [
        {
            href: '/vacancy',
            title: 'Job offers'
        },
        {
            href: '/candidats',
            title: 'Candidats'
        },
        {
            href: '/about-us',
            title: 'About us'
        },
        {
            href: '/contacts',
            title: 'Contacts'
        }
    ]
}

export const HeaderUserMenu = (role:UserRole):MenuItems[] => {
    return role === UserRole.Agency ? [
        {
            icon: CiDesktop,
            href: AGENCY_DROPDOWN_URL.dashboard(),
            title: 'Dashboard'
        },
        {
            icon: CiUser,
            href: AGENCY_DROPDOWN_URL.profile(),
            title: 'Profile'
        },
        {
            icon: PiGitBranchThin,
            href: AGENCY_DROPDOWN_URL.branch('create'),
            title: 'New branch'
        },
        {
            icon: CiPalette ,
            href: AGENCY_DROPDOWN_URL.vacancy('create'),
            title: 'Create vacancy'
        },
        {
            icon: CiHeart,
            href: AGENCY_DROPDOWN_URL.favorites(),
            title: 'Workers favorites'
        }
    ] : [
        {
            icon: CiDesktop,
            href: CANDIDAT_DROPDOWN_URL.dashboard(),
            title: 'Profile'
        },
        {
            icon: CiUser,
            href: CANDIDAT_DROPDOWN_URL.profile(),
            title: 'Profile'
        }
    ]
}