import { IPreviewTemplates } from "@/features/candidat/types/preview.type";
import { Description } from "@/shared/components";
import { formatDate } from "@/shared/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { GrMapLocation } from "react-icons/gr"
import { MdOutlineLocalPhone, MdOutlineMailOutline } from "react-icons/md"

export default function Template3({ privacy, courses, education, experience, hobbies, languages, lifestatus, skills, user }: IPreviewTemplates) {
    const t = useTranslations('curriculum.previews')
    return (<>
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="bg-gray-100 p-3 text-left dark:bg-gray-900 md:col-span-4 h-auto w-full">
                    <h1 className="leading-tighter mt-5 text-sm font-extrabold lg:text-sm">
                        {privacy.firstname}<br />
                        {privacy.surname}
                    </h1>
                    <h2 className="mt-2 text-[7px] text-purple-600 dark:text-purple-500 flex flex-row flex-wrap gap-1">
                        {education.length > 0 && education.map(ed => <span key={ed.id}>{ed.grade}</span>)}
                    </h2>
                    <div className="-mx-5 mt-10 w-32 h-32">
                        <Image
                            height={128}
                            width={128}
                            src={privacy.avatar[0]}
                            className="inline-block w-full h-full"
                            alt={privacy.firstname}
                        />
                    </div>
                    <Description className="text-[7px] mt-5 text-balance leading-relaxed text-gray-700 dark:text-gray-300">{privacy!.about_my}</Description>
                    <div className="mt-4 space-y-1 text-[7px]">
                        <div className="flex items-center gap-1">
                            <GrMapLocation className="inline-block size-3 flex-none text-purple-600 dark:text-purple-500" />
                            <span className="font-medium">{privacy.resident}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <MdOutlineLocalPhone className="inline-block size-3 flex-none text-purple-600 dark:text-purple-500" />
                            <span className="font-medium">{privacy.phone}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <MdOutlineMailOutline className="inline-block size-3 flex-none text-purple-600 dark:text-purple-500" />
                            <span className="font-medium truncate">{user.email}</span>
                        </div>
                    </div>
                </div>
                <div className="mx-auto max-w-2xl space-y-6 p-5 md:col-span-8">
                    {education.length > 0 && <div>
                        <div className="mb-4 border-b-2 border-gray-100 py-2.5 dark:border-gray-900">
                            <h3 className="text-sm font-medium">{t('education')}</h3>
                        </div>
                        <ul className="relative space-y-6 pl-6 before:absolute before:bottom-0 before:left-0 before:top-0 before:block before:w-1 before:rounded-full before:bg-purple-50 before:content-[''] dark:before:bg-purple-950">
                            {education.map(ed => (<li key={ed.id} className="before:border-1 relative before:absolute before:-left-[1.875rem] before:top-6 before:block before:size-4 before:rounded-full before:border-2 before:border-purple-200/75 before:bg-white before:content-[''] dark:before:border-purple-800/75 dark:before:bg-gray-950">
                                <h4 className="text-xs font-semibold text-purple-600 dark:text-purple-500">
                                    {formatDate(ed.startdate, { dateFormat: 'year' })}-{formatDate(ed.enddate, { dateFormat: 'year' })}
                                </h4>
                                <h5 className="mb-2 font-bold text-xs">
                                    {ed.school}
                                </h5>
                                <div className="text-[10px] text-gray-700 dark:text-gray-300 flex flex-col">
                                    <span>{ed.grade}</span>
                                    <span>{ed.description}</span>
                                </div>
                            </li>))}
                        </ul>
                    </div>}
                    {experience.length > 0 && <div>
                        <div className="border-b-4 border-gray-100 py-2.5 dark:border-gray-900">
                            <h3 className="text-sm font-medium">{t('experience')}</h3>
                        </div>
                        <ul className="relative space-y-6 pl-6 before:absolute before:bottom-0 before:left-0 before:top-0 before:block before:w-1 before:rounded-full before:bg-purple-50 before:content-[''] dark:before:bg-purple-950">
                            {experience.map(exp => (<li key={exp.id} className="before:border-1 relative before:absolute before:-left-[1.875rem] before:top-6 before:block before:size-4 before:rounded-full before:border-2 before:border-purple-200/75 before:bg-white before:content-[''] dark:before:border-purple-800/75 dark:before:bg-gray-950">
                                <h4 className="text-xs font-semibold text-purple-600 dark:text-purple-500">
                                    {formatDate(exp.startDate, { dateFormat: 'mm/yyyy' })} - {
                                        exp.currently ? t('currently_work') : formatDate(exp.endDate, { dateFormat: 'mm/yyyy' })
                                    }
                                </h4>
                                <h5 className="mb-2 font-bold text-xs">
                                    {exp.company}
                                </h5>
                                <div className="text-[10px] text-gray-700 dark:text-gray-300">
                                    {exp.description}
                                </div>
                            </li>))}
                        </ul>
                    </div>}
                    {courses.length > 0 && <div>
                        <div className="border-b-4 border-gray-100 py-2.5 dark:border-gray-900">
                            <h3 className="text-sm font-medium">{t('courses')}</h3>
                        </div>
                        <ul className="relative space-y-6 pl-6 before:absolute before:bottom-0 before:left-0 before:top-0 before:block before:w-1 before:rounded-full before:bg-purple-50 before:content-[''] dark:before:bg-purple-950">
                            {courses.map(course => (<li key={course.id} className="before:border-1 relative before:absolute before:-left-[1.875rem] before:top-6 before:block before:size-4 before:rounded-full before:border-2 before:border-purple-200/75 before:bg-white before:content-[''] dark:before:border-purple-800/75 dark:before:bg-gray-950">
                                <h4 className="text-xs font-semibold text-purple-600 dark:text-purple-500">
                                    {formatDate(course.startdate, { dateFormat: 'year' })} - {formatDate(course.enddate, { dateFormat: 'year' })}
                                </h4>
                                <h5 className="mb-2 font-bold text-xs">
                                    {course.institution}
                                </h5>
                                <div className="text-[10px] text-gray-700 dark:text-gray-300">
                                    {course.grade && <p className="">{course.grade}</p>}
                                </div>
                            </li>))}
                        </ul>
                    </div>}
                </div>
            </div>
        </div>
    </>)
}