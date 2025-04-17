'use client'

import { TranslationFunc } from '@/i18n'
import { Button } from '@/shared/components'
import { MAIN_URL } from '@/shared/config'
import Image from 'next/image'
import Link from 'next/link'

export const MiddleSector = ({ t }: { t: TranslationFunc }) => {
    return (
        <div className="flex my-10 px-10 -ml-5">
            <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
                <div className="md:w-1/2">
                    <div className="">
                        <Image src="/job-01.webp" width={620} height={500} alt="about" />
                    </div>
                </div>
                <div className="md:w-1/2 m-4">
                    <div className="items-center text-left">
                        <h4 className="text-[#1967D3] text-2xl">{t('h4')}</h4>
                        <h2 className="border-b border-dashed mb-5 pb-5 text-6xl leading-[5rem] font-semibold">{t('h2')}</h2>
                        <p className="mb-3">{t('p_p1')}</p>
                        <p>{t('p_p2')}</p>
                        <div className="flex items-center justify-center mt-5 gap-x-5">
                            <Button variant='default'><Link href={MAIN_URL.authCandidat()}>{t('btn_candidat')}</Link></Button>
                            <Button variant='default'><Link href={MAIN_URL.authAgency()}>{t('btn_agency')}</Link></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}