'use client'

import {
	Button,
	Card,
	CardContent,
	CardHeader,
	CardTitle
} from '@/shared/components/ui'

import { TypeBranchSchema } from '../../schemes'
import { useDeleteBranch } from '../../hooks'
import { IBranch } from '../../types'
import { useUpdateBranchMutation } from '../../hooks'
import { ConfirmModal } from '@/shared/components/modals/ConfirmModals'
import { IoMdTrash } from 'react-icons/io'
import { BranchForm } from '../branchForm/BranchForm'
import { useTranslations } from 'next-intl'

export function EditBranchComponent(branchData: IBranch) {
	const { updateBranch, isPending } = useUpdateBranchMutation()
	const { deleteBranch, isLoadingDelete } = useDeleteBranch()

	const onSubmit = (values: TypeBranchSchema) => {
		updateBranch(values)
	}

	const t = useTranslations('branch')

	return (
		<Card className='md:w-[800px] w-full mx-5 md:mx-0'>
			<CardHeader className='flex flex-row items-center justify-between'>
				<CardTitle>{t('editBranchBtn')} {branchData.name}</CardTitle>
				<ConfirmModal handleClick={() => deleteBranch()}>
					<Button size='icon' variant='outline' disabled={isLoadingDelete}>
						<IoMdTrash className='text-red-500' />
					</Button>
				</ConfirmModal>
			</CardHeader>
			<CardContent>
				<BranchForm values={branchData} isPending={isPending} onSubmit={onSubmit} />
			</CardContent>
		</Card>
	)
}