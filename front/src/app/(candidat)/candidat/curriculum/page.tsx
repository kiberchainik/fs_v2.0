import { CandidatSettings } from "@/features/candidat/components";
import Courses from "@/features/candidat/components/courses/Courses";
import Education from "@/features/candidat/components/education/Education";
import Experience from "@/features/candidat/components/experience/Experience";
import Hobbies from "@/features/candidat/components/hobbies/Hobbies";
import Languages from "@/features/candidat/components/languages/Languages";
import Skills from "@/features/candidat/components/skills/Skills";

export default function CandidatPage() {
    return (
        <div className='flex flex-col md:flex-row gap-x-5 justify-center items-center mt-10 w-full'>
            <div className='grid gap-y-3 md:w-8/12 w-full'>
                <Education />
                <Experience />
                <Hobbies />
                <Skills />
                <Languages />
                <Courses />
            </div>
            <div className='w-full'>
                Previews resume
            </div>
        </div>
    );
}