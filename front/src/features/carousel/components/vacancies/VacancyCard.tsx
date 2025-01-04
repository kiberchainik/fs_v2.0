import { FC } from "react"
import { ICarouselJobs } from "../../types/carousel.type"
import { Button, Card, CarouselItem } from "@/shared/components"
import Link from "next/link"
import { formatDate, generatePostUrl } from "@/shared/utils"
import { CiRead } from "react-icons/ci"

export const CandidatCard: FC<ICarouselJobs> = ({ categories, createdAt, slug, title, views }) => {
    return (
        <CarouselItem className="md:basis-1/2 lg:basis-1/5">
            <Card>
                <div className="flex flex-col items-center gap-y-2">
                    <div className="flex flex-col items-center gap-y-2">
                        <div className="flex gap-x-2">
                            <Button variant='link'>
                                <Link href={generatePostUrl(categories, slug)}>{title}</Link>
                            </Button>
                        </div>
                        <span className="text-sm">{formatDate(createdAt)}</span>
                        <span className="flex gap-x-1 items-center"><CiRead /> {views}</span>
                    </div>
                </div>
            </Card>
        </CarouselItem>
    )
}