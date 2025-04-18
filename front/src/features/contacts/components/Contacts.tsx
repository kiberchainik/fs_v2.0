'use client'

import { Button, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from '@/shared/components'
import { useContacts } from '../hooks/useContacts'
import { Textarea } from '@/shared/components/ui'
import Spinner from '@/shared/components/Spinner/Spinner'
import { useTheme } from 'next-themes'
import { useTranslations } from 'next-intl'

export default function Contacts() {
    const { theme } = useTheme()
    const { form, onSubmit, isPending } = useContacts()
    const t = useTranslations('contactsPage')

    return (
        <section className="w-full flex flex-col gap-10">
            <div className="border-b border-dashed mb-5 pb-5 text-center w-3/4 mx-auto">
                <h2 className="text-5xl leading-[5rem] font-semibold">{t('h2_p1')} <span className="text-[#1967D3] text-5xl">{t('h2_p2')}</span></h2>
                <p className="mb-3">{t('description')}</p>
            </div>
            <div className="w-3/4 mx-auto">
                <Form {...form}>
                    <form
                        className=''
                        onSubmit={form.handleSubmit(onSubmit)}
                    >
                        <div className="flex flex-col md:flex-row gap-5 md-10">
                            <FormField
                                control={form.control}
                                name='name'
                                rules={{
                                    required: t('fieldEmpty')
                                }}
                                render={({ field }) => (
                                    <FormItem className='mb-3 w-full bg-'>
                                        <FormLabel className="block font-bold mb-[2px] text-primary">{t('name')}</FormLabel>
                                        <FormControl>
                                            <Input placeholder='Nome' {...field} className='bg-white py-5' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='email'
                                rules={{
                                    required: t('fieldEmpty')
                                }}
                                render={({ field }) => (
                                    <FormItem className='mb-3 w-full'>
                                        <FormLabel className="block font-bold mb-[2px] text-primary">{t('email')}</FormLabel>
                                        <FormControl>
                                            <Input placeholder='Email' {...field} className='bg-white py-5' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormField
                            control={form.control}
                            name='message'
                            rules={{
                                required: t('fieldEmpty')
                            }}
                            render={({ field }) => (
                                <FormItem className='mb-3 w-full'>
                                    <FormLabel className="block font-bold mb-[2px] text-primary">{t('message')}</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder='Messaggio' rows={10} {...field} className='bg-white' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="comment-btn text-center">
                            <Button type="submit" disabled={isPending}>
                                {isPending ? <Spinner /> : <span>{t('send')}</span>}
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </section>
    );
}