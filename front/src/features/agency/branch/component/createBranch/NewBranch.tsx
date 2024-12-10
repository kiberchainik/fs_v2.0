'use client'

import {
	Card,
	CardContent,
	CardHeader,
	CardTitle
} from '@/shared/components/ui'

import { TypeBranchSchema } from '../../schemes'
import { useNewBranchMutation } from '../../hooks'
import { BranchForm } from '../branchForm/BranchForm'

export function NewBranch() {
	const defaultValues = {
		name: '',
		email: '',
		phone: '',
		fax: '',
		logo: '',
		address: '',
		location: '',
		region: '',
		about_branch: ''
	}

	const { createBranch, isPending, isSuccess } = useNewBranchMutation()

	const onSubmit = (values: TypeBranchSchema) => {
		createBranch(values)
	}

	return (
		<Card className='md:w-[800px] w-full mx-5 md:mx-0'>
			<CardHeader className='flex flex-row items-center justify-between'>
				<CardTitle>Create new filial</CardTitle>
			</CardHeader>
			<CardContent>
				<BranchForm values={defaultValues} isPending={isPending} onSubmit={onSubmit} />
			</CardContent>
		</Card>
	)
}
