import { Button, Form, FormControl, FormField, FormItem, FormMessage, Input, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components";
import { UseFormReturn } from "react-hook-form";
import { TypeLanguageSchema } from "../../../schemes";

type FormProps = {
    formData: UseFormReturn<TypeLanguageSchema, any, undefined>
}

export default function LanguageForm({ formData }: FormProps) {
    return (
        <>
            <FormField
                control={formData.control}
                name='language'
                render={({ field }) => (
                    <FormItem className='w-full'>
                        <FormControl>
                            <Input placeholder='Lanuage' {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
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
                                    <SelectValue placeholder='Lanuage level' />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                <SelectItem value='NONE'>NONE</SelectItem>
                                <SelectItem value='NATIVESPEAKER'>NATIVESPEAKER</SelectItem>
                                <SelectItem value='BASIC'>BASIC</SelectItem>
                                <SelectItem value='VERYGOOD'>VERYGOOD</SelectItem>
                                <SelectItem value='FLUENT'>FLUENT</SelectItem>
                            </SelectContent>
                        </Select>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </>
    )
}