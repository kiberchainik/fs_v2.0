'use client'

import { Button, Input } from '@/shared/components'
import styles from './search.module.scss'
import { CiSearch } from 'react-icons/ci'
import { useRef, useState } from 'react'
import { useClickAway } from 'react-use'
import { cn } from '@/shared/utils'

export function HeaderSearch() {
    const [focused, setFocused] = useState<boolean>(false)
    const ref = useRef(null)

    useClickAway(ref, () => {
        setFocused(false)
    })

    return (
        <>
            {focused && <div className={styles.overflow}></div>}
            <div className={styles.searchField} ref={ref}>
                <Button variant='ghost' className={styles.searchIcon} onClick={() => console.log('searching ...')}>
                    <CiSearch />
                </Button>
                <Input type='text' placeholder='Search ...' onFocus={() => setFocused(true)} />
            </div>
            <div className={cn(styles.searchResult, focused && 'visible opacity-100 top-12')}>

            </div>
        </>
    )
}