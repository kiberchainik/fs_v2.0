import { IPreviewTemplates } from "@/features/candidat/types/preview.type";
import { formatDate } from "@/shared/utils";
import Image from "next/image";

export default function Template2({ privacy, courses, education, experience, hobbies, languages, lifestatus, skills, user }: IPreviewTemplates) {
    return (
        <div className="container mx-auto py-8">
            <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                <div className="col-span-4 sm:col-span-3">
                    <div className="bg-white shadow rounded-lg p-6">
                        <div className="flex flex-col items-center">
                            <Image src={user.avatar![0]} alt={`${privacy.firstname}`} fill className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0" />
                            <h1 className="text-xl font-bold">{privacy.firstname} {privacy.surname}</h1>
                            <p className="text-gray-700">Software Developer</p>
                            <div className="mt-6 flex flex-wrap gap-4 justify-center">
                                <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Contact</a>
                                <a href="#" className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded">Resume</a>
                            </div>
                        </div>
                        <div className="my-6 border-t border-gray-300">
                            <p>{lifestatus?.maritalStatus && lifestatus.maritalStatus}</p>
                            <p>{lifestatus?.driverCategory && lifestatus.driverCategory.map(patent => <p>Category: {patent.toLocaleUpperCase()}</p>)}</p>
                            <p>{lifestatus?.availabilityTransport && 'I have my car'}</p>
                            <div className="my-6 border-t border-gray-300">
                                <div className="flex flex-col">
                                    <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">Skills</span>
                                    <ul>
                                        {skills && skills.map(skill => (
                                            <li className="mb-2">{skill.skill}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">Languages</span>
                                    <ul>
                                        {languages && languages.map(lang => (
                                            <li className="mb-2">{lang.language}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">Hobbies</span>
                                    <ul>
                                        {hobbies && hobbies.map(hobbie => (
                                            <li className="mb-2">{hobbie.hobbie}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-4 sm:col-span-9">
                    <div className="bg-white shadow rounded-lg p-6">
                        <h2 className="text-xl font-bold mb-4">About Me</h2>
                        <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: privacy!.about_my }}></p>

                        <h3 className="font-semibold text-center mt-3 -mb-2">
                            Find me on
                        </h3>
                        <div className="flex justify-center items-center gap-6 my-6">
                            <a className="text-gray-700 hover:text-orange-600" aria-label="Visit TrendyMinds LinkedIn" href=""
                                target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-6">
                                    <path fill="currentColor"
                                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                                    </path>
                                </svg>
                            </a>
                            <a className="text-gray-700 hover:text-orange-600" aria-label="Visit TrendyMinds Twitter" href=""
                                target="_blank">
                                <svg className="h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="currentColor"
                                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                                    </path>
                                </svg>
                            </a>
                        </div>
                        <h2 className="text-xl font-bold mt-6 mb-4">Education</h2>
                        {education && education.map(item => (
                            <div className="mb-6">
                                <div className="flex justify-between flex-wrap gap-2 w-full">
                                    <span className="text-gray-700 font-bold">{item.degree}</span>
                                    <p>
                                        <span className="text-gray-700 mr-2">at {item.school}</span>
                                        <span className="text-gray-700">{formatDate(item.startdate, { dateFormat: 'year' })} - {formatDate(item.enddate, { dateFormat: 'year' })}</span>
                                    </p>
                                </div>
                                {item.grade && <p className="mt-2">{item.grade}</p>}
                                {item.description && <p className="mt-2">{item.description}</p>}
                            </div>
                        ))}
                        <h2 className="text-xl font-bold mt-6 mb-4">Experience</h2>
                        {experience && experience.map(item => (
                            <div className="mb-6">
                                <div className="flex justify-between flex-wrap gap-2 w-full">
                                    <span className="text-gray-700 font-bold">{item.company}</span>
                                    <p>
                                        <span className="text-gray-700 mr-2">at {item.contract}</span>
                                        <span className="text-gray-700">{formatDate(item.startDate, { dateFormat: 'year' })} - {
                                            item.currently ? 'Current work' : formatDate(item.endDate, { dateFormat: 'year' })
                                        }</span>
                                    </p>
                                </div>
                                {item.location && <p className="mt-2">{item.location}</p>}
                                {item.description && <p className="mt-2">{item.description}</p>}
                            </div>
                        ))}
                        <h2 className="text-xl font-bold mt-6 mb-4">Courses</h2>
                        {courses && courses.map(course => (
                            <div className="mb-6">
                                <div className="flex justify-between flex-wrap gap-2 w-full">
                                    <span className="text-gray-700 font-bold">{course.course}</span>
                                    <p>
                                        <span className="text-gray-700 mr-2">at {course.institution}</span>
                                        <span className="text-gray-700">{formatDate(course.startdate, { dateFormat: 'year' })} - {formatDate(course.enddate, { dateFormat: 'year' })}</span>
                                    </p>
                                </div>
                                {course.grade && <p className="mt-2">{course.grade}</p>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}