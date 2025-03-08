import { Button } from "@/shared/components";
import { MAIN_URL } from "@/shared/config";
import Image from "next/image";
import Link from "next/link";

import { MdChecklist, MdOutlineCreditCardOff, MdSecurity } from "react-icons/md"
import { FaRegSmileWink } from "react-icons/fa"

export function AboutUs() {
    return (
        <div>
            <section className="mx-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 border-b-2 items-center border-neutral-200 border-dashed pb-10 mb-10">
                    <div className="flex flex-col gap-2">
                        <h4 className="text-[#1967D3] text-2xl">LavIdea</h4>
                        <h3 className="mb-5 pb-5 text-5xl leading-[4rem] font-semibold text-[#17233e]">Lavoro ideale - è la tua risorsa online per tutto ciò che riguarda il lavoro</h3>
                        <p className="mb-2"><b>Creazione gratuita di un CV</b>: Il tuo curriculum vitae è il tuo biglietto da visita per i potenziali datori di lavoro. Il nostro strumento gratuito per la creazione di un curriculum vitae ti aiuterà a creare un curriculum vitae professionale e accattivante in pochi minuti.</p>
                        <p className="mb-2"><b>Ricerca di lavoro con filtro</b>: La nostra ricerca di lavoro con filtro ti consente di trovare i lavori perfetti in base alle tue competenze, alla tua esperienza e ai tuoi interessi.</p>
                        <p className="mb-2"><b>Ricerca di lavoro e collocamento</b>: Ti aiutiamo a trovare il lavoro giusto per te. Il nostro team di esperti ti guiderà attraverso il processo di ricerca di lavoro e ti aiuterà a ottenere un colloquio.</p>
                        <p className="mb-2"><b>Ampia selezione di agenzie di lavoro</b>: Collaboriamo con le migliori agenzie di lavoro del paese. Questo significa che hai accesso a una vasta gamma di opportunità di lavoro.</p>
                        <p className="mb-2"><b>Pubblicazione gratuita delle tue offerte di lavoro per le agenzie</b>: Se sei un datore di lavoro, puoi pubblicare gratuitamente le tue offerte di lavoro sul nostro sito. In questo modo, puoi raggiungere un vasto pubblico di candidati.</p>
                        <p className="mb-2"><b>Ricerca e selezione di candidati per qualsiasi tipo di lavoro</b>: Ti aiutiamo a trovare i candidati perfetti per le tue esigenze. Il nostro sito ti aiuterà a selezionare i candidati più qualificati e adatti alla tua azienda.</p>
                        <div className="flex items-center justify-center mt-5 gap-x-5">
                            <Button variant='outline'><Link href={MAIN_URL.authCandidat()}>Candidat</Link></Button>
                            <Button variant='outline'><Link href={MAIN_URL.authAgency()}>Agency</Link></Button>
                        </div>
                    </div>
                    <div className="mb-4 relative">
                        <div className="">
                            <Image src="/about-us.png" width={507} height={500} alt="about-lavidea" className="w-full" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="how-it-works p-0">
                <div className="section-title text-center w-75 mx-auto mb-12 pb-2">
                    <h2 className="text-[#17233e] text-5xl font-bold mb-5">Vantaggi dell'utilizzo <span className="text-[#1967D3]">del nostro sito</span></h2>
                    <p className="text-lg text-[#1a576b]">Siamo la tua soluzione unica per tutte le tue esigenze di lavoro. Che tu sia un candidato alla ricerca di un lavoro o un datore di lavoro alla ricerca di candidati, abbiamo ciò che ti serve. Registrati subito e inizia a trovare il lavoro ideale o candidati perfetti!</p>
                </div>
                <div className="how-it-work-main">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-5 items-start justify-between">
                        <div className="work-list px-5">
                            <div className="flex bg-[#069cd0] rounded-2xl text-3xl p-5 items-center mb-10">
                                <span className="-ml-10 -mb-10 p-5 bg-white rounded-xl shadow-[0px_0px_61px_-30px_rgba(6,_156,_208,_0.8)]"><MdOutlineCreditCardOff className="text-[#069cd0] text-5xl font-light" /></span>
                                <h4 className="pl-7 text-white">È gratuito</h4>
                            </div>
                            <p className="text-lg text-[#1a576b]">Il nostro sito è gratuito da utilizzare</p>
                        </div>
                        <div className="work-list px-5 work-arrow">
                            <div className="flex bg-[#b363c9] rounded-2xl text-3xl p-5 items-center mb-10">
                                <span className="-ml-10 -mb-10 p-5 bg-white rounded-xl shadow-[0px_0px_61px_-30px_rgba(6,_156,_208,_0.8)]"><FaRegSmileWink className="text-[#069cd0] text-5xl font-light" /></span>
                                <h4 className="pl-7 text-white">È facile</h4>
                            </div>
                            <p className="text-lg text-[#1a576b]">Il nostro sito è facile da navigare e utilizzare</p>
                        </div>
                        <div className="work-list px-5">
                            <div className="flex bg-[#1967D3] rounded-2xl text-3xl p-5 items-center mb-10">
                                <span className="-ml-10 -mb-10 p-5 bg-white rounded-xl shadow-[0px_0px_61px_-30px_rgba(6,_156,_208,_0.8)]"><MdChecklist className="text-[#069cd0] text-5xl font-light" /></span>
                                <h4 className="pl-7 text-white">È efficace</h4>
                            </div>
                            <p className="text-lg text-[#1a576b]">Il nostro sito ti aiuta a trovare il lavoro perfetto.</p>
                        </div>
                        <div className="work-list px-5">
                            <div className="flex bg-[#ee6db4] rounded-2xl text-3xl p-5 items-center mb-10">
                                <span className="-ml-10 -mb-10 p-5 bg-white rounded-xl shadow-[0px_0px_61px_-30px_rgba(6,_156,_208,_0.8)]"><MdSecurity className="text-[#069cd0] text-5xl font-light" /></span>
                                <h4 className="pl-7 text-white">È sicuro</h4>
                            </div>
                            <p className="text-lg text-[#1a576b]">Il nostro sito è sicuro e protetto.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* 
            
            Siamo la tua soluzione unica per tutte le tue esigenze di lavoro. Che tu sia un candidato alla ricerca di un lavoro o un datore di lavoro alla ricerca di candidati, abbiamo ciò che ti serve.
            Registrati subito e inizia a trovare il lavoro ideale o candidati perfetti!

            Ecco alcuni dei vantaggi dell'utilizzo del nostro sito:
            È gratuito: Il nostro sito è gratuito da utilizzare.
            È facile: Il nostro sito è facile da navigare e utilizzare.
            È efficace: Il nostro sito ti aiuta a trovare il lavoro perfetto.
            È sicuro: Il nostro sito è sicuro e protetto.

            Se stai cercando un lavoro o un candidato, non cercare oltre. Il nostro sito è la tua risorsa online per tutto ciò che riguarda il lavoro.
            Registrati subito e inizia a trovare il lavoro ideale o candidati perfetti! */}
        </div>
    )
}