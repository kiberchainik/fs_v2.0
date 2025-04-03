import { FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from "@/shared/components";
import { UseFormReturn } from "react-hook-form";
import { TypeSocialSchema } from "../../../schemes";
import { useTranslations } from "next-intl";

type FormProps = {
    formData: UseFormReturn<TypeSocialSchema, any, TypeSocialSchema>
}

export default function SocialForm({ formData }: FormProps) {
    const t = useTranslations('curriculum.social')
    return (
        <>
            <FormField
                control={formData.control}
                name='social'
                rules={{ required: t('fieldEmpty') }}
                render={({ field }) => (
                    <FormItem className='w-full'>
                        <FormLabel>{t('fieldSocialLink')}</FormLabel>
                        <FormControl>
                            <Input placeholder='Social link' {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </>
    )
}