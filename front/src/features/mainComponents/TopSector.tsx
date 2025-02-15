'use client'

import { Button, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input, Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/shared/components"
import { zodResolver } from "@hookform/resolvers/zod"
import Image from "next/image"
import { FilterVacancySchema, TypeFilterVacancies } from "../filter/schemes/filter.schema"
import { useForm } from "react-hook-form";
import { useCategory } from "../category/hooks"
import { useGetOptionsContractTypes } from "../agency/vacancy/hooks"
import { useFilterVacancy } from "../filter/hooks/useFilterVacancy"

import styles from './maincomponents.module.scss'
import { useTranslations } from "next-globe-gen"

export const TopSector = () => {
    const t = useTranslations();
    const { categories, isFetching } = useCategory()
    const { contractType, isFetching: isFCT } = useGetOptionsContractTypes()
    const { filterParams } = useFilterVacancy()
    const form = useForm<TypeFilterVacancies>({
        mode: 'onChange',
        resolver: zodResolver(FilterVacancySchema),
        values: {
            categoryId: '',
            location: '',
            contractTypeId: ''
        }
    })

    const onSubmit = (values: TypeFilterVacancies) => {
        filterParams(values)
    }
    return (
        <div className={styles.wrapper_sector}>
            <div className={styles.hero_banner}>
                <div className={styles.hero_banner__content}>
                    <h1>{t('topsector.topSector.h1')}</h1>
                    <p>
                        Esplora le nostre categorie di offerte di lavoro e scopri numerose opportunità in vari settori.
                        Dagli ingegneri ai contabili, dalle risorse umane ai tecnici informatici: abbiamo annunci aggiornati per tutte le figure professionali richieste oggi.
                        Trova la tua posizione ideale e candidati facilmente online.
                    </p>
                    <div className={styles.hero_banner__content__tags}>
                        <span>
                            <a href="#">#operaio</a>
                        </span>
                        <span>
                            <a href="#">#contabile</a>
                        </span>
                        <span>
                            <a href="#">#economista</a>
                        </span>
                        <span>
                            <a href="#">#venditore</a>
                        </span>
                        <span>
                            <a href="#">#autista</a>
                        </span>
                    </div>
                </div>
                <div className={styles.hero_banner__image}>
                    <div className={styles.hero_banner__image__img}>
                        <Image
                            src="/ban-image1.png"
                            alt="lavoro-ideale"
                            quality={100}
                            width={500}
                            height={500}
                            layout="responsive"
                            className="!w-[500px] !h-[500px]"
                        />
                    </div>
                </div>
            </div>
            <div className={styles.hero_form}>
                {<Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                        <div className='shadow-2xl shadow-sky-300/20 p-10 bg-white mb-2 rounded-3xl'>
                            <div className='flex md:flex-row flex-col gap-5 items-center justify-between'>
                                <div className='w-full border-none md:border-r md:border-solid border-gray-100 md:pr-5'>
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
                                                        <FormLabel className='text-lg font-bold text-[#17233e]'>Settore</FormLabel>
                                                        <Select
                                                            disabled={isFetching}
                                                            onValueChange={field.onChange}
                                                            defaultValue={field.value}
                                                        >
                                                            <FormControl>
                                                                <SelectTrigger className="!border-none !shadow-none">
                                                                    <SelectValue placeholder='Settore' />
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
                                <div className='w-full border-none md:border-r md:border-solid border-gray-100 md:pr-5'>
                                    <div className="form-group">
                                        <div className="input-box">
                                            <FormField
                                                control={form.control}
                                                name='location'
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className='text-lg font-bold text-[#17233e]'>Località</FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                placeholder='Località'
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
                                <div className='w-full border-none md:border-r md:border-solid border-gray-100 md:pr-5'>
                                    <div className="form-group">
                                        <div className="input-box">
                                            <FormField
                                                control={form.control}
                                                name='contractTypeId'
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className='text-lg font-bold text-[#17233e]'>Tipo di contratto</FormLabel>
                                                        <Select
                                                            onValueChange={field.onChange}
                                                            defaultValue={field.value}
                                                            disabled={isFCT}
                                                        >
                                                            <FormControl>
                                                                <SelectTrigger className="!border-none !shadow-none">
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
                                        </div>
                                    </div>
                                </div>
                                <Button type='submit'>Cerca</Button>
                            </div>
                        </div>
                    </form>
                </Form>}
            </div>
        </div>
    )
}