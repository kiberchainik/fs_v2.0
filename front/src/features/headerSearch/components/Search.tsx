'use client'

import { Button, Input } from '@/shared/components'
import styles from './search.module.scss'
import { CiSearch } from 'react-icons/ci'
import { useRef, useState } from 'react'
import { useClickAway, useDebounce } from 'react-use'
import { cn } from '@/shared/utils'
import Link from 'next/link'

export function HeaderSearch() {
    const [focused, setFocused] = useState<boolean>(false)
    const [searchQuery, setSearchQuery] = useState<string>('')
    const ref = useRef(null)

    useClickAway(ref, () => {
        setFocused(false)
    })

    useDebounce(() => {

    }, 1000, [searchQuery])

    return (
        <>
            {focused && <div className={styles.overflow}></div>}
            <div className={styles.searchField} ref={ref}>
                <Button variant='ghost' className={styles.searchIcon} onClick={() => console.log('searching ...')}>
                    <CiSearch />
                </Button>
                <Input type='text' placeholder='Search ...' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onFocus={() => setFocused(true)} />
            </div>
            <div className={cn(styles.searchResult, focused && 'visible opacity-100 top-12')}>
                <Link href='' className={styles.elementResult}>
                    <span>Element 1</span>
                </Link>
            </div>
        </>
    )
}