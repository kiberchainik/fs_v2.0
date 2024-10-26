'use client'

import { Button, DataTable, Heading } from "@/shared/components"
import { useGetBranch } from "../../hooks"
import Link from "next/link"
import { IBranchTable } from "../../types"

import styles from './branch.module.scss'
import DataTableLoading from "@/shared/components/data-table/DataTableLoading"
import { AGENCY_URL } from "@/shared/config"
import { Plus } from "lucide-react"
import { branchColumns } from "./BranchColumns"

export function Branch () {
    const {branches, isFetching} = useGetBranch()

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
                        <Heading>All filials</Heading>
                        <div className={styles.buttons}>
                            <Link
                                href={AGENCY_URL.createBranch()}
                            >
                                <Button variant='outline'>
                                    <Plus />
                                    Создать
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.table}>
                        <DataTable
                            columns={branchColumns}
                            data={formattedBrancesData}
                            filterKey='name'
                        />
                    </div>
                </>
            }
        </div>
    )
}