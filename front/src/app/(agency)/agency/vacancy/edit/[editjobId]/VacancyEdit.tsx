'use client'

import { useGetBranch } from "@/features/agency/branch/hooks";
import { VacancyForm } from "@/features/agency/vacancy/component/editVacancy/VacancyForm";
import { useCategory, useGetExperienceMinimal, useGetLevelEducation, useGetModeJob, useGetOptionsContractTypes, useGetWorkingTime } from "@/features/agency/vacancy/hooks";
import { useVacancyById } from "@/features/agency/vacancy/hooks/useGetVacancy";
import { useParams } from "next/navigation";

export default function VacancyEdit() {
    const { editjobId } = useParams<{editjobId: string}>()

    const { vacancyData } = useVacancyById(editjobId)

    const { categories } = useCategory()
	  const { branches } = useGetBranch()

    const { contractType, isFetching: isFCT } = useGetOptionsContractTypes()
    const { experienceMinimal, isFetching: isFEM } = useGetExperienceMinimal()
    const { levelEducation, isFetching: isFLE } = useGetLevelEducation()
    const { modeJob, isFetching: isFMJ } = useGetModeJob()
    const { workingTime, isFetching: isFWT } = useGetWorkingTime()

    if(!vacancyData) return null

    return (
      <div className='flex flex-col gap-x-3 justify-between items-center m-5'>
        <VacancyForm
          vacancy={vacancyData}
          categories={categories || []}
          branches={branches || []}
          contractType = {contractType}
          experienceMinimal = {experienceMinimal}
          levelEducation = {levelEducation}
          modeJob = {modeJob}
          workingTime = {workingTime}
         />
      </div>
    );
}