'use client'

import { FC } from "react"
import { ICandidatFullData } from "../../types"
import Image from "next/image"
import { Button, Description, Heading } from "@/shared/components"
import { IoLocationSharp } from "react-icons/io5"
import { useAppSelector } from "@/shared/hooks"
import { RatingStars } from "@/features/rating/components/RatingStars"
import { UserRole } from "@/features/auth/types"
import { formatDate } from "@/shared/utils"
import { GiOrganigram } from "react-icons/gi"
import { LiaBirthdayCakeSolid } from "react-icons/lia"
import { MdOutlineLocalPhone, MdOutlineLocationOn, MdOutlineMarkEmailRead } from "react-icons/md"
import { useTranslations } from "next-intl"

export const CandidateFull: FC<ICandidatFullData> = ({
    avatar,
    about_my,
    firstname,
    surname,
    phone,
    birthday,
    user,
    skills,
    languages,
    hobbies,
    candidatLifeState,
    courses,
    createdAt,
    education,
    experience,
    jobContacts,
    resident
}) => {
    const t = useTranslations('contactsPage.candidatFullData')
    const authUser = useAppSelector(state => state.reducer.user.data)
    return (
        <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-4/6 md:p-5">
                <div className="w-full flex flex-col md:flex-row items-center justify-between gap-x-5">
                    <div className="shadow-2xl shadow-slate-700-500/50 dark:shadow-gray-300-100 w-[130px] rounded-3xl">
                        <Image src={avatar[0]} alt={firstname + surname} height={100} width={100} className="w-[100px] h-[100px] rounded-3xl" />
                    </div>
                    <div className="flext flex-col gap-2 w-full">
                        <div className="flex flex-col md:flex-row gap-3 items-end">
                            <Heading>{surname} {firstname}</Heading>
                            <small className="flex flex-row items-center"><IoLocationSharp /> {resident}</small>
                        </div>
                        <div className="flex flex-row gap-2 items-center">{education && education.map((edu, idx) => <small key={edu.school + idx} className="text-base">{edu.grade}</small>)}</div>
                        <div className="flex flex-row gap-2 items-center">
                            {authUser?.role === UserRole.Agency && <div className="rating me-1">
                                <RatingStars userId={user.id} reviewerId={authUser.id} />
                            </div>}
                        </div>
                        {candidatLifeState && <ul className="mt-3 flex flex-row gap-3 items-center">
                            {candidatLifeState.availabilityTransport && <li>
                                <span className="bg-[#e7eae2] dark:bg-opacity-20 rounded-full p-2 px-3 mb-1">
                                    {t('availabilityTransport')}
                                </span>
                            </li>}
                            {candidatLifeState.driverCategory && <li className="flex flex-row gap-1">
                                {candidatLifeState.driverCategory.map((patent) => (
                                    <span key={patent} className="bg-[#e7eae2] dark:bg-opacity-20 rounded-full p-2 px-4">
                                        {patent}
                                    </span>))}
                            </li>}
                            {candidatLifeState.maritalStatus && <li>
                                <span className="bg-[#e7eae2] dark:bg-opacity-20 rounded-full p-2 px-3 mb-1">
                                    {candidatLifeState.maritalStatus}
                                </span>
                            </li>}
                        </ul>}
                    </div>
                    <div className="">
                        <Button variant='outline'>{t('downloadCV')}</Button>
                    </div>
                </div>

                <div className="border-neutral-200 dark:border-neutral-800 border-t-2 border-dashed mt-5 pt-5">
                    <div className="">
                        <Heading className="border-b border-neutral-900/20 dark:border-neutral-800 border-dashed pb-2 inline-block p-3 mb-1">{t('aboutMy')}</Heading>
                        <Description>{about_my}</Description>
                    </div>
                    {skills.length > 0 && <div className="mt-10">
                        <Heading className="border-b border-neutral-900/20 dark:border-neutral-800 border-dashed pb-2 inline-block p-3">{t('skills')}</Heading>
                        <div className="grid grid-cols-3 gap-5">
                            {skills.map((skill, idx) => (
                                <div key={skill.skill + idx} className="flex flex-col gap-y-2 justify-start">
                                    <span className="text-sm">{skill.level}</span>
                                    <div className="text-xl font-semibold">
                                        {skill.skill}
                                    </div>
                                </div>))}
                        </div>
                    </div>}

                    {hobbies.length > 0 && <div className="mt-10">
                        <Heading className="border-b border-neutral-900/20 dark:border-neutral-800 border-dashed pb-2 inline-block p-3">{t('hobbies')}</Heading>
                        <div className="grid grid-cols-3 gap-5">
                            {hobbies.map((hobbie, idx) => (
                                <div key={hobbie.hobbie + idx} className="text-base">
                                    {hobbie.hobbie}
                                </div>))}
                        </div>
                    </div>}

                    {languages.length > 0 && <div className="mt-10">
                        <Heading className="border-b border-neutral-900/20 dark:border-neutral-800 border-dashed pb-2 inline-block p-3">{t('languages')}</Heading>
                        <div className="grid grid-cols-3 gap-5">
                            {languages.map((lang, idx) => (
                                <div key={lang.language + idx} className="text-base">
                                    {lang.language} - {lang.level}
                                </div>))}
                        </div>
                    </div>}

                    {experience.length > 0 && <div className="mt-10">
                        <Heading className="border-b border-neutral-900/20 dark:border-neutral-800 border-dashed pb-2 inline-block p-3">{t('experience')}</Heading>
                        <div className="flex flex-col gap-y-2 mt-3">
                            {experience.map((exp, idx) => (
                                <div key={exp.company + idx} className="">
                                    <span className="text-lg font-semibold">{exp.company}</span> / <span className="text-sm font-light">{formatDate(exp.endDate, { 'dateFormat': 'year' })} - {formatDate(exp.endDate, { 'dateFormat': 'year' })}</span>
                                </div>
                            ))}
                        </div>
                    </div>}

                    {(education.length > 0 || courses.length > 0) && <div className="w-full border border-solid border-neutral-900/20 dark:border-neutral-800 p-5 rounded-3xl mt-10">
                        <div className="grid grid-cols-2 lg:grid-rows-2 gap-5 h-full">
                            <div className="flex flex-col gap-y-2">
                                <Heading className="pb-2 inline-block p-3">{t('eduacation')}</Heading>
                                <ul className="list-disc flex flex-col gap-y-2 pl-7 text-[#335371] text-lg">
                                    {education && education.map((edu, idx) => (
                                        <li key={edu.school + idx}>{edu.grade} ({formatDate(edu.startdate, { 'dateFormat': 'year' })} - {formatDate(edu.enddate, { 'dateFormat': 'year' })})</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <Heading className="pb-2 inline-block p-3">{t('courses')}</Heading>
                                <ul className="list-disc flex flex-col gap-y-2 pl-7 text-[#335371] text-lg">
                                    {courses && courses.map((cours, idx) => (
                                        <li key={cours.institution + idx}>{cours.course} ({formatDate(cours.startdate, { 'dateFormat': 'year' })} - {formatDate(cours.enddate, { 'dateFormat': 'year' })})</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>}

                    <div className="mt-5 pt-5">
                        <Heading className="pb-2 inline-block p-3">{t('experienceStory')}</Heading>
                        <div className="flex flex-col gap-y-5">
                            {experience.length > 0 ? experience.map((exp, idx) => (
                                <div key={exp.company + idx} className="w-full border border-solid border-neutral-900/20 bg-white dark:bg-neutral-900 dark:border-neutral-800 p-5 rounded-3xl">
                                    <div className="flex flex-col flex-wrap md:flex-row items-center gap-7">
                                        <div className="flex flex-row gap-x-4 items-center">
                                            <div className="bg-white dark:bg-neutral-800 shadow-2xl shadow-slate-700-500/50 dark:shadow-gray-300-100 p-8 rounded-2xl inline-block"><GiOrganigram className="text-3xl" /></div>
                                            <div className="">
                                                <Heading>{exp.company}</Heading>
                                                <small className="flex flex-row items-center"><IoLocationSharp /> {exp.location}</small>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-y-3">
                                            <Heading>{exp.position ? exp.position : 'Details'}</Heading>
                                            <div className="mb-2">
                                                <span className="text-sm">{formatDate(exp.startDate, { 'locale': 'it', 'dateFormat': 'mm/yyyy' })} | {formatDate(exp.endDate, { 'locale': 'it', 'dateFormat': 'mm/yyyy' })}</span>
                                            </div>
                                            <div className="mb-2">
                                                <span className="rounded-full dark:bg-opacity-10 bg-[#dcf6fc] text-[#249ab2] py-2 px-3">{t('contractType')}</span>
                                            </div>
                                            <div className="mb-2">
                                                <span className="text-base">{exp.description}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )) : (
                                <div className="w-full border-t border-dashed border-neutral-900/20 dark:border-neutral-800 p-5">
                                    <div className="flex flex-col gap-y-2">
                                        <span className="text-base italic">Anchora devo creare la mia storia ...</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-full lg:w-2/6 p-5 bg-[#e7eae2] dark:bg-neutral-900 rounded-3xl">
                <div className="sidebar-list bg-grey p-4 rounded">
                    <div className="grid gap-y-4 bg-white dark:bg-neutral-800 dark:text-white p-4 rounded-3xl">
                        <h3 className="text-3xl">{t('contacts')}</h3>
                        <Image src="/map.jpg" alt="contact" height={152} width={305} className="rounded-3xl mb-2 w-full h-[152px]" />
                        <div className="info-address">
                            <ul>
                                <li className="border-b mb-1 py-2 flex flex-row gap-x-2 items-center">
                                    <MdOutlineLocationOn /> {resident}
                                </li>
                                <li className="border-b mb-1 py-2 flex flex-row gap-x-2 items-center">
                                    <MdOutlineLocalPhone /> {phone}
                                </li>
                                <li className="border-b mb-1 py-2 flex flex-row gap-x-2 items-center">
                                    <MdOutlineMarkEmailRead /> {user.email}
                                </li>
                                <li className="flex flex-row py-2 gap-x-2 items-center">
                                    <LiaBirthdayCakeSolid /> {formatDate(birthday, { dateFormat: 'dd/mm/yyyy' })}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}