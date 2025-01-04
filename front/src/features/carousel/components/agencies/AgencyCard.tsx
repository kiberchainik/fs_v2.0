import { FC } from "react"
import { ICarouselAgencies, ICarouselCandidate } from "../../types/carousel.type"
import { Button, CarouselItem } from "@/shared/components"
import Image from "next/image"
import Link from "next/link"
import { MAIN_URL } from "@/shared/config"

export const CandidatCard: FC<ICarouselAgencies> = ({ agency_name, logo, slug, user, url }) => {
    return (
        <CarouselItem key={slug}>
            <div className="flex flex-col items-center gap-y-2">
                <Image src={logo[0]} alt={agency_name} fill className="w-24 h-24 rounded-full" />
                <div className="flex flex-col items-center gap-y-2">
                    <span className="text-lg font-bold">{agency_name}</span>
                    <span className="text-sm">{user.email}</span>
                    <div className="flex gap-x-2">
                        <Button>
                            <Link href={MAIN_URL.agencyPageInfo(slug)}>All vacancies</Link>
                        </Button>
                        <Button variant='link'>
                            <Link href={url}>Agency website</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </CarouselItem>
    )
}