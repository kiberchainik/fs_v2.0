import { FormControl, FormField, FormItem, FormMessage, Input } from "@/shared/components";
import { UseFormReturn } from "react-hook-form";
import { TypeHobbieSchema } from "../../../schemes";
import { useTranslations } from "next-intl";

type FormProps = {
    formData: UseFormReturn<TypeHobbieSchema, any, undefined>
}

export default function HobbieForm({ formData }: FormProps) {
    const t = useTranslations('curriculum.hobbies')
    return (
        <>
            <FormField
                control={formData.control}
                name='hobbie'
                rules={{ required: t('fieldEmpty') }}
                render={({ field }) => (
                    <FormItem className='w-full'>
                        <FormControl>
                            <Input placeholder={t('fieldHobbies')} {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </>
    )
}