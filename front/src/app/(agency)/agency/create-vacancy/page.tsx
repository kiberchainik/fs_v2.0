import { CreateVacancy } from "@/features/agency/create-vacancy/component/CreateVacancy"

export default function AgencyPage() {
    return (
      <div className='flex gap-x-3 justify-center items-center mt-5'>
        <CreateVacancy />
      </div>
    );
}