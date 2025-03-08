'use client';

import { Button, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from '@/shared/components'
import { useContacts } from '../hooks/useContacts';
import { Textarea } from '@/shared/components/ui';
import Spinner from '@/shared/components/Spinner/Spinner'
import ReCAPTCHA from 'react-google-recaptcha';
import { useTheme } from 'next-themes';
import { MiddleSector } from '@/features/mainComponents';

export default function Contacts() {
    const { theme } = useTheme()
    const { form, onSubmit, isPending, setRecaptchValue } = useContacts()

    return (<>
        <section className="w-full flex flex-col gap-10">
            <div className="border-b border-dashed mb-5 pb-5 text-center w-3/4 mx-auto">
                <h2 className="text-5xl leading-[5rem] font-semibold">Do You Have Any <span className="text-[#1967D3] text-5xl">Questions?</span></h2>
                <p className="mb-3">As opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum</p>
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
                                    required: 'Field is required'
                                }}
                                render={({ field }) => (
                                    <FormItem className='mb-3 w-full bg-'>
                                        <FormLabel className="block font-bold mb-[2px] text-primary">Nome</FormLabel>
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
                                    required: 'Field is required'
                                }}
                                render={({ field }) => (
                                    <FormItem className='mb-3 w-full'>
                                        <FormLabel className="block font-bold mb-[2px] text-primary">Email</FormLabel>
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
                                required: 'Field is required'
                            }}
                            render={({ field }) => (
                                <FormItem className='mb-3 w-full'>
                                    <FormLabel className="block font-bold mb-[2px] text-primary">Messaggio</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder='Messaggio' rows={10} {...field} className='bg-white' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="comment-btn text-center">
                            <div className='w-full py-3 justify-center items-center flex'><ReCAPTCHA sitekey={process.env.GOOGLE_RECAPTCHA_SITE_KEY as string} onChange={setRecaptchValue} theme={theme === 'light' ? 'light' : 'dark'} /></div>
                            <Button type="submit" disabled={isPending}>
                                {isPending ? <Spinner /> : <span>Send</span>}
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </section>
        <MiddleSector />
    </>
    );
}