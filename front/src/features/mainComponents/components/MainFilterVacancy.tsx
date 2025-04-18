'use client'

import { Button, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input, Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/shared/components"
import { useTranslations } from "next-intl"

import { useTopSector } from "../hooks/useTopSector"

export function MainFilterVacancy() {
    const t = useTranslations('homePage.topSector')
    const { form, categories, isFetching, onSubmit, isFCT, contractType } = useTopSector()
    return (
        <>
            {<Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                    <div className='shadow-2xl shadow-sky-300/20 p-10 bg-white mb-2 rounded-3xl dark:bg-neutral-900 dark:shadow-sky-600/10'>
                        <div className='flex md:flex-row flex-col gap-5 items-center justify-between'>
                            <div className='w-full border-none md:border-r md:border-solid border-gray-100 dark:border-gray-700 md:pr-5'>
                                <div className="form-group">
                                    <div className="input-box">
                                        <FormField
                                            control={form.control}
                                            name='categoryId'
                                            rules={{
                                                required: 'Selezina settore'
                                            }}
                                            render={({ field }) => (
                                                <FormItem className="border-none">
                                                    <FormLabel className='text-lg font-bold text-[#17233e] dark:text-slate-300'>{t('sector')}</FormLabel>
                                                    <Select
                                                        disabled={isFetching}
                                                        onValueChange={field.onChange}
                                                        defaultValue={field.value}
                                                    >
                                                        <FormControl>
                                                            <SelectTrigger className="!border-none !shadow-none">
                                                                <SelectValue placeholder={t('sector')} />
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
                                    </div>
                                </div>
                            </div>
                            <div className='w-full border-none md:border-r md:border-solid border-gray-100 dark:border-gray-700 md:pr-5'>
                                <div className="form-group">
                                    <div className="input-box">
                                        <FormField
                                            control={form.control}
                                            name='location'
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className='text-lg font-bold text-[#17233e] dark:text-slate-300'>{t('località')}</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder={t('località')}
                                                            type='text'
                                                            {...field}
                                                            className="!border-none !shadow-none"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='w-full border-none md:border-r md:border-solid border-gray-100 dark:border-gray-700 md:pr-5'>
                                <div className="form-group">
                                    <div className="input-box">
                                        <FormField
                                            control={form.control}
                                            name='contractTypeId'
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className='text-lg font-bold text-[#17233e] dark:text-slate-300'>{t('contractType')}</FormLabel>
                                                    <Select
                                                        onValueChange={field.onChange}
                                                        defaultValue={field.value}
                                                        disabled={isFCT}
                                                    >
                                                        <FormControl>
                                                            <SelectTrigger className="!border-none !shadow-none">
                                                                <SelectValue placeholder={t('contractType')} />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>
                                                            <SelectGroup>
                                                                {contractType ? contractType.map(type => (
                                                                    <SelectItem value={type.id} key={type.id}>{type.name}</SelectItem>
                                                                )) : <SelectItem value='0' key={'without_branch'}>{t('without_branch')}</SelectItem>}
                                                            </SelectGroup>
                                                        </SelectContent>
                                                    </Select>
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </div>
                            </div>
                            <Button type='submit'>{t('search_btn')}</Button>
                        </div>
                    </div>
                </form>
            </Form>}
        </>
    )
}