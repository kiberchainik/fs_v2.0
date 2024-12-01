'use client'

import { Form, FormField, FormItem, FormControl, FormMessage, Input, Select, SelectTrigger, SelectContent, SelectItem, SelectValue, Button, Card, CardHeader, CardTitle, CardContent } from '@/shared/components/ui'
import { useSkillsLogic } from '../../hooks/useSkills'
import { CiEdit, CiTrash } from 'react-icons/ci'

export default function Skills() {
    const {
        deletingSkillId,
        skills,
        addForm,
        editForm,
        editingSkillId,
        setEditingSkillId,
        handleAddSkill,
        handleEditSkill,
        handleSaveSkill,
        handleDeleteSkill,
        isSaving,
        isAdding
    } = useSkillsLogic()

    return (
        <Card className='md:w-[800px] w-full mx-5 md:mx-0'>
            <CardHeader className='flex flex-row items-center justify-between'>
                <CardTitle>Candidat skills</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...addForm}>
                    <form
                        onSubmit={addForm.handleSubmit(handleAddSkill)}
                        className='flex md:flex-row flex-col gap-3 justify-between items-center'
                    >
                        <FormField
                            control={addForm.control}
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
                        <FormField
                            control={addForm.control}
                            name='level'
                            render={({ field }) => (
                                <FormItem className='w-full'>
                                    <Select onValueChange={field.onChange}>
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
                        <Button type='submit' disabled={isAdding}>
                            {isAdding ? 'Adding...' : 'Save'}
                        </Button>
                    </form>
                </Form>

                {skills && (
                    <div className='mt-5'>
                        {skills.map(skill => (
                            <div className='flex justify-between items-center gap-y-1 p-2' key={skill.id}>
                                {editingSkillId === skill.id ? (
                                    <Form {...editForm}>
                                        <form
                                            onSubmit={editForm.handleSubmit(() => handleSaveSkill(skill.id))}
                                            className='flex md:flex-row flex-col gap-3 justify-between items-center'
                                        >
                                            <FormField
                                                control={editForm.control}
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
                                            <FormField
                                                control={editForm.control}
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
                                            <div className='flex gap-x-2'>
                                                <Button type='submit' disabled={isSaving}>
                                                    {isSaving ? 'Saving...' : 'Save'}
                                                </Button>
                                                <Button onClick={() => setEditingSkillId(null)}>Cancel</Button>
                                            </div>
                                        </form>
                                    </Form>
                                ) : (
                                    <div className='flex justify-between items-center w-full'>
                                        <span>
                                            {skill.skill} - {skill.level}
                                        </span>
                                        <div className='flex gap-x-2'>
                                            <Button onClick={() => handleEditSkill(skill)}>
                                                <CiEdit />
                                            </Button>
                                            <Button onClick={() => handleDeleteSkill(skill.id)} disabled={deletingSkillId === skill.id}>
                                                {deletingSkillId === skill.id ? 'Deleting...' : <CiTrash />}
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
    )
}