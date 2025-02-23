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
    <div>
      <div className='flex gap-x-3'>
        <div className="items-center text-left border-b border-dashed border-[#ccc] pb-4">
          <h4 className="text-[#1967D3] text-2xl">Su LavIdea.it</h4>
          <h2 className="text-[50px] text-[#1e356a] font-bold">Сandidati Ideali</h2>
          <p className="text-lg text-[#069cd0]">Scopri i migliori candidati disponibili e trova il talento giusto per la tua azienda. Esplora i profili dei candidati, confronta le loro competenze e scegli i professionisti più adatti alle tue esigenze.</p>
          <p className="text-lg text-[#069cd0]">Con LavIdea.it, la ricerca del personale diventa semplice ed efficace. Non perdere l'opportunità di migliorare il tuo team con i migliori talenti sul mercato.</p>
        </div>
      </div>
      <div>
        <CandidatList
          candidats={candidats}
          count={count}
          pageCount={pageCount} />
      </div>
    </div>
  );
}