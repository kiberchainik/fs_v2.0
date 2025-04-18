'use client'

import { Button, DataTable, Heading } from "@/shared/components"
import { useDeleteManyBranch, useGetBranch } from "../../hooks"
import Link from "next/link"
import { IBranchTable } from "../../types"

import styles from './branch.module.scss'
import DataTableLoading from "@/shared/components/data-table/DataTableLoading"
import { AGENCY_URL } from "@/shared/config"
import { Plus } from "lucide-react"
import { useBranchColumns } from "./BranchColumns"
import { useState } from "react"
import { CiTrash } from "react-icons/ci"
import { useTranslations } from "next-intl"

export function Branch() {
    const { branches, isFetching } = useGetBranch()
    const { deleteManyBranch } = useDeleteManyBranch()
    const [selectedIds, setSelectedIds] = useState<string[]>([])
    const t = useTranslations('branch')
    const columns = useBranchColumns()


    const handleDeleteMany = () => {
        deleteManyBranch(selectedIds)
    }

    const formattedBrancesData: IBranchTable[] = branches
        ? branches.map(branch => ({
            //logo: <Avatar src={branch.logo} alt={branch.name} />,
            name: branch.name,
            id: branch.id,
            location: branch.location,
            email: branch.email,
            phone: branch.phone
        }))
        : []

    return (
        <div className={styles.wrapper}>
            {isFetching
                ? <DataTableLoading />
                : <>
                    <div className={styles.header}>
                        <Heading>{t('branchList')}</Heading>
                        <div className={styles.buttons}>
                            <Link
                                href={AGENCY_URL.createBranch()}
                            >
                                <Button variant='outline'>
                                    <Plus /> {t('createBranchBtn')}
                                </Button>
                            </Link>
                            {selectedIds.length > 0 && (
                                <Button variant='default' onClick={() => handleDeleteMany()}>
                                    <CiTrash /> {t('deleteBranchBtn')}
                                </Button>
                            )}
                        </div>
                    </div>
                    <div className={styles.table}>
                        <DataTable
                            columns={columns}
                            data={formattedBrancesData}
                            filterKey='name'
                            onSelectionChange={setSelectedIds}
                        />
                    </div>
                </>
            }
        </div>
    )
}