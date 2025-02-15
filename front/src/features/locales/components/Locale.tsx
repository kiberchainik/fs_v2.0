import Link from "next/link"

export const Locale = () => {
    return (
        <div>
            <Link href="/" locale="it">
                <span className=''>Italiano</span>
            </Link>
            <Link href="/" locale="en">
                <span className=''>English</span>
            </Link>
            <Link href="/" locale="ru">
                <span className=''>Русский</span>
            </Link>
        </div>
    )
}