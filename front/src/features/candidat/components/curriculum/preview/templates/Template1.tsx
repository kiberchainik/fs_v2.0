import { IPreviewTemplates } from "@/features/candidat/types/preview.type"
import { domainToSVG, formatDate } from "@/shared/utils"
import Image from "next/image"
import Link from "next/link"
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
    user, 
    socialLinks 
}: IPreviewTemplates) {
    return (
        <div className="border-1 shadow-lg shadow-gray-700 rounded-lg ">
            <div className="flex rounded-t-lg bg-sky-500 sm:px-2 w-full">
                <div className="h-40 w-40 overflow-hidden sm:rounded-full sm:relative sm:p-0 top-10 left-5 p-3">
                    <Image src={privacy!.avatar[0]} fill alt={`${privacy?.firstname} ${privacy?.surname}`} />
                </div>
                <div className="w-2/3 sm:text-center pl-5 mt-10 text-start">
                    <p className="font-poppins font-bold text-heading sm:text-4xl text-2xl">
                        {privacy?.firstname} {privacy?.surname}
                    </p>
                    <p className="text-heading">Software Engineer</p>
                </div>
            </div>
            <div className="p-5">
                <div className="flex flex-col sm:flex-row sm:mt-10">
                    <div className="flex flex-col sm:w-1/3">
                        <div className="py-3 sm:order-none order-3">
                            <h2 className="text-lg font-poppins font-bold text-sky-600">My Contact</h2>
                            <div className="border-2 w-20 border-sky-600 my-3"></div>
                            <div className='text-sm'>
                                {socialLinks && (
                                    <div className='flex gap-2'>
                                        {socialLinks.map(social => (
                                            <Link href={social.socialLink} target="_blank">
                                                <span className='text-sm' dangerouslySetInnerHTML={{ __html: domainToSVG(social.socialLink) }} key={social.socialLink}></span>
                                            </Link>
                                        ))}
                                    </div>)}
                                <div className="flex items-center my-1">
                                    <span className="w-6 text-gray-700 hover:text-orange-600">
                                        <CiGift />
                                    </span>
                                    <div className="ml-2 truncate">{formatDate(privacy!.birthday)}</div>
                                </div>
                                <div className="flex items-center my-1">
                                    <span className="w-6 text-gray-700 hover:text-orange-600">
                                        <CiAt />
                                    </span>
                                    <div className="ml-2 truncate">{user?.email}</div>
                                </div>
                                <div className="flex items-center my-1">
                                    <span className="w-6 text-gray-700 hover:text-orange-600">
                                        <CiMobile3 />
                                    </span>
                                    <div>{privacy?.phone}</div>
                                </div>
                                <div className="flex items-center my-1">
                                    <span className="w-6 text-gray-700 hover:text-orange-600">
                                        <CiLocationOn />
                                    </span>
                                    <div>{privacy?.resident}</div>
                                </div>
                            </div>
                        </div>
                        {languages && <div className="py-3 sm:order-none order-2">
                            <h2 className="text-lg font-poppins font-bold text-sky-600">Languages</h2>
                            <div className="border-2 w-20 border-sky-600 my-3"></div>
                            <div className='text-sm'>
                                {languages.map(lang => (
                                    <div className="flex items-center my-1" key={lang.id}>
                                        <div className="ml-2">{lang.language} - {lang.level}</div>
                                    </div>
                                ))}
                            </div>
                        </div>}
                        {skills && <div className="py-3 sm:order-none order-2">
                            <h2 className="text-lg font-poppins font-bold text-sky-600">Skills</h2>
                            <div className="border-2 w-20 border-sky-600 my-3"></div>
                            <div className='text-sm'>
                                {skills.map(skill => (
                                    <div className="flex items-center my-1" key={skill.id}>
                                        <div className="ml-2">{skill.skill} - {skill.level}</div>
                                    </div>
                                ))}
                            </div>
                        </div>}
                        {hobbies && <div className="py-3 sm:order-none order-2">
                            <h2 className="text-lg font-poppins font-bold text-sky-600">Hobbie</h2>
                            <div className="border-2 w-20 border-sky-600 my-3"></div>
                            <div>
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
                            <h2 className="text-lg font-poppins font-bold text-sky-600">About Me</h2>
                            <div className="border-2 w-20 border-sky-600 my-3"></div>
                            <div className='text-sm'>
                                <span>{lifestatus?.maritalStatus && lifestatus.maritalStatus}</span> / <span>{lifestatus?.driverCategory && lifestatus.driverCategory.map(patent => <p>Category: {patent.toLocaleUpperCase()}</p>)}</span> / <span>{lifestatus?.availabilityTransport && 'I have my car'}</span>
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: privacy!.about_my }}></div>
                        </div>
                        {education && <div className="py-3">
                            <h2 className="text-lg font-poppins font-bold text-sky-600">Educazione</h2>
                            <div className="border-2 w-20 border-sky-600 my-3"></div>
                            <div className="flex flex-col">
                                {education.map(item => (
                                    <div className="flex flex-col" key={item.id}>
                                        <p className="text-lg font-bold text-gray-700">{item.school}</p>
                                        <p className="font-semibold text-sm text-gray-700">
                                            {formatDate(item.startdate, { dateFormat: 'year' })} - {formatDate(item.enddate, { dateFormat: 'year' })}
                                        </p>
                                        <p className="font-semibold text-sm text-gray-700 mt-2 mb-1">
                                            <span className="text-green-700">{item.grade}</span>, {item.school}
                                        </p>
                                        {item.description && <p className="font-semibold text-sm text-gray-700 mt-2 mb-1">{item.description}</p>}
                                    </div>
                                ))}
                            </div>
                        </div>}
                        {courses && <div className="py-3">
                            <h2 className="text-lg font-poppins font-bold text-sky-600">Corse</h2>
                            <div className="border-2 w-20 border-sky-600 my-3"></div>
                            <div className="flex flex-col">
                                {courses.map(item => (
                                    <div className="flex flex-col" key={item.id}>
                                        <p className="font-semibold text-sm text-gray-700">
                                            {formatDate(item.startdate, { dateFormat: 'year' })} - {formatDate(item.enddate, { dateFormat: 'year' })}
                                        </p>
                                        <p className="font-semibold text-sm text-gray-700 mt-2 mb-1">
                                            <span className="text-green-700">{item.course}</span>, {item.institution}
                                        </p>
                                        {item.grade && <p className="font-bold text-xs text-gray-700 mb-2">{item.grade}</p>}
                                    </div>
                                ))}
                            </div>
                        </div>}
                        {experience && <div className="py-3">
                            <h2 className="text-lg font-poppins font-bold text-sky-600">Professional Experience</h2>
                            <div className="border-2 w-20 border-sky-600 my-3"></div>
                            <div className="flex flex-col">
                                {experience.map(item => (
                                    <div className="flex flex-col" key={item.id}>
                                        <p className="text-lg font-bold text-gray-700">{item.company}, {item.contractTypeJob?.name}</p>
                                        <p className="font-semibold text-sm text-gray-700">
                                            {formatDate(item.startDate, { dateFormat: 'year' })} - {
                                                item.currently ? 'Currently work' : formatDate(item.endDate, { dateFormat: 'year' })
                                            }
                                        </p>
                                        {item.description && <p className="font-semibold text-sm text-gray-700 mt-2 mb-1">{item.description}</p>}
                                    </div>
                                ))}
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}