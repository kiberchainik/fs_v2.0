import { IPreviewTemplates } from "@/features/candidat/types/preview.type"
import { formatDate } from "@/shared/utils"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { CiAt, CiGift, CiLocationOn, CiMobile3 } from "react-icons/ci"

export default function Template1({
    privacy,
    courses,
    education,
    experience,
    hobbies,
    languages,
    lifestatus,
    skills,
    user
}: IPreviewTemplates) {
    const t = useTranslations('curriculum.previews')
    return (
        <>
            <div id="resume-preview" className="border-1 shadow-lg shadow-gray-700 rounded-lg ">
                <div className="flex rounded-t-lg bg-sky-500 sm:px-2 w-full">
                    <div className="h-20 w-32 overflow-hidden rounded-full sm:relative sm:p-0 top-16 left-2 p-3">
                        <Image src={privacy!.avatar[0]} fill alt={`${privacy?.firstname} ${privacy?.surname}`} />
                    </div>
                    <div className="sm:text-center pl-5 mt-5 text-start">
                        <p className="font-poppins font-bold text-heading sm:text-xl text-xs">
                            {privacy?.firstname} {privacy?.surname}
                        </p>
                        <p className="text-[10px] flex gap-x-2 pb-2">{education.map(item => <span key={item.id}>{item.description}</span>)}</p>
                    </div>
                </div>
                <div className="p-5">
                    <div className="flex flex-col sm:flex-row mt-5 gap-3">
                        <div className="flex flex-col sm:w-1/3">
                            <div className="sm:order-none order-3">
                                <h2 className="text-sm font-poppins font-bold text-sky-600">{t('contacts')}</h2>
                                <div className="border-b w-20 border-sky-600 mb-2 pb-1"></div>
                                <div className='text-[7px] grid gap-y-1'>
                                    <div className="flex flex-row gap-x-1 items-center">
                                        <span><CiGift /></span>
                                        <span>{formatDate(privacy!.birthday)}</span>
                                    </div>
                                    <div className="flex flex-row gap-x-1 items-center">
                                        <span><CiAt /></span>
                                        <span>{user?.email}</span>
                                    </div>
                                    <div className="flex flex-row gap-x-1 items-center">
                                        <span><CiMobile3 /></span>
                                        <span>{privacy?.phone}</span>
                                    </div>
                                    <div className="flex flex-row gap-x-1 items-center">
                                        <span><CiLocationOn /></span>
                                        <span>{privacy?.resident}</span>
                                    </div>
                                </div>
                            </div>
                            {languages.length > 0 && <div className="py-3 sm:order-none order-2">
                                <h2 className="text-sm font-poppins font-bold text-sky-600">{t('languages')}</h2>
                                <div className="border-b w-20 border-sky-600 mb-2 pb-1"></div>
                                <div className='text-[7px] grid gap-y-1'>
                                    {languages.map(lang => (
                                        <div className="flex items-center my-1" key={lang.id}>
                                            <span className="ml-2">{lang.language} - {lang.level}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>}
                            {skills.length > 0 && <div className="py-3 sm:order-none order-2">
                                <h2 className="text-sm font-poppins font-bold text-sky-600">{t('skills')}</h2>
                                <div className="border-b w-20 border-sky-600 mb-2 pb-1"></div>
                                <div className='text-[7px] grid gap-y-1'>
                                    {skills.map(skill => (
                                        <div className="flex items-center my-1" key={skill.id}>
                                            <div className="ml-2">{skill.skill} - {skill.level}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>}
                            {hobbies.length > 0 && <div className="py-3 sm:order-none order-2">
                                <h2 className="text-sm font-poppins font-bold text-sky-600">{t('hobbies')}</h2>
                                <div className="border-b w-20 border-sky-600 mb-2 pb-1"></div>
                                <div className='text-[7px] grid gap-y-1'>
                                    {hobbies.map(hobbie => (
                                        <div className="flex items-center my-1" key={hobbie.id}>
                                            <div className="ml-2">{hobbie.hobbie}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>}
                        </div>
                        <div className="flex flex-col sm:w-2/3 order-first sm:order-none sm:-mt-10">
                            <div className="py-3">
                                <h2 className="text-sm font-poppins font-bold text-sky-600">
                                    {t('about_me')}
                                </h2>
                                <div className="border-b w-20 border-sky-600 mb-2 pb-1"></div>
                                <div className='text-[8px] flex flex-col gap-y-1 mb-1'>
                                    <span>{lifestatus?.maritalStatus && lifestatus.maritalStatus}</span><span>{lifestatus?.driverCategory && lifestatus.driverCategory.map(patent => <p>{t('driver_category')}: {patent.toLocaleUpperCase()}</p>)}</span><span>{lifestatus?.availabilityTransport && t('have_auto')}</span>
                                </div>
                                <div className="text-[8px]" dangerouslySetInnerHTML={{ __html: privacy!.about_my }}></div>
                            </div>
                            {education.length > 0 && <div className="py-3">
                                <h2 className="text-sm font-poppins font-bold text-sky-600">{t('education')}</h2>
                                <div className="border-b w-20 border-sky-600 mb-2 pb-1"></div>
                                <div className="flex flex-col text-[8px] gap-y-2">
                                    {education.map(item => (
                                        <div className="flex flex-col gap-y-1" key={item.id}>
                                            <span className="font-semibold text-gray-700">
                                                {formatDate(item.startdate, { dateFormat: 'year' })} - {formatDate(item.enddate, { dateFormat: 'year' })}
                                            </span>
                                            <span className="font-semibold text-gray-700">
                                                <span className="text-green-700">{item.grade}</span>, {item.school}
                                            </span>
                                            {item.description && <span className="font-semibold text-gray-700">{item.description}</span>}
                                        </div>
                                    ))}
                                </div>
                            </div>}
                            {courses.length > 0 && <div className="py-3">
                                <h2 className="text-sm font-poppins font-bold text-sky-600">{t('courses')}</h2>
                                <div className="border-b w-20 border-sky-600"></div>
                                <div className="flex flex-col text-[8px] gap-y-2">
                                    {courses.map(item => (
                                        <div className="flex flex-col gap-y-1" key={item.id}>
                                            <span className="font-semibold text-gray-700">
                                                {formatDate(item.startdate, { dateFormat: 'year' })} - {formatDate(item.enddate, { dateFormat: 'year' })}
                                            </span>
                                            <span className="font-semibold text-gray-700">
                                                <span className="text-green-700">{item.course}</span>, {item.institution}
                                            </span>
                                            {item.grade && <p className="text-gray-700">{item.grade}</p>}
                                        </div>
                                    ))}
                                </div>
                            </div>}
                            {experience.length > 0 && <div className="py-3">
                                <h2 className="text-sm font-poppins font-bold text-sky-600">{t('experience')}</h2>
                                <div className="border-b w-20 border-sky-600"></div>
                                <div className="flex flex-col text-[8px] gap-y-2">
                                    {experience.map(item => (
                                        <div className="flex flex-col gap-y-1" key={item.id}>
                                            <span className="font-bold text-gray-700">{item.company}, {item.contractTypeJob?.name}</span>
                                            <span className="font-semibold text-gray-700">
                                                {formatDate(item.startDate, { dateFormat: 'mm/yyyy' })} - {
                                                    item.currently ? t('currently_work') : formatDate(item.endDate, { dateFormat: 'mm/yyyy' })
                                                }
                                            </span>
                                            {item.description && <span className="text-gray-700">{item.description}</span>}
                                        </div>
                                    ))}
                                </div>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}