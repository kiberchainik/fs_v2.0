
import { NewBranch } from "@/features/agency/branch/component/createBranch/NewBranch"
import { Branch } from "@/features/agency/branch/component/listBranch/Branch";

export default function AgencyPage() {
    return (
      <div className='flex gap-x-3 justify-center mt-5'>
        <Branch />
        <NewBranch />
      </div>
    );
}