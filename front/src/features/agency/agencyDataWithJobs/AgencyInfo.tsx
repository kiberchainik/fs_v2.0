import { FaPhone } from "react-icons/fa"
import { IoLocationSharp, IoMailSharp } from "react-icons/io5"
import Image from "next/image"
import { FC } from "react"
import { TAgencyCard } from "../profile/types/agensy.type"
import { CiMenuBurger } from "react-icons/ci"
import { useTranslations } from "next-intl"

type VacanciesProps = {
    vacancies: number
    agency: TAgencyCard
}

export const AgencyInfo: FC<VacanciesProps> = ({ agency, vacancies }: VacanciesProps) => {
    const t = useTranslations('agency.agencyFullDate')
    return (
        <div>
            <div className="sidebar-contact bg-white dark:bg-neutral-800 p-4 rounded-3xl">
                <h4 className="text-2xl mb-2">{t('contactInfo')}</h4>
                <Image src="/map.jpg" alt="map" height={152} width={305} className="rounded-2xl mb-2 w-[305px] h-[152px]" />
                <div className="info-address">
                    <ul>
                        <li className="border-dashed border-b mb-2 py-2 flex flex-row gap-x-3 items-center">
                            <CiMenuBurger />{t('vacancies')} {vacancies}
                        </li>
                        <li className="border-dashed border-b mb-2 py-2 flex flex-row gap-x-3 items-center">
                            <IoLocationSharp /> {agency.address}
                        </li>
                        <li className="border-dashed border-b mb-2 py-2 flex flex-row gap-x-3 items-center">
                            <FaPhone /> {agency.phone}
                        </li>
                        <li className="border-dashed border-b mb-2 py-2 flex flex-row gap-x-3 items-center">
                            <IoMailSharp /> {agency.user.email}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}