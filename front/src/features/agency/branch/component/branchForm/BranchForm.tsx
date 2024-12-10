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

interface BranchFormProps {
    values: TypeBranchSchema
    onSubmit: (values: TypeBranchSchema) => void
    isPending: boolean
}

export function BranchForm({ values, onSubmit, isPending }: BranchFormProps) {
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
                        required: 'Загрузите хотя бы одну картинку'
                    }}
                    render={({ field }) => (
                        <FormItem className='mt-4'>
                            <FormLabel>Filial logo</FormLabel>
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
                            <FormLabel>Filial name</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder='Filial name'
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
                                <FormLabel>Full address</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder='Full address'
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
                <div className='flex md:flex-row flex-col md:gap-x-2 gap-y-2 justify-between'>
                    <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Contact email</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder='Contact email'
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
                                <FormLabel>Contact phone</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder='Contact phone'
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
                                <FormLabel>Fax</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder='Fax'
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
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <TextEditor description={field.value ? field.value : 'About filifal'} onChange={field.onChange} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type='submit' disabled={isPending}>
                    Сохранить
                </Button>
            </form>
        </Form>
    )
}