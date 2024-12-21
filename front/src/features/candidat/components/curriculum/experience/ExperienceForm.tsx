import { Checkbox, FormControl, FormField, FormItem, FormLabel, FormMessage, Input, Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/shared/components"
import { DateTimePicker } from "@/shared/components/datapicker/Datapicker"
import { UseFormReturn, Controller } from "react-hook-form"
import { TypeExperienceSchema } from "../../../schemes"
import { IOptions } from "@/features/agency/vacancy/types"

type FormProps = {
    contractType: IOptions[]
    formData: UseFormReturn<TypeExperienceSchema, any, undefined>
}

export default function ExperienceForm({ formData, contractType }: FormProps) {
    return (
        <>
            <div className='flex md:flex-row flex-col w-full gap-3'>
                <FormField
                    control={formData.control}
                    name='company'
                    render={({ field }) => (
                        <FormItem className='w-full'>
                            <FormControl>
                                <Input placeholder='Company' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Controller
                    control={formData.control}
                    name='contractTypeId'
                    render={({ field }) => (
                        <FormItem className='w-full'>
                            <Select
                                value={field.value}
                                onValueChange={field.onChange}
                            >
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder='Contract type' />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectGroup>
                                        {contractType ? contractType.map(type => (
                                            <SelectItem value={type.id} key={type.id}>{type.name}</SelectItem>
                                        )) : <SelectItem value='0' key={'without_branch'}>Non ci sono i dati</SelectItem>}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={formData.control}
                    name='location'
                    render={({ field }) => (
                        <FormItem className='w-full'>
                            <FormControl>
                                <Input placeholder='Location' {...field} />
                            </FormControl>
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
            <div className='flex md:flex-row flex-col w-full gap-3'>
                <Controller
                    control={formData.control}
                    name="dateRange.startDate"
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
                    name="dateRange.endDate"
                    render={({ field }) => (
                        <FormItem className='w-full'>
                            <FormLabel>End day</FormLabel>
                            <DateTimePicker
                                use12HourFormat={false}
                                value={field.value}
                                defaultMonth={new Date()}
                                onChange={field.onChange}
                                hideTime={true}
                                min={formData.getValues().dateRange.startDate}
                                max={new Date()}
                            />
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={formData.control}
                    name='currently'
                    render={({ field }) => (
                        <FormItem className="w-full flex flex-row items-end h-full mt-[30px] space-x-3 space-y-0 rounded-full border p-3 shadow-sm">
                            <FormControl>
                                <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                                <FormLabel>
                                    Current work
                                </FormLabel>
                            </div>
                        </FormItem>
                    )}
                />
            </div>
        </>
    )
}