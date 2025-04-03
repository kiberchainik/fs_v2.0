import { FormControl, FormField, FormItem, FormMessage, Input, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components";
import { Controller, UseFormReturn } from "react-hook-form";
import { TypeSkillSchema } from "../../../schemes";
import { useTranslations } from "next-intl";

type FormProps = {
    formData: UseFormReturn<TypeSkillSchema, any, TypeSkillSchema>
}

export default function SkillForm({ formData }: FormProps) {
    const t = useTranslations('curriculum.skills')
    return (
        <>
            <FormField
                control={formData.control}
                name='skill'
                rules={{ required: t('fieldEmpty') }}
                render={({ field }) => (
                    <FormItem className='w-full'>
                        <FormControl>
                            <Input placeholder='Skill' {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <Controller
                control={formData.control}
                name='level'
                render={({ field }) => (
                    <FormItem className='w-full'>
                        <Select
                            value={field.value}
                            onValueChange={field.onChange}
                        >
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder='Skill level' />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                <SelectItem value={t('begginer')}>{t('begginer')}</SelectItem>
                                <SelectItem value={t('experienced')}>{t('experienced')}</SelectItem>
                                <SelectItem value={t('expert')}>{t('expert')}</SelectItem>
                            </SelectContent>
                        </Select>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </>
    )
}