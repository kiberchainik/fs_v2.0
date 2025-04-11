import { Branch } from "@/features/agency/branch/component/branchTable/Branch";
import { Vacancies } from "@/features/agency/vacancy/component/vacancyTable/Vacancies";
import { Card } from "@/shared/components";
import { NO_INDEX_PAGE } from "@/shared/constants/seo.constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Agency dashboard',
  ...NO_INDEX_PAGE
}

export default function ContactsPage() {
  return (
    <div className='grid gap-3 m-5'>
      <Card>
        <Vacancies />
      </Card>
    </div>
  );
}