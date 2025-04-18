'use client'

import { Button, Input } from '@/shared/components'
import styles from './search.module.scss'
import { CiSearch } from 'react-icons/ci'
import { cn } from '@/shared/utils'
import Link from 'next/link'
import { useSearchHeader } from '../hooks/useSearchHeader'

import { GrClose } from "react-icons/gr";

export function HeaderSearch() {
    const { searchTerm, focused, searchResult, ref, onSearchTermChange, onFocus, onClickSearch, generatePostUrl } = useSearchHeader()

    return (
        <>
            {focused && <div className={cn(styles.overlay, focused ? 'opacity-100' : 'opacity-0')}></div>}
            <div className={cn(styles.searchField, focused && 'shadow-2xl shadow-black md:relative absolute md:w-auto !w-11/12 right-0 m-5')} ref={ref}>
                <Button variant='ghost' className={styles.searchIcon} onClick={() => onFocus()} >
                    <CiSearch />
                </Button>
                <Input type='text' placeholder='Search ...' value={searchTerm} onChange={(e) => onSearchTermChange(e)} onFocus={() => onFocus()} />
            </div>
            {<div className={cn(styles.searchResult, focused ? 'opacity-100' : 'opacity-0')}>
                {searchResult && searchResult.map(item => (
                    <Link href={`${generatePostUrl(item.categories, item.slug)}`} key={item.id} className={styles.elementResult} onClick={onClickSearch}>
                        <div className={styles.elementResult_info}>
                            <div className={styles.elementResult_title}><span>{item.title}</span></div>
                            <div className={styles.elementResult_info_author}>
                                <span>{item.branch ? `${item.agency?.agency_name} ${item.branch.name}` : item.agency?.agency_name}</span>
                                <span>{item.branch ? item.branch.address : item.agency?.address}</span>
                            </div>
                        </div>
                    </Link>
                ))}
                {!searchTerm && <div className={styles.seqrchQueryNotFound}>Cosa vuoi cercare?</div>}
                {!searchResult?.length && searchTerm && <div className={styles.seqrchQueryNotFound}>Nessun risultato trovato per <b>{searchTerm}</b>!</div>}
                <div className='cursor-pointer' onClick={() => onClickSearch()}><GrClose /></div>
            </div>}
        </>
    )
}