'use client'

import { IVacanciaesFullDate } from "@/features/agency/vacancy/types";
import { Card, Heading } from "@/shared/components";

export default function JobFullPage({ title, description }: IVacanciaesFullDate) {
  return (
    <Card className='flex flex-col gap-y-3 p-5'>
      <Heading>{title}</Heading>
      <div>
        <p>{description}</p>
      </div>
    </Card>
  );
}