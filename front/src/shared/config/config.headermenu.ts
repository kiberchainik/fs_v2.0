import { UserRole } from "@/features/auth/types"
import { IconType } from "react-icons"
import { CiDesktop, CiHeart, CiLocationArrow1, CiMemoPad, CiPalette, CiUser } from "react-icons/ci"
import { PiGitBranchThin } from "react-icons/pi"
import { AGENCY_DROPDOWN_URL, CANDIDAT_DROPDOWN_URL, MAIN_URL } from "./config.url"
import { useTranslations } from "next-intl"

export interface MenuItems {
    icon?: IconType
    href: string
    title: string
}

export const headerMainMenu = (): MenuItems[] => {
    const header_menu = useTranslations('header.header_menu')

    return [
        {
            href: MAIN_URL.home(),
            title: header_menu('home')
        },
        {
            href: MAIN_URL.categories(),
            title: header_menu('categories')
        },
        {
            href: MAIN_URL.candidats(),
            title: header_menu('candidats')
        },
        {
            href: MAIN_URL.about(),
            title: header_menu('about')
        },
        {
            href: MAIN_URL.contacts(),
            title: header_menu('contacts')
        }
    ]
}

export const HeaderUserMenu = (role: UserRole): MenuItems[] => {
    const account_header_btns = useTranslations('header.account_header_btns')
    return role === UserRole.Agency ? [
        {
            icon: CiDesktop,
            href: AGENCY_DROPDOWN_URL.dashboard(),
            title: account_header_btns('dashboard')
        },
        {
            icon: CiUser,
            href: AGENCY_DROPDOWN_URL.profile(),
            title: account_header_btns('profile')
        },
        {
            icon: PiGitBranchThin,
            href: AGENCY_DROPDOWN_URL.branch(),
            title: account_header_btns('branch')
        },
        {
            icon: PiGitBranchThin,
            href: AGENCY_DROPDOWN_URL.branch('create'),
            title: account_header_btns('new_branch')
        },
        {
            icon: CiPalette,
            href: AGENCY_DROPDOWN_URL.vacancy(),
            title: account_header_btns('vacancy')
        },
        {
            icon: CiPalette,
            href: AGENCY_DROPDOWN_URL.vacancy('create'),
            title: account_header_btns('new_vacancy')
        },
        {
            icon: CiHeart,
            href: AGENCY_DROPDOWN_URL.favorites(),
            title: account_header_btns('favorites')
        }
    ] : [
        {
            icon: CiDesktop,
            href: CANDIDAT_DROPDOWN_URL.dashboard(),
            title: account_header_btns('profile')
        },
        {
            icon: CiUser,
            href: CANDIDAT_DROPDOWN_URL.privacy(),
            title: account_header_btns('privacy')
        },
        {
            icon: CiMemoPad,
            href: CANDIDAT_DROPDOWN_URL.portfolio(),
            title: account_header_btns('portfolio')
        },
        {
            icon: CiHeart,
            href: CANDIDAT_DROPDOWN_URL.savedJobs(),
            title: account_header_btns('savedJobs')
        },
        {
            icon: CiLocationArrow1,
            href: CANDIDAT_DROPDOWN_URL.sendetCandidatura(),
            title: account_header_btns('sendetCandidatura')
        }
    ]
}