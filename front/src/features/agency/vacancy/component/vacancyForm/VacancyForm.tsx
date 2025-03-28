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
import { useTranslations } from 'next-intl'

interface FormProps {
    values: TypeVacancySchema
    onSubmit: (values: TypeVacancySchema) => void
    isPending: boolean
    isSuccess: boolean
    defaultValues?: TypeVacancySchema
}

export function VacancyForm({ values, isPending, onSubmit, isSuccess, defaultValues }: FormProps) {
    const t = useTranslations('agencyVacancy.vacancyForm')
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
                        required: t('titleEmpty')
                    }}
                    render={({ field }) => (
                        <FormItem className='mt-4'>
                            <FormLabel>{t('title')}</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder={t('title')}
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
                        rules={{
                            required: t('localEmpty')
                        }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('local')}</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder={t('local')}
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
                        rules={{
                            required: t('provinceEmpty')
                        }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('province')}</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder={t('province')}
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
                        rules={{
                            required: t('regionEmpty')
                        }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('region')}</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder={t('region')}
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
                        required: t('categoryEmpty')
                    }}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t('category')}</FormLabel>
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                            >
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder={t('category')} />
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
                            <FormLabel>{t('branch')}</FormLabel>
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                            >
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder={t('branch')} />
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
                    rules={{
                        required: t('descriptionEmpty')
                    }}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t('description')}</FormLabel>
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
                                <FormLabel>{t('tags')}</FormLabel>
                                {/* <FormLabel>
                                        <Button variant='link' onClick={() => GenerateDescriptionBtn(field.value)}>Generate description with tags</Button>
                                    </FormLabel> */}
                            </div>
                            <FormControl>
                                <Input
                                    placeholder={t('tags')}
                                    disabled={isPending}
                                    type='text'
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>{t('tagsDescription')}</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Controller
                    control={form.control}
                    name="reallyUpTo"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel>{t('reallyUpTo')}</FormLabel>
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
                        <FormLabel>{t('optional')}</FormLabel>
                    </div>
                    <div className={styles.options_job_fields}>
                        <Controller
                            control={form.control}
                            name='contractTypeId'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{t('contract')}</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder={t('contract')} />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectGroup>
                                                {contractType && contractType.map(type => (
                                                    <SelectItem value={type.id} key={type.id}>{type.name}</SelectItem>
                                                ))}
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
                                    <FormLabel>{t('modejob')}</FormLabel>
                                    <Select
                                        defaultValue={field.value}
                                        onValueChange={field.onChange}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder={t('modejob')} />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectGroup>
                                                {modeJob && modeJob.map(mode => (
                                                    <SelectItem value={mode.id} key={mode.id}>{mode.name}</SelectItem>
                                                ))}
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
                                    <FormLabel>{t('workSchedule')}</FormLabel>
                                    <Select
                                        defaultValue={field.value}
                                        onValueChange={field.onChange}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder={t('workSchedule')} />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectGroup>
                                                {workingTime && workingTime.map(time => (
                                                    <SelectItem value={time.id} key={time.id}>{time.name}</SelectItem>
                                                ))}
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
                                    <FormLabel>{t('eduacation')}</FormLabel>
                                    <Select
                                        defaultValue={field.value}
                                        onValueChange={field.onChange}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder={t('eduacation')} />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectGroup>
                                                {levelEducation && levelEducation.map(level => (
                                                    <SelectItem value={level.id} key={level.id}>{level.name}</SelectItem>
                                                ))}
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
                                    <FormLabel>{t('experience')}</FormLabel>
                                    <Select
                                        defaultValue={field.value}
                                        onValueChange={field.onChange}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder={t('experience')} />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectGroup>
                                                {experienceMinimal && experienceMinimal.map(experience => (
                                                    <SelectItem value={experience.id} key={experience.id}>{experience.name}</SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </FormItem>
                            )}
                        />
                    </div>
                </div>
                <Button type='submit' disabled={isPending}>
                    {isPending ? <Spinner /> : <span>{t('fromBtn')}</span>}
                </Button>
            </form>
        </Form>
    )
}