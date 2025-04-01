import { FormControl, FormField, FormItem, FormMessage, Input } from "@/shared/components";
import { UseFormReturn } from "react-hook-form";
import { TypeSocialSchema } from "../../../schemes";

type FormProps = {
    formData: UseFormReturn<TypeSocialSchema, any, TypeSocialSchema>
}

export default function SocialForm({ formData }: FormProps) {
    return (
        <>
            <FormField
                control={formData.control}
                name='social'
                render={({ field }) => (
                    <FormItem className='w-full'>
                        <FormControl>
                            <Input placeholder='Social' {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </>
    )
}