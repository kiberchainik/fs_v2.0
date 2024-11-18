'use client'

import { Button, Input, Skeleton } from '@/shared/components'
import styles from './search.module.scss'
import { CiSearch } from 'react-icons/ci'
import { cn } from '@/shared/utils'
import Link from 'next/link'
import { MAIN_URL } from '@/shared/config'
import { useSearchHeader } from '../hooks/useSearchHeader'

export function HeaderSearch() {
    const { searchTerm, focused, isFetching, isSuccess, searchResult, ref, onSearchTermChange, onFocus, onClickSearch } = useSearchHeader()

    return (
        <>
            {focused && <div className={cn(styles.overlay, 'visible opacity-100')} />}
            <div className={cn(styles.searchField, focused && 'shadow-2xl shadow-black')} ref={ref}>
                <Button variant='ghost' className={styles.searchIcon} onClick={() => console.log('searching ...')}>
                    <CiSearch />
                </Button>
                <Input type='text' placeholder='Search ...' value={searchTerm} onChange={(e) => onSearchTermChange(e)} onFocus={() => onFocus()} />
            </div>
            {<div className={cn(styles.searchResult, focused && 'visible opacity-100 top-12')}>
                {searchResult && searchResult.map(item => (
                    <Link href={MAIN_URL.fullVacancy(item.slug)} key={item.id} className={styles.elementResult} onClick={onClickSearch}>
                        <div className={styles.elementResult_info}>
                            <div className={styles.elementResult_title}><span>{item.title}</span></div>
                            <div className={styles.elementResult_info_author}>
                                <span>{item.branch ? item.branch.name : item.agency?.agency_name}</span>
                                <span>{item.branch ? item.branch.address : item.agency?.address}</span>
                            </div>
                        </div>
                    </Link>
                ))}
                {!searchResult && <div className={styles.seqrchQueryNotFound}>По запросу {searchTerm} ничего не найдено!</div>}
            </div>}
        </>
    )
}