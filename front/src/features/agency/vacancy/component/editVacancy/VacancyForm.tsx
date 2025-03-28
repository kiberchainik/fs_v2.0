'use client'


import {
	Button,
	Card,
	CardContent,
	CardHeader,
	CardTitle
} from '@/shared/components/ui'

import { TypeVacancySchema } from '../../schemes'
import { IVacanciaesEdit } from '../../types'
import { useUpdateVacancyMutation } from '../../hooks'

import { ConfirmModal } from '@/shared/components/modals/ConfirmModals'
import { IoMdTrash } from 'react-icons/io'
import { useDeleteVacancy } from '../../hooks/useDeleteVacancy'
import { joinNamesWithComma, splitTagsWithComa } from '@/shared/utils'
import { VacancyForm } from '../vacancyForm/VacancyForm'
import { useTranslations } from 'next-intl'

interface VacancyFromProps {
	vacancy: IVacanciaesEdit
}

export function VacancyEditForm({ vacancy }: VacancyFromProps) {
	const t = useTranslations('agencyVacancy.editVacancy')
	const { updJob, isPending, isSuccess } = useUpdateVacancyMutation()
	const { deleteVacancy, isLoadingDelete } = useDeleteVacancy()

	const valuesForm = {
		title: vacancy.title,
		description: vacancy.description,
		categoryId: vacancy.categoryId,
		location: vacancy.location,
		province: vacancy.province,
		region: vacancy.region,
		branchId: vacancy.branchId,
		sectors: [],
		tags: joinNamesWithComma(vacancy.tags),
		reallyUpTo: vacancy.reallyUpTo ? new Date(vacancy.reallyUpTo) : undefined,
		contractTypeId: vacancy.contratId || '',
		experienceMinimalId: vacancy.experienceId || '',
		levelEducationId: vacancy.levelId || '',
		modeJobId: vacancy.modeId || '',
		workingTimeId: vacancy.workingTimeId || ''
	}

	const onSubmit = (values: TypeVacancySchema) => {
		const { tags, ...value } = values
		const newVals = {
			...value,
			tags: splitTagsWithComa(values.tags)
		}

		updJob(newVals)
	}

	return (
		<Card className='md:w-[800px] w-full mx-5 md:mx-0'>
			<CardHeader className='flex flex-row items-center justify-between'>
				<CardTitle>{t('formTitle')} {vacancy.title}</CardTitle>
				<ConfirmModal handleClick={() => deleteVacancy()}>
					<Button size='icon' variant='outline' disabled={isLoadingDelete}>
						<IoMdTrash className='text-red-500 size-6' />
					</Button>
				</ConfirmModal>
			</CardHeader>
			<CardContent>
				<VacancyForm values={valuesForm} onSubmit={onSubmit} isPending={isPending} isSuccess={isSuccess} />
			</CardContent>
		</Card>
	)
}