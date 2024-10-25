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
	Switch
} from '@/shared/components/ui'

import { useGetAgencyData, useUpdProfileMutation } from '../hooks'
import { SettingsSchema, TypeSettingsSchema } from '../schemes'
import { ImageUpload } from './image-upload/ImageUpload'

export function AgencySettings() {
	const {user, isLoading, error} = useGetAgencyData()

	const form = useForm<TypeSettingsSchema>({
		mode: 'onChange',
		resolver: zodResolver(SettingsSchema),
		values: {
			logo: user?.logo || [],
			agency_name: user?.agency_name || '',
			address: user?.address || '',
			phone: user?.phone || '',
			about: user?.about || '',
			p_iva_c_f: user?.p_iva_c_f || '',
			isTwoFactorEnabled: false
		}
	})
	
	const { updProfile, isPending } = useUpdProfileMutation()
	
	const onSubmit = (values: TypeSettingsSchema) => {
		updProfile(values)
	}
	
	return (
		<Card className='w-[800px]'>
			<CardHeader className='flex flex-row items-center justify-between'>
				<CardTitle>Настройки профиля агентства</CardTitle>
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
								name='logo'
								rules={{
									required: 'Загрузите хотя бы одну картинку'
								}}
								render={({ field }) => (
									<FormItem className='mt-4'>
										<FormLabel>Logo</FormLabel>
										<FormControl>
											<ImageUpload
												isDisabled={isLoading}
												onChange={field.onChange}
												value={field.value}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='agency_name'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Agency name</FormLabel>
										<FormControl>
											<Input
												placeholder='Agency name'
												disabled={isLoading}
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
								name='address'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Agency address</FormLabel>
										<FormControl>
											<Input
												placeholder='Agency address'
												disabled={isLoading}
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
								name='about'
								render={({ field }) => (
									<FormItem>
										<FormLabel>About agency</FormLabel>
										<FormControl>
											<Input
												placeholder='About agency'
												disabled={isLoading}
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
								name='phone'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Agency contacts</FormLabel>
										<FormControl>
											<Input
												placeholder='Agency contacts'
												disabled={isLoading}
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
								name='p_iva_c_f'
								render={({ field }) => (
									<FormItem>
										<FormLabel>P.IVA/CF</FormLabel>
										<FormControl>
											<Input
												placeholder='P.IVA/CF'
												disabled={isLoading}
												type='text'
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button type='submit' disabled={isLoading}>
								Сохранить
							</Button>
						</form>
					</Form>
				}
			</CardContent>
		</Card>
	)
}
