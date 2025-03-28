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
import { useTranslations } from 'next-intl'

export function AgencySettings() {
	const t = useTranslations('agencySettings')
	const { user, isLoading, error } = useGetAgencyData()

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
			url: user?.url || '',
			isTwoFactorEnabled: false
		}
	})

	const { updProfile, isPending } = useUpdProfileMutation()

	const onSubmit = (values: TypeSettingsSchema) => {
		updProfile(values)
	}

	return (
		<Card className='md:w-[800px] w-full mx-5 md:mx-0'>
			<CardHeader className='flex flex-row items-center justify-between'>
				<CardTitle>{t('formTitle')}</CardTitle>
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
									required: t('labelLogoEmpty')
								}}
								render={({ field }) => (
									<FormItem className='mt-4'>
										<FormLabel>{t('labelLogo')}</FormLabel>
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
										<FormLabel>{t('labelAgencyName')}</FormLabel>
										<FormControl>
											<Input
												placeholder={t('labelAgencyName')}
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
										<FormLabel>{t('labelAgencyAdress')}</FormLabel>
										<FormControl>
											<Input
												placeholder={t('labelAgencyAdress')}
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
										<FormLabel>{t('labelAgencyAbout')}</FormLabel>
										<FormControl>
											<Input
												placeholder={t('labelAgencyAbout')}
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
										<FormLabel>{t('labelAgencyContacts')}</FormLabel>
										<FormControl>
											<Input
												placeholder={t('labelAgencyContacts')}
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
										<FormLabel>{t('labelAgencyCF')}</FormLabel>
										<FormControl>
											<Input
												placeholder={t('labelAgencyCF')}
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
								name='url'
								render={({ field }) => (
									<FormItem>
										<FormLabel>{t('labelAgencyURL')}</FormLabel>
										<FormControl>
											<Input
												placeholder={t('labelAgencyURL')}
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
								{t('labelAgencyBtn')}
							</Button>
						</form>
					</Form>
				}
			</CardContent>
		</Card>
	)
}
