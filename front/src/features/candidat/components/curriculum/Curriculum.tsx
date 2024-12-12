'use client'

import { Languages } from "lucide-react";
import Courses from "./courses/Courses";
import Education from "./education/Education";
import Experience from "./experience/Experience";
import Hobbies from "./hobbies/Hobbies";
import LifeStatus from "./life-status/LifeStatus";
import { PreviewsPortfolio } from "./preview/Preview";
import Skills from "./skills/Skills"

export function Curriculum() {
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
    )
}