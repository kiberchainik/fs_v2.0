'use client'

import {
	Card,
	CardContent,
	CardHeader,
	CardTitle
} from '@/shared/components/ui'

import { TypeVacancySchema } from '../../schemes'
import { useCreateVacancyMutation } from '../../hooks'

import { splitTagsWithComa } from '@/shared/utils'
import { VacancyForm } from '../vacancyForm/VacancyForm'
import { useTranslations } from 'next-intl'

export function CreateVacancy() {
	const t = useTranslations('agencyVacancy.createVacancy')
	const defaultValues = {
		title: '',
		description: 'Descrizione ...',
		slug: '',
		categoryId: '',
		location: '',
		province: '',
		region: '',
		branchId: '',
		sectors: [],
		tags: '',
		contractTypeId: '',
		modeJobId: '',
		workingTimeId: '',
		levelEducationId: '',
		experienceMinimalId: '',
	}

	const { createJob, isPending, isSuccess } = useCreateVacancyMutation()

	const onSubmit = (values: TypeVacancySchema) => {
		const { tags, ...value } = values

		const newVals = {
			...value,
			tags: splitTagsWithComa(values.tags)
		}

		createJob(newVals)
	}

	return (
		<Card className='md:w-[800px] w-full mx-5 md:mx-0'>
			<CardHeader className='flex flex-row items-center justify-between'>
				<CardTitle>{t('formTitle')}</CardTitle>
			</CardHeader>
			<CardContent>
				<VacancyForm values={defaultValues} onSubmit={onSubmit} isPending={isPending} isSuccess={isSuccess} defaultValues={defaultValues} />
			</CardContent>
		</Card>
	)
}
