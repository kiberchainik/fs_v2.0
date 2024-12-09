'use client'

import { Card, CardContent } from "@/shared/components";
import { useEducation, useExperience, useGetPrivacy, useHobbies, useLanguages, useSkills } from "../../hooks";
import { useCourses } from "../../hooks/useCourses";
import { useGetLifeStatus } from "../../hooks/useLifeStatus";
import Image from 'next/image'
import { formatDate } from "@/shared/utils";

export function PreviewsPortfolio() {
    const { education, isFetching: IFEducation } = useEducation()
    const { experience, isFetching: IFExperience } = useExperience()
    const { courses, isFetching: IFCourses } = useCourses()
    const { languages, isFetching: IFLanguages } = useLanguages()
    const { skills, isFetching: IFSkills } = useSkills()
    const { hobbies, isFetching: IFHobbies } = useHobbies()
    const { lifestatus, isFetching: IFLifeState } = useGetLifeStatus()
    const { privacy, isFetching: IFPrivacy } = useGetPrivacy()

    return (
        <Card>
            <CardContent>
                <div>
                    <Image src={privacy?.avatar[0]!} alt='Картинка' fill />
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