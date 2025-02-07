import { FC } from "react"
import { ICarouselJobs } from "../../types/carousel.type"
import { Button, Card, CarouselItem, Description } from "@/shared/components"
import Link from "next/link"
import { formatDate, generatePostUrl } from "@/shared/utils"
import Image from "next/image"

export const VacancyCard: FC<ICarouselJobs> = ({ categories, createdAt, slug, title, views, agency, description }) => {
    return (
        <CarouselItem className="md:basis-1/2 lg:basis-1/5">
            <div className='break-inside relative overflow-hidden flex flex-col justify-between space-y-3 text-sm rounded-xl max-w-[23rem] p-4 mb-4 bg-white text-black dark:bg-slate-800 dark:text-white'>
                <div className='flex items-center justify-between font-medium'>
                    <span className='uppercase text-xs text-[#335371]'>{agency.agency_name}</span>
                    <span className='text-xs text-slate-500'>{formatDate(createdAt)}</span>
                </div>
                <div className='flex flex-row items-center space-x-3'>
                    <div className='flex flex-none items-center justify-center w-14 h-14 rounded-full bg-white p-5 shadow-2xl shadow-slate-700-500/20'>
                        <Image src={agency.logo[0]} alt={agency.agency_name} width={28} height={28} className="h-7 max-w-7" />
                    </div>
                    <span className='text-base font-medium'>{title}</span>
                </div>
                <div><Description>{description.substring(0, 100) + '...'}</Description></div>
                <div className='flex justify-between items-center'>
                    <button className='flex items-center justify-center text-xs font-medium rounded-full px-4 py-1 space-x-1 border-2 border-black bg-white hover:bg-black hover:text-white text-black dark:bg-slate-800 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black'>
                        <Link href={generatePostUrl(categories, slug)} className="flex items-center justify-center space-x-1">
                            <span>Leggi di piu</span>
                            <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
                                <path d='M5 12h13M12 5l7 7-7 7' />
                            </svg>
                        </Link>
                    </button>
                </div>
            </div>
        </CarouselItem>
    )
}