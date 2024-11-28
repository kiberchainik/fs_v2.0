'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import {
    Button,
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    Input,
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/shared/components/ui'

import { TypeSkillSchema, SkillSchema } from '../../schemes'
import { useCreateSkill, useSkills } from '../../hooks'

export default function Skills() {
    const { newSkill, isPending } = useCreateSkill()
    const { skills, isFetching } = useSkills()
    const form = useForm<TypeSkillSchema>({
        mode: 'onChange',
        resolver: zodResolver(SkillSchema),
        values: {
            level: '',
            skill: ''
        }
    })

    const onSubmit = (values: TypeSkillSchema) => {
        newSkill(values)
        form.reset()
    }

    return (
        <Card className='md:w-[800px] w-full mx-5 md:mx-0'>
            <CardHeader className='flex flex-row items-center justify-between'>
                <CardTitle>Candidat skills</CardTitle>
            </CardHeader>
            <CardContent>
                {
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <div className='flex md:flex-row flex-col gap-3'>
                                <FormField
                                    control={form.control}
                                    name='skill'
                                    rules={{
                                        required: 'Skill is required'
                                    }}
                                    render={({ field }) => (
                                        <FormItem className='mt-4'>
                                            <FormLabel>Skill</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder='Skill'
                                                    //disabled={isPending}
                                                    type='text'
                                                    //defaultValue={field.value}
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name='level'
                                    rules={{
                                        required: 'Skill level is required'
                                    }}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Skill level</FormLabel>
                                            <Select
                                                //disabled={isFetching}
                                                onValueChange={field.onChange}
                                            //defaultValue={field.value}
                                            >
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder='Категория товара' />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value='NONE' key={'NONE'}>NONE</SelectItem>
                                                    <SelectItem value='BEGINNER' key={'BEGINNER'}>BEGINNER</SelectItem>
                                                    <SelectItem value='EXPERIENCED' key={'EXPERIENCED'}>EXPERIENCED</SelectItem>
                                                    <SelectItem value='EXPERT' key={'EXPERT'}>EXPERT</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <Button type='submit'>
                                Сохранить
                            </Button>
                        </form>
                    </Form>
                }
                {skills && skills.map(skill => (
                    <p>
                        <span>{skill.skill}</span> - <span>{skill.level}</span>
                    </p>
                ))}
            </CardContent>
        </Card>
    )
}