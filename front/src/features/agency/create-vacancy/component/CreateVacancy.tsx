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

import { VacancySchema, TypeVacancySchema } from '../schemes'
import { useCategory, useCreateVacancyMutation } from '../hooks'
import TextEditor from '@/shared/components/ui/TextEditor'

export function CreateVacancy () {
	const { categories, isFetching } = useCategory()

	const form = useForm<TypeVacancySchema>({
		mode: 'onChange',
		resolver: zodResolver(VacancySchema),
		values: {
			title: '',
			description: '',
			slug: '',
			categoryIds: '',
			location: '',
			province: '',
			region: '',
			branchId: '',
			sectors: [],
			tags: ''
		}
	})
	
	const { createJob, isPending, isSuccess } = useCreateVacancyMutation()
	
	const onSubmit = (values: TypeVacancySchema) => {
		const tagsArray = values.tags?.split(',').map(tag => tag.trim())
		const {tags, ...value} = values
		const newVals = {
			...value,
			tags: tagsArray
		}

		createJob(newVals)
		
		isSuccess && form.reset()
	}
	
	return (
		<Card className='w-[800px]'>
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
							name='categoryIds'
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
											<SelectGroup>
												{categories?.map(category => (
													<SelectItem
														value={category.id}
														key={category.id}
													>
														{category.name}
													</SelectItem>
												))}
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
												disabled={isPending}
												onValueChange={field.onChange}
											>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder='Brach is required' />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												<SelectGroup>
													<SelectItem value={'1'} key={1}>Branch 1</SelectItem>
													<SelectItem value={'2'} key={2}>Branch 2</SelectItem>
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
												{...field}
											/>
										</FormControl>
										<FormDescription>All tags must be separated by comma</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
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
