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
                        <div className="flex flex-row gap-2 items-center">{education && education.map(edu => <small className="text-base">{edu.grade}</small>)}</div>
                        <div className="flex flex-row gap-2 items-center">
                            {authUser?.role === UserRole.Agency && <div className="rating me-1">
                                <RatingStars userId={user.id} reviewerId={authUser.id} />
                            </div>}
                        </div>
                        <ul className="mt-3 flex flex-row gap-3 items-center">
                            {candidatLifeState.availabilityTransport && <li>
                                <span className="bg-[#e7eae2] dark:bg-opacity-20 rounded-full p-2 px-3 mb-1">
                                    Automunito
                                </span>
                            </li>}
                            {candidatLifeState.driverCategory && <li className="flex flex-row gap-1">
                                {candidatLifeState.driverCategory.map((patent) => (
                                    <span className="bg-[#e7eae2] dark:bg-opacity-20 rounded-full p-2 px-4">
                                        {patent}
                                    </span>))}
                            </li>}
                            {candidatLifeState.maritalStatus && <li>
                                <span className="bg-[#e7eae2] dark:bg-opacity-20 rounded-full p-2 px-3 mb-1">
                                    {candidatLifeState.maritalStatus}
                                </span>
                            </li>}
                        </ul>
                    </div>
                    <div className="">
                        <Button variant='outline'>Download CV</Button>
                    </div>
                </div>

                <div className="border-neutral-200 dark:border-neutral-800 border-t-2 border-dashed mt-5 pt-5">
                    <div className="">
                        <Heading className="border-b border-neutral-900/20 dark:border-neutral-800 border-dashed pb-2 inline-block p-3 mb-1">Su di me...</Heading>
                        <Description>{about_my}</Description>
                    </div>
                    {skills.length > 0 && <div className="mt-10">
                        <Heading className="border-b border-neutral-900/20 dark:border-neutral-800 border-dashed pb-2 inline-block p-3">Professional skills...</Heading>
                        <div className="grid grid-cols-3 gap-5">
                            {skills.map(skill => (
                                <div key={skill.skill} className="flex flex-col gap-y-2 justify-start">
                                    <span className="text-sm">{skill.level}</span>
                                    <div className="text-xl font-semibold">
                                        {skill.skill}
                                    </div>
                                </div>))}
                        </div>
                    </div>}

                    {hobbies.length > 0 && <div className="mt-10">
                        <Heading className="border-b border-neutral-900/20 dark:border-neutral-800 border-dashed pb-2 inline-block p-3">Hobbies...</Heading>
                        <div className="grid grid-cols-3 gap-5">
                            {hobbies.map(hobbie => (
                                <div key={hobbie.hobbie} className="text-base">
                                    {hobbie.hobbie}
                                </div>))}
                        </div>
                    </div>}

                    {experience.length > 0 && <div className="mt-10">
                        <Heading className="border-b border-neutral-900/20 dark:border-neutral-800 border-dashed pb-2 inline-block p-3">Mia esperienza...</Heading>
                        <div className="flex flex-col gap-y-2 mt-3">
                            {experience.map(exp => (
                                <div key={exp.company} className="">
                                    <span className="text-lg font-semibold">{exp.company}</span> / <span className="text-sm font-light">{formatDate(exp.endDate, { 'dateFormat': 'year' })} - {formatDate(exp.endDate, { 'dateFormat': 'year' })}</span>
                                </div>
                            ))}
                        </div>
                    </div>}

                    {(education.length > 0 || courses.length > 0) && <div className="w-full border border-solid border-neutral-900/20 dark:border-neutral-800 p-5 rounded-3xl mt-10">
                        <div className="grid grid-cols-2 lg:grid-rows-2 gap-5 h-full">
                            <div className="flex flex-col gap-y-2">
                                <Heading className="pb-2 inline-block p-3">Educazione...</Heading>
                                <ul className="list-disc flex flex-col gap-y-2 pl-7 text-[#335371] text-lg">
                                    {education && education.map(edu => (
                                        <li>{edu.grade} ({formatDate(edu.startdate, { 'dateFormat': 'year' })} - {formatDate(edu.enddate, { 'dateFormat': 'year' })})</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <Heading className="pb-2 inline-block p-3">Corsi...</Heading>
                                <ul className="list-disc flex flex-col gap-y-2 pl-7 text-[#335371] text-lg">
                                    {courses && courses.map(cours => (
                                        <li>{cours.course} ({formatDate(cours.startdate, { 'dateFormat': 'year' })} - {formatDate(cours.enddate, { 'dateFormat': 'year' })})</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>}

                    <div className="mt-5 pt-5">
                        <Heading className="pb-2 inline-block p-3">La storia di esperienza</Heading>
                        <div className="flex flex-col gap-y-5">
                            {experience.length > 0 && experience.map((exp) => (
                                <div className="w-full border border-solid border-neutral-900/20 bg-white dark:bg-neutral-900 dark:border-neutral-800 p-5 rounded-3xl">
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
                                                <span className="rounded-full dark:bg-opacity-10 bg-[#dcf6fc] text-[#249ab2] py-2 px-3">Contract type</span>
                                            </div>
                                            <div className="mb-2">
                                                <span className="text-base">{exp.description}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-full lg:w-2/6 p-5 bg-[#e7eae2] dark:bg-[#484841] rounded-3xl">
                <div className="sidebar-list bg-grey p-4 rounded">
                    <div className="job-information bg-white p-4 rounded mb-4">
                        <h4 className="mb-2">Overview</h4>
                        <ul className="job-information-list">
                            <li className="d-block border-b mb-2 pb-2">
                                <i className="fa fa-calendar"></i> Date Posted
                                <span className="float-end"> 28th Jun</span>
                            </li>
                            <li className="d-block border-b mb-2 pb-2">
                                <i className="fa fa-redo"></i> Expiration Date
                                <span className="float-end"> 12th Dec</span>
                            </li>

                            <li className="d-block border-b mb-2 pb-2">
                                <i className="fa fa-map-marker"></i> Location
                                <span className="float-end"> Dallas, Texas</span>
                            </li>

                            <li className="d-block border-b mb-2 pb-2">
                                <i className="fa fa-money-check"></i> Salary
                                <span className="float-end">$35k - $45k</span>
                            </li>

                            <li className="d-block border-b mb-2 pb-2">
                                <i className="fa fa-layer-group"></i> Experience
                                <span className="float-end">2+ Years</span>
                            </li>

                            <li className="d-block">
                                <i className="fa fa-user-graduate"></i> Qualification
                                <span className="float-end">Master Degree</span>
                            </li>
                        </ul>
                    </div>

                    <div className="sidebar-contact bg-white p-4 rounded">
                        <h4 className="small-heading">Contact Info</h4>
                        <Image src="/map.jpg" alt="contact" height={152} width={305} className="rounded-3xl mb-2 w-[305px] h-[152px]" />
                        <div className="info-address">
                            <ul>
                                <li className="d-block border-b mb-1 pb-1">
                                    <i className="fa fa-map-marker me-1"></i> Campbell Kent, Utah 53127 UnitedStates
                                </li>
                                <li className="d-block border-b mb-1 pb-1">
                                    <i className="fa fa-phone me-1"></i> (+91) - 540-025-124553
                                </li>
                                <li className="d-block border-b mb-1 pb-1">
                                    <i className="fa fa-envelope me-1"></i> contact@Jobee.com
                                </li>
                                <li className="d-block ">
                                    <i className="fa fa-clock me-1"></i> 10:00 - 18:00, Mon - Sat
                                </li>
                            </ul>
                        </div>
                        <a href="#" className="job-btn btn1 mt-2 d-inline-block">Contact Me</a>
                    </div>
                </div>
            </div>
        </div>
    )
}