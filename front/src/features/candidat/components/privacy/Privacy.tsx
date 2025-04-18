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
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input
} from '@/shared/components'

import { useUpdProfileMutation } from '../../hooks/useUpdProfileMutation'
import { PrivacySchema, TypePrivacySchema } from '../../schemes'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { EnumTokens, saveTokenStorage } from '@/shared/services'
import { DateTimePicker } from '@/shared/components/datapicker/Datapicker'
import { useDeleteProfile, useGetPrivacy } from '../../hooks'
import { useAppSelector } from '@/shared/hooks'
import { ImageUpload } from '../image-upload/ImageUpload'
import TextEditor from '@/shared/components/ui/TextEditor'
import { useTranslations } from 'next-intl'
import { ConfirmModal } from '@/shared/components/modals/ConfirmModals'

export function Privacy() {
	const searchParams = useSearchParams()
	const t = useTranslations('candidat.privacy')
	useEffect(() => {
		const accessToken = searchParams.get(EnumTokens.ACCESS_TOKEN)
		if (accessToken) saveTokenStorage(accessToken)
	}, [searchParams])

	const { data: user, isLoading, error } = useAppSelector(state => state.reducer.user)
	const { privacy, isFetching } = useGetPrivacy()
	const { deleteProfile } = useDeleteProfile()

	const form = useForm<TypePrivacySchema>({
		resolver: zodResolver(PrivacySchema),
		values: {
			avatar: privacy?.avatar || [],
			email: user?.email || '',
			name: privacy?.firstname || '',
			lastname: privacy?.surname || '',
			resident: privacy?.resident || '',
			phone: privacy?.phone || '',
			about_my: privacy?.about_my || '',
			birthday: privacy?.birthday ? new Date(privacy?.birthday) : undefined,
			//isTwoFactorEnabled: false
		}
	})

	const { updProfile, isPending } = useUpdProfileMutation()

	const onSubmit = (values: TypePrivacySchema) => {
		updProfile(values)
	}

	return (
		<Card className='md:w-[800px] w-full mx-5 md:mx-0'>
			<CardHeader className='flex flex-row items-center justify-between'>
				<CardTitle>{t('title')}</CardTitle>
			</CardHeader>
			<CardContent>
				{<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className='grid gap-2 space-y-2'
					>
						<FormField
							control={form.control}
							name='avatar'
							rules={{
								required: t('avatatEmpty')
							}}
							render={({ field }) => (
								<FormItem className='mt-4'>
									<FormLabel>{t('avatar')}</FormLabel>
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
							name='email'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input
											placeholder='ivan@example.com'
											disabled={isFetching}
											type='email'
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='name'
							render={({ field }) => (
								<FormItem>
									<FormLabel>{t('name')}</FormLabel>
									<FormControl>
										<Input
											placeholder='Nome'
											disabled={isFetching}
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
							name='lastname'
							render={({ field }) => (
								<FormItem>
									<FormLabel>{t('surname')}</FormLabel>
									<FormControl>
										<Input
											placeholder='Cognome'
											disabled={isFetching}
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
							name="birthday"
							render={({ field }) => (
								<FormItem>
									<FormLabel>{t('birthday')}</FormLabel>
									<DateTimePicker
										use12HourFormat={false}
										value={field.value}
										defaultMonth={new Date()}
										onChange={field.onChange}
										hideTime={true}
										max={new Date()}
									/>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='resident'
							render={({ field }) => (
								<FormItem>
									<FormLabel>{t('resident')}</FormLabel>
									<FormControl>
										<Input
											placeholder={t('resident')}
											disabled={isFetching}
											type='text'
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Controller
							control={form.control}
							name='about_my'
							render={({ field }) => (
								<FormItem>
									<FormLabel>{t('description')}</FormLabel>
									<FormControl>
										<TextEditor description={field.value} onChange={field.onChange} />
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
									<FormLabel>{t('phone')}</FormLabel>
									<FormControl>
										<Input
											placeholder={t('phone')}
											disabled={isFetching}
											type='text'
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className='flex flex-col md:flex-row gap-2 justify-between'>
							<Button type='submit' disabled={isFetching}>{t('saveBtn')}</Button>
						</div>
					</form>
				</Form>
				}
				<div className='flex flex-col md:flex-row items-center justify-between mt-5 border-t'>
					<span className='text-lg font-bold text-red-700 p-5'>{t('deleteAccountDescription')}</span>
					<ConfirmModal
						title={t('deleteAccount')}
						description={t('deleteAccountDescription')}
						handleClick={() => deleteProfile()}
					>

						<Button variant='destructive'>{t('deleteAccount')}</Button>
					</ConfirmModal>
				</div>
			</CardContent>
		</Card>
	)
}
