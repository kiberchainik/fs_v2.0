'use client'

import { Button, Card, CardContent, CardHeader, CardTitle, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input, Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/shared/components";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { FilterVacancySchema, TypeFilterVacancies } from "../schemes/filter.schema"
import { useGetOptionsContractTypes, useGetExperienceMinimal, useGetLevelEducation, useGetModeJob, useGetWorkingTime } from "@/features/agency/vacancy/hooks";
import { useCategory } from "@/features/category/hooks"
import { useFilterVacancy } from "../hooks/useFilterVacancy"
import { useAppDispatch, useAppSelector } from "@/shared/hooks"
import { useEffect } from "react"
import { setCountTotalJobs, setError, setJobs, setLoading, setPageCount } from "@/features/vacancy/slice/sliceVacancy"

export function Filter() {
    const { categories, isFetching } = useCategory()
    const { contractType, isFetching: isFCT } = useGetOptionsContractTypes()
    const { experienceMinimal, isFetching: isFEM } = useGetExperienceMinimal()
    const { levelEducation, isFetching: isFLE } = useGetLevelEducation()
    const { modeJob, isFetching: isFMJ } = useGetModeJob()
    const { workingTime, isFetching: isFWT } = useGetWorkingTime()

    const { filterParams, FilterList, isPending } = useFilterVacancy()

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (FilterList?.items) {
            dispatch(setJobs(FilterList.items))
            dispatch(setCountTotalJobs(FilterList.count!))
            dispatch(setPageCount(FilterList.pageCount!))
            dispatch(setLoading(false))
        }

        if (!FilterList?.items) {
            dispatch(setError('error'))
            dispatch(setLoading(false))
        }
    }, [FilterList?.items])

    const form = useForm<TypeFilterVacancies>({
        mode: 'onChange',
        resolver: zodResolver(FilterVacancySchema),
        values: {
            categoryId: '',
            location: '',
            contractTypeId: '',
            experienceMinimalId: '',
            levelEducationId: '',
            modeJobId: '',
            workingTimeId: ''
        }
    })

    const onSubmit = (values: TypeFilterVacancies) => {
        filterParams(values)
    }

    return (
        <>
            {<Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='grid gap-2 space-y-2'>
                    <FormField
                        control={form.control}
                        name='categoryId'
                        rules={{
                            required: 'Категория обязательна'
                        }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Категория</FormLabel>
                                <Select
                                    disabled={isFetching}
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder='Категория товара' />
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
                    <FormField
                        control={form.control}
                        name='location'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Location</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder='Location'
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
                        name='contractTypeId'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Tipo di contratto</FormLabel>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    disabled={isFCT}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder='Tipo di contratto' />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectGroup>
                                            {contractType ? contractType.map(type => (
                                                <SelectItem value={type.id} key={type.id}>{type.name}</SelectItem>
                                            )) : <SelectItem value='0' key={'without_branch'}>Non ci sono i dati</SelectItem>}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='modeJobId'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Modalità di lavoro</FormLabel>
                                <Select
                                    defaultValue={field.value}
                                    onValueChange={field.onChange}
                                    disabled={isFMJ}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder='Modalità di lavoro' />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectGroup>
                                            {modeJob ? modeJob.map(mode => (
                                                <SelectItem value={mode.id} key={mode.id}>{mode.name}</SelectItem>
                                            )) : <SelectItem value='0' key={'without_branch'}>Non ci sono i dati</SelectItem>}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='workingTimeId'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Orario di lavoro</FormLabel>
                                <Select
                                    defaultValue={field.value}
                                    onValueChange={field.onChange}
                                    disabled={isFWT}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder='Orario di lavoro' />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectGroup>
                                            {workingTime ? workingTime.map(time => (
                                                <SelectItem value={time.id} key={time.id}>{time.name}</SelectItem>
                                            )) : <SelectItem value='0' key={'without_branch'}>Non ci sono i dati</SelectItem>}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='levelEducationId'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Livello di istruzione</FormLabel>
                                <Select
                                    defaultValue={field.value}
                                    onValueChange={field.onChange}
                                    disabled={isFLE}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder='Livello di istruzione' />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectGroup>
                                            {levelEducation ? levelEducation.map(level => (
                                                <SelectItem value={level.id} key={level.id}>{level.name}</SelectItem>
                                            )) : <SelectItem value='0' key={'without_branch'}>Non ci sono i dati</SelectItem>}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='experienceMinimalId'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Esperienza minima richiesta</FormLabel>
                                <Select
                                    defaultValue={field.value}
                                    onValueChange={field.onChange}
                                    disabled={isFEM}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder='Esperienza minima richiesta' />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectGroup>
                                            {experienceMinimal ? experienceMinimal.map(experience => (
                                                <SelectItem value={experience.id} key={experience.id}>{experience.name}</SelectItem>
                                            )) : <SelectItem value='0' key={'without_branch'}>Non ci sono i dati</SelectItem>}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </FormItem>
                        )}
                    />
                    <Button type='submit' disabled={isPending}>
                        Выбрать вакансии
                    </Button>
                </form>
            </Form>}
        </>
    )
}