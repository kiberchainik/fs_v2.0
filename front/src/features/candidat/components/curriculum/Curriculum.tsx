'use client'

import Courses from "./courses/Courses";
import Education from "./education/Education";
import Experience from "./experience/Experience";
import Hobbies from "./hobbies/Hobbies";
import LifeStatus from "./life-status/LifeStatus";
import PreviewsPortfolio from "./preview/Preview";
import Skills from "./skills/Skills"
import Languages from "./languages/Languages";
import Social from "./social/Social";

export function Curriculum() {
    return (
        <div className='flex flex-col md:flex-row gap-x-5 justify-between mt-10 w-full px-10'>
            <div className='grid gap-y-3 md:w-8/12 w-full'>
                <LifeStatus />
                <Education />
                <Experience />
                <Courses />
                <Languages />
                <Hobbies />
                <Skills />
                <Social />
            </div>
            <div className='w-full h-full flex'>
                <div className='sticky top-[70px] self-start'>
                    <PreviewsPortfolio />
                </div>
            </div>
        </div>
    )
}