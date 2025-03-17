import { CandidatList } from "@/features/candidat/components"
import { candidatService } from "@/features/candidat/services"
import { CANDIDAT_PAGE_DESCRIPTION, CANDIDAT_PAGE_NAME } from "@/shared/constants/seo.constants"
import { cache } from "react"

export const revalidate = 60

type Props = {
  params: { login: string }
  searchParams: {
    limit: number
    page: number
  }
}

const getCandidatContent = cache(
  async ({ params, searchParams }: Props) => {
    return await candidatService.getCandidats(searchParams)
  }
)

export async function generateMetadata() {
  return {
    title: CANDIDAT_PAGE_NAME,
    description: CANDIDAT_PAGE_DESCRIPTION,
    openGraph: {
      title: CANDIDAT_PAGE_NAME,
      description: CANDIDAT_PAGE_DESCRIPTION
    }
  }
}

export default async function CandidatsPage({ params, searchParams }: Props) {
  const { candidats, count, pageCount } = await getCandidatContent({ params, searchParams })

  return (
    <div className='flex gap-x-3'>
      <CandidatList
        candidats={candidats}
        count={count}
        pageCount={pageCount} />
    </div>
  );
}