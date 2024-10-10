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
	Loader,
	Switch
} from '@/shared/components/ui'

import { useUpdProfileMutation } from '../hooks/useUpdProfileMutation'
import { SettingsSchema, TypeSettingsSchema } from '../schemes'

export function CandidatSettings() {

	const form = useForm<TypeSettingsSchema>({
		resolver: zodResolver(SettingsSchema),
		values: {
			email: '',
			isTwoFactorEnabled: false
		}
	})

	const { updProfile, isPending } = useUpdProfileMutation()

	const onSubmit = (values: TypeSettingsSchema) => {
		updProfile(values)
	}

	return (
		<Card className='w-[400px]'>
			<CardHeader className='flex flex-row items-center justify-between'>
				<CardTitle>Настройки профиля</CardTitle>
			</CardHeader>
			<CardContent>
				{<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className='grid gap-2 space-y-2'
						>
							<FormField
								control={form.control}
								name='email'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Почта</FormLabel>
										<FormControl>
											<Input
												placeholder='ivan@example.com'
												disabled={isPending}
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
								name='isTwoFactorEnabled'
								render={({ field }) => (
									<FormItem className='flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm'>
										<div className='space-y-0.5'>
											<FormLabel>
												Двухфакторная аутентификация
											</FormLabel>
											<FormDescription>
												Включите двухфакторную
												аутентификацию для вашей учетной
												записи
											</FormDescription>
										</div>
										<FormControl>
											<Switch
												checked={field.value}
												onCheckedChange={field.onChange}
											/>
										</FormControl>
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
