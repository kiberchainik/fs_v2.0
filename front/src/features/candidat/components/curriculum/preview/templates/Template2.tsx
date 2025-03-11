import { IPreviewTemplates } from "@/features/candidat/types/preview.type";
import { Description } from "@/shared/components";
import { formatDate } from "@/shared/utils";
import Image from "next/image";

export default function Template2({ privacy, courses, education, experience, hobbies, languages, lifestatus, skills, user }: IPreviewTemplates) {
    return (
        <div className="flex flex-row gap-2">
            <div className="w-2/6">
                <div className="bg-white shadow rounded-lg p-2">
                    <div className="flex flex-col items-center">
                        <Image src={user.avatar![0]} alt={`${privacy.firstname}`} height={80} width={80} className="w-10 h-10 bg-gray-300 rounded-full mb-4 shrink-0" />
                        <h1 className="text-xs font-bold">{privacy.firstname} {privacy.surname}</h1>
                        <p className="text-gray-700 text-[8px]">{education.map(item => <span key={item.id}>{item.description}</span>)}</p>
                    </div>
                    <div className="my-2 pt-1 border-dashed border-gray-400 text-[7px]">
                        <p>{lifestatus?.maritalStatus && lifestatus.maritalStatus}</p>
                        <p>{lifestatus?.driverCategory && lifestatus.driverCategory.map(patent => <p>Category: {patent.toLocaleUpperCase()}</p>)}</p>
                        <p>{lifestatus?.availabilityTransport && 'I have my car'}</p>
                        <div className="my-2 border-t border-gray-300">
                            {skills.length > 0 && <div className="mt-1">
                                <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">Skills</span>
                                <ul className="flex flex-col gap-1">
                                    {skills.map(skill => (
                                        <li>{skill.skill}</li>
                                    ))}
                                </ul>
                            </div>}
                            {languages.length > 0 && <div className="mt-1">
                                <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">Languages</span>
                                <ul className="flex flex-col gap-1">
                                    {languages.map(lang => (
                                        <li>{lang.language}</li>
                                    ))}
                                </ul>
                            </div>}
                            {hobbies.length > 0 && <div className="mt-1">
                                <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">Hobbies</span>
                                <ul className="flex flex-col gap-1">
                                    {hobbies.map(hobbie => (
                                        <li>{hobbie.hobbie}</li>
                                    ))}
                                </ul>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-4/6">
                <div className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-xs font-bold mb-2">About Me</h2>
                    <Description className="text-[7px]">{privacy!.about_my}</Description>

                    {education.length > 0 && <>
                        <h2 className="text-xs font-bold mt-2 mb-1">Education</h2>
                        {education.map(item => (
                            <div className="mb-2 text-[7px] text-gray-700">
                                <div className="flex flex-col gap-1">
                                    <p><span className="">{item.grade} at {item.school}</span></p>
                                    <p><span className="">{formatDate(item.startdate, { dateFormat: 'year' })} - {formatDate(item.enddate, { dateFormat: 'year' })}</span></p>
                                </div>
                                {item.description && <p className="mt-1">{item.description}</p>}
                            </div>
                        ))}
                    </>}
                    {experience.length > 0 && <>
                        <h2 className="text-xs font-bold mt-2 mb-1">Experience</h2>
                        {experience.map(item => (
                            <div className="mb-2 text-[7px] text-gray-700">
                                <div className="flex flex-col gap-1">
                                    <span className="font-bold">{item.company}</span>
                                    <p>
                                        <span className="mr-2">{item.contractTypeJob?.name}</span>
                                        <span className="">{formatDate(item.startDate, { dateFormat: 'year' })} - {
                                            item.currently ? 'Current work' : formatDate(item.endDate, { dateFormat: 'year' })
                                        }</span>
                                    </p>
                                </div>
                                {item.location && <p className="">{item.location}</p>}
                                {item.description && <p className="">{item.description}</p>}
                            </div>
                        ))}
                    </>
                    }
                    {courses.length > 0 && <>
                        <h2 className="text-xl font-bold mt-6 mb-4">Courses</h2>
                        {courses.map(course => (
                            <div className="mb-2 text-[7px] text-gray-700">
                                <div className="flex flex-col gap-1">
                                    <span className="font-bold">{course.course}</span>
                                    <p>
                                        <span className="">{course.institution}</span>
                                        <span className="">{formatDate(course.startdate, { dateFormat: 'year' })} - {formatDate(course.enddate, { dateFormat: 'year' })}</span>
                                    </p>
                                </div>
                                {course.grade && <p className="">{course.grade}</p>}
                            </div>
                        ))}
                    </>
                    }
                </div>
            </div>
        </div>
    )
}