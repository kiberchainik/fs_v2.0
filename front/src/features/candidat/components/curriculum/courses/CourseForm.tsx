import { FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from "@/shared/components";
import { TypeCourseSchema } from "../../../schemes";
import { Controller, UseFormReturn } from "react-hook-form";
import { DateTimePicker } from "@/shared/components/datapicker/Datapicker";

type FormProps = {
    formData: UseFormReturn<TypeCourseSchema, any, undefined>
}

export default function CourseForm({ formData }: FormProps) {
    return (
        <>
            <div className='flex md:flex-row flex-col w-full gap-3'>
                <FormField
                    control={formData.control}
                    name='course'
                    render={({ field }) => (
                        <FormItem className='w-full'>
                            <FormControl>
                                <Input placeholder='Course' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={formData.control}
                    name='institution'
                    render={({ field }) => (
                        <FormItem className='w-full'>
                            <FormControl>
                                <Input placeholder='Institution' {...field} />
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
            <div className='flex md:flex-row flex-col w-full gap-3'>
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
            </div>
        </>
    )
}