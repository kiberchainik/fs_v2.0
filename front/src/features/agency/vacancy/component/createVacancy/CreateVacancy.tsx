'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'

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
	SelectLabel,
	SelectTrigger,
	SelectValue
} from '@/shared/components/ui'

import { VacancySchema, TypeVacancySchema } from '../../schemes'
import { useCreateVacancyMutation, useGetExperienceMinimal, useGetLevelEducation, useGetModeJob, useGetOptionsContractTypes, useGetWorkingTime } from '../../hooks'
import TextEditor from '@/shared/components/ui/TextEditor'
import { useGetBranch } from '../../../branch/hooks'

import styles from './vacancy.module.scss'
import { splitTagsWithComa } from '@/shared/utils'
import { DateTimePicker } from '@/shared/components/datapicker/Datapicker'
import { useCategory } from '@/features/category/hooks'

export function CreateVacancy() {
	const { categories, isFetching } = useCategory()
	const { contractType, isFetching: isFCT } = useGetOptionsContractTypes()
	const { experienceMinimal, isFetching: isFEM } = useGetExperienceMinimal()
	const { levelEducation, isFetching: isFLE } = useGetLevelEducation()
	const { modeJob, isFetching: isFMJ } = useGetModeJob()
	const { workingTime, isFetching: isFWT } = useGetWorkingTime()

	const { branches, isFetching: isFetchingBranch } = useGetBranch()

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

	const form = useForm<TypeVacancySchema>({
		mode: 'onChange',
		resolver: zodResolver(VacancySchema),
		defaultValues
	})

	const { createJob, isPending, isSuccess } = useCreateVacancyMutation()

	const onSubmit = (values: TypeVacancySchema) => {
		const { tags, ...value } = values

		const newVals = {
			...value,
			tags: splitTagsWithComa(values.tags)
		}

		createJob(newVals)

		isSuccess && form.reset(defaultValues)
	}

	return (
		<Card className='md:w-[800px] w-full mx-5 md:mx-0'>
			<CardHeader className='flex flex-row items-center justify-between'>
				<CardTitle>Create new vacancy</CardTitle>
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
												defaultValue={field.value}
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='slug'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Job slug</FormLabel>
										<FormControl>
											<Input
												placeholder='Job slug'
												disabled={isPending}
												type='text'
												defaultValue={field.value}
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<div className='flex md:flex-row flex-col md:gap-x-2 gap-y-2 justify-between'>
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
													defaultValue={field.value}
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
													defaultValue={field.value}
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
													placeholder='Region'
													disabled={isPending}
													type='text'
													defaultValue={field.value}
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<Controller
								control={form.control}
								name='categoryId'
								rules={{
									required: 'Категория обязательна'
								}}
								render={({ field }) => (
									<FormItem>
										<FormLabel>Категория</FormLabel>
										<Select
											disabled={isFetching}
											onValueChange={field.onChange}
											defaultValue={field.value}
										>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder='Категория товара' />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												{categories?.map((category) => (
													<div key={category.id}>
														<SelectItem value={category.id} className="font-semibold">
															{category.name}
														</SelectItem>
														{category.children?.map((child) => (
															<SelectItem
																key={child.id}
																value={child.id}
																className="pl-6" // Отступ для подкатегорий
															>
																{child.name}
															</SelectItem>
														))}
													</div>
												))}
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Controller
								control={form.control}
								name='branchId'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Branch</FormLabel>
										<Select
											disabled={isFetchingBranch}
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
											<TextEditor description={field.name} onChange={field.onChange} />
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
										<FormLabel>Tags</FormLabel>
										<FormControl>
											<Input
												placeholder='Tags'
												disabled={isPending}
												type='text'
												defaultValue={field.value}
												{...field}
											/>
										</FormControl>
										<FormDescription>All tags must be separated by comma</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Controller
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
									<Controller
										control={form.control}
										name='contractTypeId'
										render={({ field }) => (
											<FormItem>
												<FormLabel>Tipo di contratto</FormLabel>
												<Select
													disabled={isFCT}
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
									<Controller
										control={form.control}
										name='modeJobId'
										render={({ field }) => (
											<FormItem>
												<FormLabel>Modalità di lavoro</FormLabel>
												<Select
													disabled={isFMJ}
													onValueChange={field.onChange}
													defaultValue={field.value}
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
									<Controller
										control={form.control}
										name='workingTimeId'
										render={({ field }) => (
											<FormItem>
												<FormLabel>Orario di lavoro</FormLabel>
												<Select
													disabled={isFWT}
													onValueChange={field.onChange}
													defaultValue={field.value}
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
									<Controller
										control={form.control}
										name='levelEducationId'
										render={({ field }) => (
											<FormItem>
												<FormLabel>Livello di istruzione</FormLabel>
												<Select
													disabled={isFLE}
													onValueChange={field.onChange}
													defaultValue={field.value}
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
									<Controller
										control={form.control}
										name='experienceMinimalId'
										render={({ field }) => (
											<FormItem>
												<FormLabel>Esperienza minima richiesta</FormLabel>
												<Select
													disabled={isFEM}
													onValueChange={field.onChange}
													defaultValue={field.value}
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
