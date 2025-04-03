import { FormControl, FormField, FormItem, FormLabel, FormMessage, Input, Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/shared/components"
import { DateTimePicker } from "@/shared/components/datapicker/Datapicker"
import { UseFormReturn, Controller } from "react-hook-form"
import { TypeEducationSchema } from "../../../schemes"
import { IOptions } from "@/features/agency/vacancy/types"
import { useTranslations } from "next-intl"

type FormProps = {
    levelEducation: IOptions[]
    formData: UseFormReturn<TypeEducationSchema, any, TypeEducationSchema>
}

export default function EducationForm({ formData, levelEducation }: FormProps) {
    const t = useTranslations('curriculum.education')
    return (
        <>
            <div className='flex md:flex-row flex-col w-full gap-3'>
                <Controller
                    control={formData.control}
                    name='levelId'
                    rules={{ required: t('fieldEmpty') }}
                    render={({ field }) => (
                        <FormItem className='w-full'>
                            <Select
                                defaultValue={field.value}
                                onValueChange={field.onChange}
                            >
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder={t('fieldEducation')} />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectGroup>
                                        {levelEducation && levelEducation.map(level => (
                                            <SelectItem value={level.id} key={level.id}>{level.name}</SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={formData.control}
                    name='school'
                    rules={{ required: t('fieldEmpty') }}
                    render={({ field }) => (
                        <FormItem className='w-full'>
                            <FormLabel>{t('fieldInstitute')}</FormLabel>
                            <FormControl>
                                <Input placeholder={t('fieldInstitute')} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={formData.control}
                    name='grade'
                    rules={{ required: t('fieldEmpty') }}
                    render={({ field }) => (
                        <FormItem className='w-full'>
                            <FormLabel>{t('fieldGrade')}</FormLabel>
                            <FormControl>
                                <Input placeholder={t('fieldGrade')} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
            <div className='flex md:flex-row flex-col w-full gap-3 items-end'>
                <Controller
                    control={formData.control}
                    name="dateRange.startdate"
                    rules={{ required: t('fieldEmpty') }}
                    render={({ field }) => (
                        <FormItem className='w-full'>
                            <FormLabel>{t('fieldStartDate')}</FormLabel>
                            <DateTimePicker
                                use12HourFormat={false}
                                value={field.value}
                                defaultMonth={new Date()}
                                onChange={field.onChange}
                                hideTime={true}
                                max={new Date()}
                            />
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Controller
                    control={formData.control}
                    name="dateRange.enddate"
                    rules={{ required: t('fieldEmpty') }}
                    render={({ field }) => (
                        <FormItem className='w-full'>
                            <FormLabel>{t('fieldEndDate')}</FormLabel>
                            <DateTimePicker
                                use12HourFormat={false}
                                value={field.value}
                                defaultMonth={new Date()}
                                onChange={field.onChange}
                                hideTime={true}
                                min={formData.getValues()?.dateRange?.startdate || new Date()}
                                max={new Date()}
                            />
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={formData.control}
                    name='description'
                    render={({ field }) => (
                        <FormItem className='w-full'>
                            <FormLabel>{t('fieldDescription')}</FormLabel>
                            <FormControl>
                                <Input placeholder={t('fieldDescription')} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
        </>
    )
}