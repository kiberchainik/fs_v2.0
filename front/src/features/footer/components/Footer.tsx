import { headerMainMenu, MAIN_URL } from "@/shared/config";
import { formatDate } from "@/shared/utils";
import Link from "next/link";

export function Footer() {
    const headerMenu = headerMainMenu()
    return (
        <footer>
            <div className="grid">
                <div>
                    <div>{/**logo */}</div>
                    <div>{/**description */}</div>
                </div>
                <div>
                    <a href="/">Home</a>
                    <a href="/developers">Developers</a>
                    <a href="/chi-siamo">Chi siamo</a>
                    <a href="/contatti">Contattaci</a>
                </div>
            </div>
            <div className='bg-white dark:bg-neutral-900 py-5 mt-10 items-center italic text-zinc-500 font-extralight text-sm text-center'></div>&copy {formatDate(new Date(), { 'dateFormat': 'year' })} <Link href={MAIN_URL.home()}>Lavoro Ideale</Link>
        </footer>
    )
}