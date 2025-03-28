import {
    Button,
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    Input
} from '@/shared/components/ui'
import { Controller, useForm } from 'react-hook-form'
import { ImageUpload } from '../image-upload/ImageUpload'
import TextEditor from '@/shared/components/ui/TextEditor'
import { BranchSchema, TypeBranchSchema } from '../../schemes'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'

interface BranchFormProps {
    values: TypeBranchSchema
    onSubmit: (values: TypeBranchSchema) => void
    isPending: boolean
}

export function BranchForm({ values, onSubmit, isPending }: BranchFormProps) {
    const t = useTranslations('branch.branchForm')
    const form = useForm<TypeBranchSchema>({
        mode: 'onChange',
        resolver: zodResolver(BranchSchema),
        values
    })

    return (
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
                                    isDisabled={isPending}
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
                    name='name'
                    rules={{
                        required: 'Title is required'
                    }}
                    render={({ field }) => (
                        <FormItem className='mt-4'>
                            <FormLabel>{t('labelName')}</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder={t('labelName')}
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
                        name='address'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('labelAdress')}</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder={t('labelAdress')}
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
                        name='location'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('labelLocation')}</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder={t('labelLocation')}
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
                                <FormLabel>{t('labelRegion')}</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder={t('labelRegion')}
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
                <div className='flex md:flex-row flex-col md:gap-x-2 gap-y-2 justify-between'>
                    <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('labelEmail')}</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder={t('labelEmail')}
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
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('Telefono')}</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder={t('Telefono')}
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
                        name="fax"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('labelFax')}</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder={t('labelFax')}
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
                    name="about_branch"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t('labelDescription')}</FormLabel>
                            <FormControl>
                                <TextEditor description={field.value ? field.value : t('labelDescription')} onChange={field.onChange} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type='submit' disabled={isPending}>
                    {t('dranchBtn')}
                </Button>
            </form>
        </Form>
    )
}