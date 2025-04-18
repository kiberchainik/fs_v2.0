'use client'

import { Button, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input, Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/shared/components"
import { useTopSector } from "../hooks/useTopSector"

export function MainFilterVacancy({ sector, locationForm, contractTypeForm, btn }: { sector: string, locationForm: string, contractTypeForm: string, btn: string }) {
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
                                                required: 'Seleziona settore'
                                            }}
                                            render={({ field }) => (
                                                <FormItem className="border-none">
                                                    <FormLabel className='text-lg font-bold text-[#17233e] dark:text-slate-300'>{sector}</FormLabel>
                                                    <Select
                                                        disabled={isFetching}
                                                        onValueChange={field.onChange}
                                                        defaultValue={field.value}
                                                    >
                                                        <FormControl>
                                                            <SelectTrigger className="!border-none !shadow-none">
                                                                <SelectValue placeholder={sector} />
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
                                                    <FormLabel className='text-lg font-bold text-[#17233e] dark:text-slate-300'>{locationForm}</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder={locationForm}
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
                                                    <FormLabel className='text-lg font-bold text-[#17233e] dark:text-slate-300'>{contractTypeForm}</FormLabel>
                                                    <Select
                                                        onValueChange={field.onChange}
                                                        defaultValue={field.value}
                                                        disabled={isFCT}
                                                    >
                                                        <FormControl>
                                                            <SelectTrigger className="!border-none !shadow-none">
                                                                <SelectValue placeholder={contractTypeForm} />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>
                                                            <SelectGroup>
                                                                {contractType && contractType.map(type => (
                                                                    <SelectItem value={type.id} key={type.id}>{type.name}</SelectItem>
                                                                ))}
                                                            </SelectGroup>
                                                        </SelectContent>
                                                    </Select>
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </div>
                            </div>
                            <Button type='submit'>{btn}</Button>
                        </div>
                    </div>
                </form>
            </Form>}
        </>
    )
}