import { Card, CardContent } from "@/shared/components";
import Image from 'next/image'
import { formatDate } from "@/shared/utils"

import styles from './previews.module.scss'
import { useGetPrivacy, useEducation, useExperience, useSkills, useLanguages, useHobbies } from "@/features/candidat/hooks";
import { useCourses } from "@/features/candidat/hooks/useCourses";
import { useGetLifeStatus } from "@/features/candidat/hooks/useLifeStatus"

export function PreviewsPortfolio() {
    const { privacy, isFetching: IFPrivacy } = useGetPrivacy()
    const { education } = useEducation()
    const { courses } = useCourses()
    const { experience } = useExperience()
    const { skills } = useSkills()
    const { languages } = useLanguages()
    const { hobbies } = useHobbies()
    const { lifestatus } = useGetLifeStatus()

    return (
        <Card>
            <CardContent>
                <div className={styles.wrapper}>
                    <div className="bg-gray-100 p-4 flex flex-col items-center">
                        <div className="bg-white shadow-md rounded-lg max-w-5xl w-full">

                            <div className="relative bg-gradient-to-r from-gray-700 to-gray-900 text-white p-6 rounded-t-lg">

                                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                                    <Image src={privacy!.avatar[0]} alt="Profile Picture" className="rounded-full border-4 border-white" fill />
                                </div>

                                <div className="text-center mt-16">
                                    <h1 className="text-3xl font-bold">CELESTE CASTANI</h1>
                                    <p className="text-gray-300">Sviluppatore Software</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 px-6 pb-6">

                                <div>
                                    <h2 className="text-xl font-semibold border-b-2 border-gray-200 pb-2">Profilo</h2>
                                    <p className="text-gray-600 mt-4">Sono uno sviluppatore software con solide competenze di risoluzione dei problemi...</p>
                                </div>

                                <div>
                                    <h2 className="text-xl font-semibold border-b-2 border-gray-200 pb-2">Competenze</h2>
                                    <ul className="list-disc list-inside text-gray-600 mt-4">
                                        <li>C#, ASP.NET, JavaScript, HTML/CSS, Python</li>
                                        <li>MVC, AngularJS, Bootstrap, Visual Studio</li>
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="text-xl font-semibold border-b-2 border-gray-200 pb-2">Esperienze Lavorative</h2>
                                    <div className="text-gray-600 mt-4">
                                        <p><strong>Ingegnere del software</strong> | Laboratori Mathica | Maggio 2020 - Presente</p>
                                        <ul className="list-disc list-inside mt-2">
                                            <li>Progettazione e creazione di soluzioni software...</li>
                                            <li>Modifica di codici per la soluzione di errori...</li>
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-xl font-semibold border-b-2 border-gray-200 pb-2">Istruzione</h2>
                                    <p className="text-gray-600 mt-4">Università Bocconi | Master in Scienze Informatiche</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>

                    {formatDate(privacy!.birthday)}
                    {privacy?.firstname} {privacy?.surname}
                    {privacy?.phone}
                    {privacy?.resident}
                    <hr />
                    {privacy!.about_my && <span dangerouslySetInnerHTML={{ __html: privacy!.about_my }}></span>}
                </div>
                <div>
                    {education?.map(item => item.school)}
                </div>
                <div>
                    {experience?.map(item => item.contract)}
                </div>
                <div>
                    {courses?.map(item => item.course)}
                </div>
                <div>
                    {languages?.map(item => item.language)}
                </div>
                <div>
                    {skills?.map(item => item.skill)}
                </div>
                <div>
                    {hobbies?.map(item => item.hobbie)}
                </div>
                <div>
                    {lifestatus?.availabilityTransport && 'I have car'}
                </div>
                <div>{lifestatus?.maritalStatus}</div>
                <div>{lifestatus?.driverCategory.map(patent => <span>{patent}</span>)}</div>
            </CardContent>
        </Card>
    )
}