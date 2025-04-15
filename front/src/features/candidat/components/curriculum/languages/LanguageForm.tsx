import { Button, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components";
import { UseFormReturn } from "react-hook-form";
import { TypeLanguageSchema } from "../../../schemes";
import { useTranslations } from "next-intl";

type FormProps = {
    formData: UseFormReturn<TypeLanguageSchema, any, TypeLanguageSchema>
}

export default function LanguageForm({ formData }: FormProps) {
    const t = useTranslations('curriculum.languages')
    return (
        <>
            <FormField
                control={formData.control}
                name='language'
                rules={{ required: t('fieldEmpty') }}
                render={({ field }) => (
                    <FormItem className='w-full'>
                        <FormLabel>{t('fieldLanguage')}</FormLabel>
                        <FormControl>
                            <Input placeholder={t('fieldLanguage')} {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={formData.control}
                name='level'
                rules={{ required: t('fieldEmpty') }}
                render={({ field }) => (
                    <FormItem className='w-full'>
                        <FormLabel>{t('fieldLevel')}</FormLabel>
                        <Select
                            value={field.value}
                            onValueChange={field.onChange}
                        >
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder={t('fieldLevel')} />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                <SelectItem value={t('levelbasic')}>{t('levelbasic')}</SelectItem>
                                <SelectItem value={t('levelintermediate')}>{t('levelintermediate')}</SelectItem>
                                <SelectItem value={t('leveladvanced')}>{t('leveladvanced')}</SelectItem>
                                <SelectItem value={t('levelfluent')}>{t('levelfluent')}</SelectItem>
                            </SelectContent>
                        </Select>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </>
    )
}