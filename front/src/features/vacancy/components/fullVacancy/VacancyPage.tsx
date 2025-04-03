'use client'

import { IVacanciaesFullDate } from "@/features/agency/vacancy/types"
import { formatDate, generatePostUrl } from "@/shared/utils"
import { useAppSelector } from "@/shared/hooks"
import Link from "next/link"
import Image from "next/image"
import { Heading } from "@/shared/components"
import { UserRole } from "@/features/auth/types"
import { CandidateBtns } from "../candidatBtns/CandidateBtns"
import { useEffect, useState } from "react"

import { IoCalendarClear, IoLocationSharp, IoMailSharp } from "react-icons/io5"
import { FaFileContract, FaLayerGroup, FaPhone, FaRedo, FaUserGraduate } from "react-icons/fa"
import { CiFacebook, CiLinkedin, CiRead, CiTwitter } from "react-icons/ci"
import { GiTakeMyMoney } from "react-icons/gi"
import { GrUserWorker } from "react-icons/gr"
import { IoIosTime } from "react-icons/io"

import styles from './vacancyPage.module.scss'
import { MAIN_URL } from "@/shared/config"
import { Description, Button } from "@/shared/components"
import { useTranslations } from "next-intl"

export default function VacancyPage({
  id,
  title,
  description,
  views,
  createdAt,
  reallyUpTo,
  categories,
  agency,
  branchId,
  branch,
  contractType,
  experienceMinimalJob,
  levelEducation,
  modeJob,
  workingTimeJob,
  breadcrumbs,
  savedBy,
  sendCandidature: curriculum,
  location,
  salary
}: IVacanciaesFullDate) {
  const t = useTranslations('vacancy_page')
  const authUser = useAppSelector(state => state.reducer.user.data)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true);
  }, []);

  const author = {
    slug: branchId ? branch.id : agency.slug,
    name: branchId ? branch.name : agency.agency_name,
    location: branchId ? branch.location : agency.address,
    logo: branchId ? branch.logo : agency.logo,
    email: branchId ? branch.email : agency.user.email,
    phone: branchId ? branch.phone : agency.phone,
  }

  return (
    <>
      <section className="flex flex-col lg:flex-row gap-5">
        <div className="w-full lg:w-3/5 bg-white dark:bg-neutral-900 rounded-3xl p-10 text-slate-800 dark:text-white">
          <div className="mb-5 border-b-2 border-dashed border-slate-200">
            <div className="flex flex-row justify-between items-center">
              <div className="mb-2">
                <Heading className={styles.title}>{title}</Heading>
                <div className="flex flex-row gap-x-2 items-center align-middle text-sm"><span><CiRead /></span> {views}</div>
              </div>
            </div>
          </div>
          <div className="mb-2">
            {isClient && (
              <div className="prose max-w-none text-slate-400"><Description>{description}</Description></div>
            )}
          </div>
          <div className='flex flex-col 2xl:flex-row w-full gap-3 pt-3 border-t border-dashed border-neutral-200'>
            <div className="flex flex-wrap items-center gap-2">
              {authUser?.role !== UserRole.Agency &&
                <div className={styles.favoriteCandidat}>
                  <CandidateBtns jobId={id!} authUser={authUser!} curriculum={curriculum!} savedBy={savedBy!} />
                </div>
              }
              <Button variant='outline'>
                <Link href={generatePostUrl(categories)}>Altre offerte</Link>
              </Button>
            </div>
            <div className="mb-2">
              <div className="flex gap-x-2 items-center">
                <div className="pr-2">Share This:</div>
                <Button variant="outline" className="text-lg px-[0.65rem]"><CiFacebook /></Button>
                <Button variant="outline" className="text-lg px-[0.65rem]"><CiTwitter /></Button>
                <Button variant="outline" className="text-lg px-[0.65rem]"><CiLinkedin /></Button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/5 bg-[#e7eae2] dark:bg-[#484841] rounded-3xl">
          <div className="bg-grey p-5 rounded">
            <div className="flex flex-row items-center gap-x-5 mb-4">
              <Image src={author.logo[0]} alt={author.name} height={50} width={50} className="h-[50px] w-[50px]" />
              <div className="">
                <h4 className="text-2xl"><Link href={MAIN_URL.agencyPageInfo(agency.slug)}>{author.name}</Link></h4>
                <small className="text-sm">{author.location}</small>
              </div>
            </div>
            <div className="job-information border-t mt-2 bg-white dark:bg-neutral-800 p-4 rounded-3xl mb-4">
              <ul className="job-information-list">
                <li className="border-dashed border-b mb-2 py-2 flex flex-row gap-x-3 items-center justify-between">
                  <span className="flex gap-x-2 items-center"><IoCalendarClear /> Date Posted</span>
                  <span> {formatDate(createdAt)}</span>
                </li>
                {reallyUpTo && <li className="border-dashed border-b mb-2 py-2 flex flex-row gap-x-3 items-center justify-between">
                  <span className="flex gap-x-2 items-center"><FaRedo /> Expiration Date</span>
                  <span> {formatDate(reallyUpTo)}</span>
                </li>}

                <li className="border-dashed border-b mb-2 py-2 flex flex-row gap-x-3 items-center justify-between">
                  <span className="flex gap-x-2 items-center"><IoLocationSharp /> Location</span>
                  <span> {location}</span>
                </li>

                {experienceMinimalJob && <li className="border-dashed border-b mb-2 py-2 flex flex-row gap-x-3 items-center justify-between">
                  <span className="flex gap-x-2 items-center"><FaLayerGroup /> Experience</span>
                  <span>{experienceMinimalJob.name}</span>
                </li>}

                {levelEducation && <li className="border-dashed border-b mb-2 py-2 flex flex-row gap-x-3 items-center justify-between">
                  <span className="flex gap-x-2 items-center"><FaUserGraduate /> Qualification</span>
                  <span>{levelEducation.name}</span>
                </li>}

                {salary !== 0 && <li className="border-dashed border-b mb-2 py-2 flex flex-row gap-x-3 items-center justify-between">
                  <span className="flex gap-x-2 items-center"><GiTakeMyMoney /> Contract type</span>
                  <span>{salary}</span>
                </li>}

                {contractType && <li className="border-dashed border-b mb-2 py-2 flex flex-row gap-x-3 items-center justify-between">
                  <span className="flex gap-x-2 items-center"><FaFileContract /> Contract type</span>
                  <span>{contractType.name}</span>
                </li>}

                {modeJob && <li className="border-dashed border-b mb-2 py-2 flex flex-row gap-x-3 items-center justify-between">
                  <span className="flex gap-x-2 items-center"><GrUserWorker /> Mode job</span>
                  <span>{modeJob.name}</span>
                </li>}

                {workingTimeJob && <li className="border-dashed border-b mb-2 py-2 flex flex-row gap-x-3 items-center justify-between">
                  <span className="flex gap-x-2 items-center"><IoIosTime /> Working time</span>
                  <span>{workingTimeJob.name}</span>
                </li>}
              </ul>
            </div>
            <div className="sidebar-contact bg-white dark:bg-neutral-800 p-4 rounded-3xl">
              <h4 className="text-2xl mb-2">Contact Info</h4>
              <Image src="/map.jpg" alt="map" height={152} width={305} className="rounded-2xl mb-2 w-[305px] h-[152px]" />
              <div className="info-address">
                <ul>
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
        </div>
      </section>
    </>
  )
}