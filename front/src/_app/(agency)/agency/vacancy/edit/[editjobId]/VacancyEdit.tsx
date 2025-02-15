'use client'

import { VacancyEditForm } from "@/features/agency/vacancy/component/editVacancy/VacancyForm"
import { useVacancyById } from "@/features/agency/vacancy/hooks/useGetVacancy"
import { useParams } from "next/navigation"

export default function VacancyEdit() {
  const { editjobId } = useParams<{ editjobId: string }>()

  const { vacancyData } = useVacancyById(editjobId)

  if (!vacancyData) return null

  return (
    <div className='flex flex-col gap-x-3 justify-between items-center m-5'>
      <VacancyEditForm vacancy={vacancyData} />
    </div>
  );
}