import { FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from "@/shared/components"
import { DateTimePicker } from "@/shared/components/datapicker/Datapicker"
import { UseFormReturn, Controller } from "react-hook-form"
import { TypeEducationSchema } from "../../schemes"

type FormProps = {
    formData: UseFormReturn<TypeEducationSchema, any, undefined>
}

export default function EducationForm({ formData }: FormProps) {
    return (
        <>
            <div className='flex md:flex-row flex-col w-full gap-3'>
                <FormField
                    control={formData.control}
                    name='degree'
                    render={({ field }) => (
                        <FormItem className='w-full'>
                            <FormControl>
                                <Input placeholder='Degree' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={formData.control}
                    name='school'
                    render={({ field }) => (
                        <FormItem className='w-full'>
                            <FormControl>
                                <Input placeholder='School' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={formData.control}
                    name='grade'
                    render={({ field }) => (
                        <FormItem className='w-full'>
                            <FormControl>
                                <Input placeholder='Grade' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
            <div className='flex md:flex-row flex-col w-full gap-3 items-end'>
                <Controller
                    control={formData.control}
                    name="dateRange.startdate"
                    render={({ field }) => (
                        <FormItem className='w-full'>
                            <FormLabel>Start day</FormLabel>
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
                    render={({ field }) => (
                        <FormItem className='w-full'>
                            <FormLabel>End day</FormLabel>
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
                <FormField
                    control={formData.control}
                    name='description'
                    render={({ field }) => (
                        <FormItem className='w-full'>
                            <FormControl>
                                <Input placeholder='Description' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
        </>
    )
}