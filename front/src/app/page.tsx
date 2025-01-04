import Agencies from "@/features/carousel/components/agencies/Agencies"
import Candidats from "@/features/carousel/components/candidats/Candidats"
import Vacancies from "@/features/carousel/components/vacancies/Vacancies"

export default function Home() {
  return (
    <div className='flex flex-col gap-y-3'>
      <Candidats />
      <Agencies />
      <Vacancies />
    </div>
  )
}