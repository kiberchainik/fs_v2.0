'use client'

import { Button, Card, CardContent, CardHeader, CardTitle, Checkbox, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Switch } from "@/shared/components";
import { Controller } from "react-hook-form";
import { driverCategory } from "../../../schemes"

import styles from './lifestatus.module.scss'
import { LifeStateLogic } from "../../../hooks/useLifeStatus";
import { useTranslations } from "next-intl";

export default function LifeStatus() {
    const t = useTranslations('curriculum.lifeStatus')
    const { form, handleForm } = LifeStateLogic()
    return (
        <Card className='w-full'>
            <CardHeader>
                <CardTitle>{t('fieldLifeStatus')}</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(handleForm)}
                        className={styles.formWrapper}
                    >
                        <div className="flex md:flex-row flex-col gap-3 items-center w-full">
                            <Controller
                                control={form.control}
                                name='maritalStatus'
                                rules={{ required: t('fieldEmpty') }}
                                render={({ field }) => (
                                    <FormItem className='w-full'>
                                        <Select
                                            value={field.value}
                                            onValueChange={field.onChange}
                                        >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder={t('maritalStatus')} />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value={t('single')}>{t('single')}</SelectItem>
                                                <SelectItem value={t('married')}>{t('married')}</SelectItem>
                                                <SelectItem value={t('divorced')}>{t('divorced')}</SelectItem>
                                                <SelectItem value={t('widowed')}>{t('widowed')}</SelectItem>
                                                <SelectItem value={t('separated')}>{t('separated')}</SelectItem>
                                                <SelectItem value={t('cohabiting')}>{t('cohabiting')}</SelectItem>
                                                <SelectItem value={t('children')}>{t('children')}</SelectItem>
                                                <SelectItem value={t('noChildren')}>{t('noChildren')}</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="availabilityTransport"
                                render={({ field }) => (
                                    <FormItem className="flex flex-row items-center justify-between gap-3 rounded-full border p-2 shadow-sm w-full">
                                        <div className="space-y-0.5">
                                            <FormLabel>{t('haveAuto')}</FormLabel>
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
                        </div>
                        <Controller
                            control={form.control}
                            name="driverCategory"
                            render={() => (
                                <div className='border rounded-md p-3 w-full'>
                                    <div className="mb-4 w-full text-left">
                                        <FormLabel className="text-base">{t('driverCategory')}</FormLabel>
                                    </div>
                                    <FormItem className="flex flex-wrap items-center gap-3">
                                        {driverCategory.map((item) => (
                                            <FormField
                                                key={item.id}
                                                control={form.control}
                                                name="driverCategory"
                                                render={({ field }) => {
                                                    return (
                                                        <FormItem
                                                            key={item.id}
                                                            className="flex flex-row items-start space-x-3 space-y-0"
                                                        >
                                                            <FormControl>
                                                                <Checkbox
                                                                    checked={field.value?.includes(item.id)}
                                                                    onCheckedChange={(checked) => {
                                                                        return checked
                                                                            ? field.onChange([...field.value, item.id])
                                                                            : field.onChange(
                                                                                field.value?.filter(
                                                                                    (value) => value !== item.id
                                                                                )
                                                                            )
                                                                    }}
                                                                />
                                                            </FormControl>
                                                            <FormLabel className="text-sm font-normal">
                                                                {item.category}
                                                            </FormLabel>
                                                        </FormItem>
                                                    )
                                                }}
                                            />
                                        ))}
                                        <FormMessage />
                                    </FormItem>
                                </div>
                            )}
                        />
                        <Button type='submit' >{t('SaveLanguagesBtn')}</Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}