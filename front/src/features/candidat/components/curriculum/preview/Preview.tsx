'use client'

import { useGetPrivacy, useEducation, useExperience, useSkills, useLanguages, useHobbies, useSocial } from "@/features/candidat/hooks";
import { useCourses } from "@/features/candidat/hooks/useCourses";
import { useGetLifeStatus } from "@/features/candidat/hooks/useLifeStatus"
import { useAppSelector } from '@/shared/hooks';

import Template1 from './templates/Template1';
import Template2 from "./templates/Template2";
import Template3 from "./templates/Template3";
import Spinner from "@/shared/components/Spinner/Spinner"
import dynamic from "next/dynamic";

export default function PreviewsPortfolio() {
    const PDFwithPdfMake = dynamic(() => import("./pdf/ResumePDF"), { ssr: false });
    const { data: user, isLoading, error } = useAppSelector(state => state.reducer.user)
    const { privacy, isFetching } = useGetPrivacy()
    const { education } = useEducation()
    const { courses } = useCourses()
    const { experience } = useExperience()
    const { skills } = useSkills()
    const { languages } = useLanguages()
    const { hobbies } = useHobbies()
    const { lifestatus } = useGetLifeStatus()
    const { socialLinks } = useSocial()

    if (isFetching) return <div><Spinner /></div>

    return (
        <div className="">
            <PDFwithPdfMake
                email={user?.email!}
                privacy={privacy!}
                education={education!}
                courses={courses!}
                experience={experience!}
                skills={skills!}
                languages={languages!}
                hobbies={hobbies!}
                lifestatus={lifestatus!}
                socialLinks={socialLinks}
            />

            <Template3
                email={user?.email!}
                privacy={privacy!}
                education={education!}
                courses={courses!}
                experience={experience!}
                skills={skills!}
                languages={languages!}
                hobbies={hobbies!}
                lifestatus={lifestatus!}
                socialLinks={socialLinks}
            />
        </div>
    )
}