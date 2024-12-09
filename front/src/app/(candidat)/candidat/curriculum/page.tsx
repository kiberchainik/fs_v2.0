import Courses from "@/features/candidat/components/courses/Courses";
import Education from "@/features/candidat/components/education/Education";
import Experience from "@/features/candidat/components/experience/Experience";
import Hobbies from "@/features/candidat/components/hobbies/Hobbies";
import Languages from "@/features/candidat/components/languages/Languages";
import LifeStatus from "@/features/candidat/components/life-status/LifeStatus";
import { PreviewsPortfolio } from "@/features/candidat/components/preview/Preview";
import Skills from "@/features/candidat/components/skills/Skills";

export default function CandidatPage() {
    return (
        <div className='flex flex-col md:flex-row gap-x-5 justify-between items-center mt-10 w-full px-10'>
            <div className='grid gap-y-3 md:w-8/12 w-full'>
                <LifeStatus />
                <Education />
                <Experience />
                <Courses />
                <Languages />
                <Hobbies />
                <Skills />
            </div>
            <div className='w-full'>
                <PreviewsPortfolio />
            </div>
        </div>
    );
}