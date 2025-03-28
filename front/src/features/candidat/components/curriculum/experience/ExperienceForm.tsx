import { Checkbox, FormControl, FormField, FormItem, FormLabel, FormMessage, Input, Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/shared/components"
import { DateTimePicker } from "@/shared/components/datapicker/Datapicker"
import { UseFormReturn, Controller } from "react-hook-form"
import { TypeExperienceSchema } from "../../../schemes"
import { IOptions } from "@/features/agency/vacancy/types"
import { useTranslations } from "next-intl"

type FormProps = {
    contractType: IOptions[]
    formData: UseFormReturn<TypeExperienceSchema, any, undefined>
}

export default function ExperienceForm({ formData, contractType }: FormProps) {
    const t = useTranslations('curriculum.experience')
    return (
        <>
            <div className='flex md:flex-row flex-col w-full gap-3'>
                <FormField
                    control={formData.control}
                    name='company'
                    rules={{ required: t('fieldEmpty') }}
                    render={({ field }) => (
                        <FormItem className='w-full'>
                            <FormLabel>{t('fieldCompany')}</FormLabel>
                            <FormControl>
                                <Input placeholder={t('fieldCompany')} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Controller
                    control={formData.control}
                    name='contractTypeId'
                    rules={{ required: t('fieldEmpty') }}
                    render={({ field }) => (
                        <FormItem className='w-full'>
                            <Select
                                value={field.value}
                                onValueChange={field.onChange}
                            >
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder={t('fieldContractType')} />
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
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={formData.control}
                    name='location'
                    rules={{ required: t('fieldEmpty') }}
                    render={({ field }) => (
                        <FormItem className='w-full'>
                            <FormLabel>{t('fieldLocation')}</FormLabel>
                            <FormControl>
                                <Input placeholder={t('fieldLocation')} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={formData.control}
                    name='description'
                    render={({ field }) => (
                        <FormItem className='w-full'>
                            <FormControl>
                                <Input placeholder={t('fieldDescription')} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
            <div className='flex md:flex-row flex-col w-full gap-3'>
                <Controller
                    control={formData.control}
                    name="dateRange.startDate"
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
                    name="dateRange.endDate"
                    render={({ field }) => (
                        <FormItem className='w-full'>
                            <FormLabel>{t('fieldEndDate')}</FormLabel>
                            <DateTimePicker
                                use12HourFormat={false}
                                value={field.value}
                                defaultMonth={new Date()}
                                onChange={field.onChange}
                                hideTime={true}
                                min={formData.getValues().dateRange.startDate}
                                max={new Date()}
                            />
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={formData.control}
                    name='currently'
                    render={({ field }) => (
                        <FormItem className="w-full flex flex-row items-end h-full mt-[30px] space-x-3 space-y-0 rounded-full border p-3 shadow-sm">
                            <FormControl>
                                <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                                <FormLabel>
                                    {t('CurrentExperience')}
                                </FormLabel>
                            </div>
                        </FormItem>
                    )}
                />
            </div>
        </>
    )
}