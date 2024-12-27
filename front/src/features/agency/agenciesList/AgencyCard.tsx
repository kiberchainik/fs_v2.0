'use client'

import Image from "next/image"
import { TAgencyCard } from "../profile/types/agensy.type"
import { formatDate } from "@/shared/utils"
import { FC } from "react"
import Link from "next/link"
import { Button } from "@/shared/components"
import { MAIN_URL } from "@/shared/config"

export const AgencyCard: FC<TAgencyCard> = ({ about, address, agency_name, createdAt, logo, phone, slug, user }) => {
    return (
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl overflow-hidden transform transition duration-500 hover:scale-105">
            <div className="relative">
                <Image className="w-full h-64 object-cover !relative" src={logo[0]} fill alt={agency_name} />
                <div className="absolute bottom-0 right-0 bg-primary text-white px-2 py-1 m-2 rounded-md text-sm font-semibold">
                    {address}
                </div>
            </div>
            <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">{agency_name}</h2>
                <p className="text-gray-600 mb-4">{about}</p>
                <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-gray-800">{formatDate(createdAt)}</span>
                    <Button>
                        <Link href={MAIN_URL.agencyPageInfo(slug)} className="px-4 py-2 text-white font-semibold">
                            View
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}