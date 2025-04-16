import { Button } from "@/shared/components";
import { MAIN_URL } from "@/shared/config";
import Image from "next/image";
import Link from "next/link";

import { MdChecklist, MdOutlineCreditCardOff, MdSecurity } from "react-icons/md"
import { FaRegSmileWink } from "react-icons/fa"
import { useTranslations } from "next-intl";

export function AboutUs() {
    const t = useTranslations('chisiamoPage')
    return (
        <div>
            <section className="mx-5 md:mx-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 border-b-2 items-center border-neutral-200 border-dashed pb-10 mb-10">
                    <div className="flex flex-col gap-2">
                        <h4 className="text-[#1967D3] text-2xl">LavIdea</h4>
                        <h3 className="mb-5 pb-5 text-3xl md:text-5xl md:leading-[4rem] font-semibold text-[#17233e]">{t('title_h3')}</h3>
                        <p className="mb-2 md:mx-3 mx-5"><b>{t('desc_title_p1')}</b>: {t('desc_p1')}</p>
                        <p className="mb-2 md:mx-3 mx-5"><b>{t('desc_title_p2')}</b>: {t('desc_p2')}</p>
                        <p className="mb-2 md:mx-3 mx-5"><b>{t('desc_title_p3')}</b>: {t('desc_p3')}</p>
                        <p className="mb-2 md:mx-3 mx-5"><b>{t('desc_title_p4')}</b>: {t('desc_p4')}</p>
                        <p className="mb-2 md:mx-3 mx-5"><b>{t('desc_title_p5')}</b>: {t('desc_p5')}</p>
                        <p className="mb-2 md:mx-3 mx-5"><b>{t('desc_title_p6')}</b>: {t('desc_p6')}</p>
                        <div className="flex items-center justify-center mt-5 gap-x-5">
                            <Button variant='outline'><Link href={MAIN_URL.authCandidat()}>Candidat</Link></Button>
                            <Button variant='outline'><Link href={MAIN_URL.authAgency()}>Agency</Link></Button>
                        </div>
                    </div>
                    <div className="mb-4 relative">
                        <div className="">
                            <Image src="/about-us.webp" width={507} height={500} alt="about-lavidea" className="w-full" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="how-it-works p-0">
                <div className="section-title text-center w-75 mx-5 md:mx-auto mb-12 pb-2">
                    <h2 className="text-[#17233e] text-5xl font-bold mb-5">{t('chisiamoPage_title_h2_p1')} <span className="text-[#1967D3]">{t('chisiamoPage_title_h2_p2')}</span></h2>
                    <p className="text-lg text-[#1a576b]">{t('chisiamoPage_p')}</p>
                </div>
                <div className="how-it-work-main">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-5 gap-5 items-start justify-between">
                        <div className="work-list px-5">
                            <div className="flex bg-[#069cd0] rounded-2xl text-3xl p-5 items-center mb-10">
                                <span className="-ml-10 -mb-10 p-5 bg-white rounded-xl shadow-[0px_0px_61px_-30px_rgba(6,_156,_208,_0.8)]"><MdOutlineCreditCardOff className="text-[#069cd0] text-5xl font-light" /></span>
                                <h4 className="pl-7 text-white">{t('block1_h4')}</h4>
                            </div>
                            <p className="text-lg text-[#1a576b]">{t('block1_p')}</p>
                        </div>
                        <div className="work-list px-5 work-arrow">
                            <div className="flex bg-[#b363c9] rounded-2xl text-3xl p-5 items-center mb-10">
                                <span className="-ml-10 -mb-10 p-5 bg-white rounded-xl shadow-[0px_0px_61px_-30px_rgba(6,_156,_208,_0.8)]"><FaRegSmileWink className="text-[#069cd0] text-5xl font-light" /></span>
                                <h4 className="pl-7 text-white">{t('block2_h4')}</h4>
                            </div>
                            <p className="text-lg text-[#1a576b]">{t('block2_p')}</p>
                        </div>
                        <div className="work-list px-5">
                            <div className="flex bg-[#1967D3] rounded-2xl text-3xl p-5 items-center mb-10">
                                <span className="-ml-10 -mb-10 p-5 bg-white rounded-xl shadow-[0px_0px_61px_-30px_rgba(6,_156,_208,_0.8)]"><MdChecklist className="text-[#069cd0] text-5xl font-light" /></span>
                                <h4 className="pl-7 text-white">{t('block3_h4')}</h4>
                            </div>
                            <p className="text-lg text-[#1a576b]">{t('block3_p')}</p>
                        </div>
                        <div className="work-list px-5">
                            <div className="flex bg-[#ee6db4] rounded-2xl text-3xl p-5 items-center mb-10">
                                <span className="-ml-10 -mb-10 p-5 bg-white rounded-xl shadow-[0px_0px_61px_-30px_rgba(6,_156,_208,_0.8)]"><MdSecurity className="text-[#069cd0] text-5xl font-light" /></span>
                                <h4 className="pl-7 text-white">{t('block4_h4')}</h4>
                            </div>
                            <p className="text-lg text-[#1a576b]">{t('block4_p')}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}