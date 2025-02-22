import { FC } from "react"
import { ICarouselAgencies } from "../../types/carousel.type"
import { Button, Description } from "@/shared/components"
import Image from "next/image"
import Link from "next/link"
import { MAIN_URL } from "@/shared/config"

export const AgencyCard: FC<ICarouselAgencies> = ({ agency_name, logo, slug, user, url, about }) => {
    return (
        <div className="flex flex-col items-center gap-y-3 bg-white dark:bg-neutral-800 p-5 rounded-3xl w-[350px] h-full">
            <div className="bg-white dark:bg-neutral-800 p-5 shadow-2xl shadow-slate-700-500/20 dark:shadow-gray-300-100 rounded-2xl">
                <Image src={logo[0]} alt={agency_name} width={32} height={32} className="h-8 w-8" />
            </div>
            <div className="flex flex-col items-center gap-y-4">
                <span className="text-lg font-bold"><Link href={MAIN_URL.agencyPageInfo(slug)}>{agency_name}</Link></span>
                <span className="text-sm dark:text-[#335371]">{user.email}</span>
                <span className="text-center text-base dark:text-[#335371]">
                    <Description>{about}</Description>
                </span>
                <div className="flex gap-x-2 pt-5 border-t border-dashed border-[#ccc]/50 w-full justify-between">
                    <Button>
                        <Link href={MAIN_URL.agencyPageInfo(slug)}>Tutte offerte</Link>
                    </Button>
                    <Button variant='link'>
                        <Link href={url} target="_blank">Agency website</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}