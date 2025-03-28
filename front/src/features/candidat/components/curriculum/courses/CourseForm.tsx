import { FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from "@/shared/components";
import { TypeCourseSchema } from "../../../schemes";
import { Controller, UseFormReturn } from "react-hook-form";
import { DateTimePicker } from "@/shared/components/datapicker/Datapicker";
import { useTranslations } from "next-intl";

type FormProps = {
    formData: UseFormReturn<TypeCourseSchema, any, undefined>
}

export default function CourseForm({ formData }: FormProps) {
    const t = useTranslations('curriculum.courses')
    return (
        <>
            <div className='flex md:flex-row flex-col w-full gap-3'>
                <FormField
                    control={formData.control}
                    name='course'
                    rules={{
                        required: t('fieldEmpty')
                    }}
                    render={({ field }) => (
                        <FormItem className='w-full'>
                            <FormLabel>{t('fieldCourse')}</FormLabel>
                            <FormControl>
                                <Input placeholder={t('fieldCourse')} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={formData.control}
                    name='institution'
                    rules={{
                        required: t('fieldEmpty')
                    }}
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
                    rules={{
                        required: t('fieldEmpty')
                    }}
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
            <div className='flex md:flex-row flex-col w-full gap-3'>
                <Controller
                    control={formData.control}
                    name="dateRange.startdate"
                    rules={{
                        required: t('fieldEmpty')
                    }}
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
                    rules={{
                        required: t('fieldEmpty')
                    }}
                    render={({ field }) => (
                        <FormItem className='w-full'>
                            <FormLabel>{t('fieldEndDate')}</FormLabel>
                            <DateTimePicker
                                use12HourFormat={false}
                                value={field.value}
                                defaultMonth={new Date()}
                                onChange={field.onChange}
                                hideTime={true}
                                min={formData.getValues().dateRange.startdate}
                                max={new Date()}
                            />
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
        </>
    )
}