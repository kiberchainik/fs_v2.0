import {
    Button,
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    Input,
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/shared/components/ui'
import { useGetExperienceMinimal, useGetLevelEducation, useGetModeJob, useGetOptionsContractTypes, useGetWorkingTime } from '../../hooks'
import { useGetBranch } from '@/features/agency/branch/hooks'
import { useCategory } from '@/features/category/hooks'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TypeVacancySchema, VacancySchema } from '../../schemes'
import TextEditor from '@/shared/components/ui/TextEditor'
import { DateTimePicker } from '@/shared/components/datapicker/Datapicker'

import styles from './vacancy.module.scss'
import Spinner from '@/shared/components/Spinner/Spinner'

interface FormProps {
    values: TypeVacancySchema
    onSubmit: (values: TypeVacancySchema) => void
    isPending: boolean
    isSuccess: boolean
    defaultValues?: TypeVacancySchema
}

export function VacancyForm({ values, isPending, onSubmit, isSuccess, defaultValues }: FormProps) {
    const { categories, isFetching } = useCategory()
    const { contractType, isFetching: isFCT } = useGetOptionsContractTypes()
    const { experienceMinimal, isFetching: isFEM } = useGetExperienceMinimal()
    const { levelEducation, isFetching: isFLE } = useGetLevelEducation()
    const { modeJob, isFetching: isFMJ } = useGetModeJob()
    const { workingTime, isFetching: isFWT } = useGetWorkingTime()

    const { branches, isFetching: isFetchingBranch } = useGetBranch()

    const form = useForm<TypeVacancySchema>({
        mode: 'onChange',
        resolver: zodResolver(VacancySchema),
        values
    })

    // if (isSuccess) {
    //     form.reset(defaultValues)
    // }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='grid gap-2 space-y-2'
            >
                <FormField
                    control={form.control}
                    name='title'
                    rules={{
                        required: 'Title is required'
                    }}
                    render={({ field }) => (
                        <FormItem className='mt-4'>
                            <FormLabel>Job title</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder='Job title'
                                    disabled={isPending}
                                    type='text'
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className='flex md:flex-row flex-col md:gap-x-2 gap-y-2 justify-between'>
                    <FormField
                        control={form.control}
                        name='location'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Location</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder='Location'
                                        disabled={isPending}
                                        type='text'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='province'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Province</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder='Province'
                                        disabled={isPending}
                                        type='text'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='region'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Region</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder='Region'
                                        disabled={isPending}
                                        type='text'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <Controller
                    control={form.control}
                    name='categoryId'
                    rules={{
                        required: 'Категория обязательна'
                    }}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Категория</FormLabel>
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                            >
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder='Категория' />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {categories?.map((category) => (
                                        <div key={category.id}>
                                            <SelectItem value={category.id} className="font-semibold">
                                                {category.name}
                                            </SelectItem>
                                            {category.children?.map((child) => (
                                                <SelectItem
                                                    key={child.id}
                                                    value={child.id}
                                                    className="pl-6"
                                                >
                                                    {child.name}
                                                </SelectItem>
                                            ))}
                                        </div>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {branches && <Controller
                    control={form.control}
                    name='branchId'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Branch</FormLabel>
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                            >
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder='Brach is required' />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectGroup>
                                        {branches.map(branch => (
                                            <SelectItem value={branch.id} key={branch.id}>{branch.name}</SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </FormItem>
                    )}
                />}
                <Controller
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <TextEditor description={field.value} onChange={field.onChange} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='tags'
                    render={({ field }) => (
                        <FormItem>
                            <div className='flex justify-between items-center'>
                                <FormLabel>Tags</FormLabel>
                                {/* <FormLabel>
                                        <Button variant='link' onClick={() => GenerateDescriptionBtn(field.value)}>Generate description with tags</Button>
                                    </FormLabel> */}
                            </div>
                            <FormControl>
                                <Input
                                    placeholder='Tags'
                                    disabled={isPending}
                                    type='text'
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>All tags must be separated by comma</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Controller
                    control={form.control}
                    name="reallyUpTo"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel>Reall up to</FormLabel>
                            <DateTimePicker
                                use12HourFormat={false}
                                value={field.value}
                                defaultMonth={new Date()}
                                onChange={field.onChange}
                                hideTime={true}
                                min={new Date()}
                            />
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className={styles.options_job}>
                    <div className={styles.options_job_label}>
                        <FormLabel>Opzionale</FormLabel>
                    </div>
                    <div className={styles.options_job_fields}>
                        <Controller
                            control={form.control}
                            name='contractTypeId'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Tipo di contratto</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder='Tipo di contratto' />
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
                                </FormItem>
                            )}
                        />
                        <Controller
                            control={form.control}
                            name='modeJobId'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Modalità di lavoro</FormLabel>
                                    <Select
                                        defaultValue={field.value}
                                        onValueChange={field.onChange}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder='Modalità di lavoro' />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectGroup>
                                                {modeJob ? modeJob.map(mode => (
                                                    <SelectItem value={mode.id} key={mode.id}>{mode.name}</SelectItem>
                                                )) : <SelectItem value='0' key={'without_branch'}>Non ci sono i dati</SelectItem>}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </FormItem>
                            )}
                        />
                        <Controller
                            control={form.control}
                            name='workingTimeId'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Orario di lavoro</FormLabel>
                                    <Select
                                        defaultValue={field.value}
                                        onValueChange={field.onChange}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder='Orario di lavoro' />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectGroup>
                                                {workingTime ? workingTime.map(time => (
                                                    <SelectItem value={time.id} key={time.id}>{time.name}</SelectItem>
                                                )) : <SelectItem value='0' key={'without_branch'}>Non ci sono i dati</SelectItem>}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </FormItem>
                            )}
                        />
                        <Controller
                            control={form.control}
                            name='levelEducationId'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Livello di istruzione</FormLabel>
                                    <Select
                                        defaultValue={field.value}
                                        onValueChange={field.onChange}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder='Livello di istruzione' />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectGroup>
                                                {levelEducation ? levelEducation.map(level => (
                                                    <SelectItem value={level.id} key={level.id}>{level.name}</SelectItem>
                                                )) : <SelectItem value='0' key={'without_branch'}>Non ci sono i dati</SelectItem>}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </FormItem>
                            )}
                        />
                        <Controller
                            control={form.control}
                            name='experienceMinimalId'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Esperienza minima richiesta</FormLabel>
                                    <Select
                                        defaultValue={field.value}
                                        onValueChange={field.onChange}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder='Esperienza minima richiesta' />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectGroup>
                                                {experienceMinimal ? experienceMinimal.map(experience => (
                                                    <SelectItem value={experience.id} key={experience.id}>{experience.name}</SelectItem>
                                                )) : <SelectItem value='0' key={'without_branch'}>Non ci sono i dati</SelectItem>}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </FormItem>
                            )}
                        />
                    </div>
                </div>
                <Button type='submit' disabled={isPending}>
                    {isPending ? <Spinner /> : <span>Save</span>}
                </Button>
            </form>
        </Form>
    )
}