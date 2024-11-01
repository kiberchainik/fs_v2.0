'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import {
	Button,
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue} from '@/shared/components/ui'

import { VacancySchema, TypeVacancySchema } from '../../schemes'
import TextEditor from '@/shared/components/ui/TextEditor'
import { ICategory, IOptions, IVacanciaesEdit } from '../../types'
import { IBItem } from '@/features/agency/branch/types'
import { useGenerateDescription, useUpdateVacancyMutation } from '../../hooks'

import styles from './vacancy.module.scss'
import { ConfirmModal } from '@/shared/components/modals/ConfirmModals'
import { IoMdTrash } from 'react-icons/io'
import { useDeleteVacancy } from '../../hooks/useDeleteVacancy'
import { joinNamesWithComma, splitTagsWithComa } from '@/shared/utils'
import { DateTimePicker } from '@/shared/components/datapicker/Datapicker'

interface VacancyFromProps {
	vacancy: IVacanciaesEdit
	categories: ICategory[]
	branches: IBItem[]
	contractType: IOptions[] | undefined
	experienceMinimal: IOptions[] | undefined
	levelEducation: IOptions[] | undefined
	modeJob: IOptions[] | undefined
	workingTime: IOptions[] | undefined
}



export function VacancyForm ({vacancy, categories, branches, contractType, experienceMinimal, levelEducation, modeJob, workingTime}:VacancyFromProps) {
	const { updJob, isPending, isSuccess } = useUpdateVacancyMutation()
	const { deleteVacancy, isLoadingDelete } = useDeleteVacancy()
	const {generateText, gentext, isInProccess} = useGenerateDescription()

	const form = useForm<TypeVacancySchema>({
		mode: 'onChange',
		resolver: zodResolver(VacancySchema),
		values: {
			title: vacancy.title,
			description: vacancy.description,
			categoryId: vacancy.categoryId,
			location: vacancy.location,
			province: vacancy.province,
			region: vacancy.region,
			branchId: vacancy.branchId,
			sectors: [],
			tags: joinNamesWithComma(vacancy.tags),
			reallyUpTo: new Date(vacancy.reallyUpTo || 0),
			contractTypeId: vacancy.contratId || '',
			experienceMinimalId: vacancy.experienceId || '',
			levelEducationId: vacancy.levelId || '',
			modeJobId: vacancy.modeId || '',
			workingTimeId: vacancy.workingTimeId || ''
		}
	})

	const GenerateDescriptionBtn = (keywords:string | undefined) => {
		if(keywords) {
			const genDescription = generateText(keywords)
			form.setValue('description', gentext || '')
		}
	}
	
	const onSubmit = (values: TypeVacancySchema) => {
		const {tags, ...value} = values
		const newVals = {
			...value,
			tags: splitTagsWithComa(values.tags)
		}

		updJob(newVals)
		isSuccess && form.reset()
	}
	
	return (
		<Card className='w-[800px]'>
			<CardHeader className='flex flex-row items-center justify-between'>
				<CardTitle>Edit {vacancy.title}</CardTitle>
                <ConfirmModal handleClick={() => deleteVacancy()}>
                    <Button size='icon' variant='outline' disabled={isLoadingDelete}>
                        <IoMdTrash className='text-red-500 size-6' />
                    </Button>
                </ConfirmModal>
			</CardHeader>
			<CardContent>
				{
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className='grid gap-2 space-y-2'
						>
							<FormField
								control={form.control}
								name='title'
								rules={{
									required: 'Title is required'
								}}
								render={({ field }) => (
									<FormItem className='mt-4'>
										<FormLabel>Job title</FormLabel>
										<FormControl>
											<Input
												placeholder='Job title'
												disabled={isPending}
												type='text'
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<div className='flex flex-row gap-x-2 justify-between items-center'>
								<FormField
									control={form.control}
									name='location'
									render={({ field }) => (
										<FormItem>
											<FormLabel>Location</FormLabel>
											<FormControl>
												<Input
													placeholder='Location'
													disabled={isPending}
													type='text'
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name='province'
									render={({ field }) => (
										<FormItem>
											<FormLabel>Province</FormLabel>
											<FormControl>
												<Input
													placeholder='Province'
													disabled={isPending}
													type='text'
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name='region'
									render={({ field }) => (
										<FormItem>
											<FormLabel>Region</FormLabel>
											<FormControl>
												<Input
													placeholder='Regopn'
													disabled={isPending}
													type='text'
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<FormField
							control={form.control}
							name='categoryId'
							rules={{
								required: 'Категория обязательна'
							}}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Категория</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder='Категория' />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectGroup>
												{categories ? categories.map(category => (
													<SelectItem value={category.id} key={category.id}>{category.name}</SelectItem>
												)) : <SelectItem value='0' key={'without_category'}>Категорий нет!</SelectItem>}
											</SelectGroup>
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
							/>
							<FormField
								control={form.control}
								name='branchId'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Branch</FormLabel>
											<Select
												onValueChange={field.onChange}
												defaultValue={field.value}
											>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder='Brach is required' />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												<SelectGroup>
												{branches ? branches.map(branch => (
													<SelectItem value={branch.id} key={branch.id}>{branch.name}</SelectItem>
												)) : <SelectItem value='0' key={'without_branch'}>Категорий нет!</SelectItem>}
												</SelectGroup>
											</SelectContent>
										</Select>
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="description"
								render={({ field }) => (
								<FormItem>
									<FormLabel>Description</FormLabel>
									<FormControl>
										<TextEditor description={field.value} onChange={field.onChange} />
									</FormControl>
									<FormMessage />
								</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='tags'
								render={({ field }) => (
									<FormItem>
										<div className='flex justify-between items-center'>
											<FormLabel>Tags</FormLabel>
											{/* <FormLabel>
												<Button variant='link' onClick={() => GenerateDescriptionBtn(field.value)}>Generate description with tags</Button>
											</FormLabel> */}
										</div>
										<FormControl>
											<Input
												placeholder='Tags'
												disabled={isPending}
												type='text'
												{...field}
											/>
										</FormControl>
										<FormDescription>All tags must be separated by comma</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="reallyUpTo"
								render={({ field }) => (
									<FormItem className="flex flex-col">
										<FormLabel>Reall up to</FormLabel>
										<DateTimePicker 
												use12HourFormat={false} 
												value={field.value} 
												onChange={field.onChange}
												hideTime={true}
												min={new Date()}
											/>
										<FormMessage />
									</FormItem>
								)}
							/>
							<div className={styles.options_job}>
								<div className={styles.options_job_label}>
									<FormLabel>Opzionale</FormLabel>
								</div>
								<div className={styles.options_job_fields}>
									<FormField
										control={form.control}
										name='contractTypeId'
										render={({ field }) => (
											<FormItem>
												<FormLabel>Tipo di contratto</FormLabel>
													<Select
														onValueChange={field.onChange}
														defaultValue={field.value}
													>
													<FormControl>
														<SelectTrigger>
															<SelectValue placeholder='Tipo di contratto' />
														</SelectTrigger>
													</FormControl>
													<SelectContent>
														<SelectGroup>
														{contractType ? contractType.map(type => (
															<SelectItem value={type.id} key={type.id}>{type.name}</SelectItem>
														)) : <SelectItem value='0' key={'without_branch'}>Non ci sono i dati</SelectItem>}
														</SelectGroup>
													</SelectContent>
												</Select>
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name='modeJobId'
										render={({ field }) => (
											<FormItem>
												<FormLabel>Modalità di lavoro</FormLabel>
													<Select
														defaultValue={field.value}
														onValueChange={field.onChange}
													>
													<FormControl>
														<SelectTrigger>
															<SelectValue placeholder='Modalità di lavoro' />
														</SelectTrigger>
													</FormControl>
													<SelectContent>
														<SelectGroup>
														{modeJob ? modeJob.map(mode => (
															<SelectItem value={mode.id} key={mode.id}>{mode.name}</SelectItem>
														)) : <SelectItem value='0' key={'without_branch'}>Non ci sono i dati</SelectItem>}
														</SelectGroup>
													</SelectContent>
												</Select>
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name='workingTimeId'
										render={({ field }) => (
											<FormItem>
												<FormLabel>Orario di lavoro</FormLabel>
													<Select
														defaultValue={field.value}
														onValueChange={field.onChange}
													>
													<FormControl>
														<SelectTrigger>
															<SelectValue placeholder='Orario di lavoro' />
														</SelectTrigger>
													</FormControl>
													<SelectContent>
														<SelectGroup>
														{workingTime ? workingTime.map(time => (
															<SelectItem value={time.id} key={time.id}>{time.name}</SelectItem>
														)) : <SelectItem value='0' key={'without_branch'}>Non ci sono i dati</SelectItem>}
														</SelectGroup>
													</SelectContent>
												</Select>
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name='levelEducationId'
										render={({ field }) => (
											<FormItem>
												<FormLabel>Livello di istruzione</FormLabel>
													<Select
														defaultValue={field.value}
														onValueChange={field.onChange}
													>
													<FormControl>
														<SelectTrigger>
															<SelectValue placeholder='Livello di istruzione' />
														</SelectTrigger>
													</FormControl>
													<SelectContent>
														<SelectGroup>
														{levelEducation ? levelEducation.map(level => (
															<SelectItem value={level.id} key={level.id}>{level.name}</SelectItem>
														)) : <SelectItem value='0' key={'without_branch'}>Non ci sono i dati</SelectItem>}
														</SelectGroup>
													</SelectContent>
												</Select>
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name='experienceMinimalId'
										render={({ field }) => (
											<FormItem>
												<FormLabel>Esperienza minima richiesta</FormLabel>
													<Select
														defaultValue={field.value}
														onValueChange={field.onChange}
													>
													<FormControl>
														<SelectTrigger>
															<SelectValue placeholder='Esperienza minima richiesta' />
														</SelectTrigger>
													</FormControl>
													<SelectContent>
														<SelectGroup>
														{experienceMinimal ? experienceMinimal.map(experience => (
															<SelectItem value={experience.id} key={experience.id}>{experience.name}</SelectItem>
														)) : <SelectItem value='0' key={'without_branch'}>Non ci sono i dati</SelectItem>}
														</SelectGroup>
													</SelectContent>
												</Select>
											</FormItem>
										)}
									/>
								</div>
							</div>
							<Button type='submit' disabled={isPending}>
								Сохранить
							</Button>
						</form>
					</Form>
				}
			</CardContent>
		</Card>
	)
}