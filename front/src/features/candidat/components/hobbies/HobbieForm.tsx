import { FormControl, FormField, FormItem, FormMessage, Input } from "@/shared/components";
import { UseFormReturn } from "react-hook-form";
import { TypeHobbieSchema } from "../../schemes";

type FormProps = {
    formData: UseFormReturn<TypeHobbieSchema, any, undefined>
}

export default function HobbieForm({ formData }: FormProps) {
    return (
        <>
            <FormField
                control={formData.control}
                name='hobbie'
                render={({ field }) => (
                    <FormItem className='w-full'>
                        <FormControl>
                            <Input placeholder='Hobbie' {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </>
    )
}