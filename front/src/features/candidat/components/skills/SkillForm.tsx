import { FormControl, FormField, FormItem, FormMessage, Input, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components";
import { Controller, UseFormReturn } from "react-hook-form";
import { TypeSkillSchema } from "../../schemes";

type FormProps = {
    formData: UseFormReturn<TypeSkillSchema, any, undefined>
}

export default function SkillForm({ formData }: FormProps) {
    return (
        <>
            <FormField
                control={formData.control}
                name='skill'
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
                                <SelectItem value='NONE'>NONE</SelectItem>
                                <SelectItem value='BEGINNER'>BEGINNER</SelectItem>
                                <SelectItem value='EXPERIENCED'>EXPERIENCED</SelectItem>
                                <SelectItem value='EXPERT'>EXPERT</SelectItem>
                            </SelectContent>
                        </Select>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </>
    )
}