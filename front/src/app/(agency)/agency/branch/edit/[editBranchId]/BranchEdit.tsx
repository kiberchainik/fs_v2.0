'use client'

import { EditBranchComponent } from "@/features/agency/branch/component/editBranch/BranchForm"
import { useGetBranchById } from "@/features/agency/branch/hooks"
import { useParams } from "next/navigation"

export default function BranchEdit() {
    const { editBranchId } = useParams<{ editBranchId: string }>()

    const { branchData, isFetching } = useGetBranchById(editBranchId)

    if (!branchData) return null
    return (
        <EditBranchComponent {...branchData} />
    )
}