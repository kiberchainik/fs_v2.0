'use client'

import { Form, Button, Card, CardHeader, CardTitle, CardContent } from '@/shared/components/ui'
import { useSkillsLogic } from '../../../hooks/useSkills'
import { CiEdit, CiTrash } from 'react-icons/ci'
import SkillForm from './SkillForm'

import styles from './skills.module.scss'

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
            <CardHeader className={styles.cardHeader}>
                <CardTitle>Candidat skills</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...addForm}>
                    <form
                        onSubmit={addForm.handleSubmit(handleAddSkill)}
                        className={styles.formWrapper}
                    >
                        <SkillForm formData={addForm} />
                        <Button type='submit' disabled={isAdding}>
                            {isAdding ? 'Adding...' : 'Save'}
                        </Button>
                    </form>
                </Form>

                {skills && (
                    <div className='mt-5'>
                        {skills.map(skill => (
                            <div className={styles.editSkillForm} key={skill.id}>
                                {editingSkillId === skill.id ? (
                                    <Form {...editForm}>
                                        <form
                                            onSubmit={editForm.handleSubmit(() => handleSaveSkill(skill.id))}
                                            className={styles.formWrapper}
                                        >
                                            <SkillForm formData={editForm} />
                                            <div className='flex gap-x-1'>
                                                <Button type='submit' disabled={isSaving}>
                                                    {isSaving ? 'Saving...' : 'Save'}
                                                </Button>
                                                <Button onClick={() => setEditingSkillId(null)}>Cancel</Button>
                                            </div>
                                        </form>
                                    </Form>
                                ) : (
                                    <div className={styles.skillsList}>
                                        <span>
                                            {skill.skill} - {skill.level}
                                        </span>
                                        <div className='flex gap-x-1'>
                                            <Button onClick={() => handleEditSkill(skill)} variant='link'>
                                                <CiEdit />
                                            </Button>
                                            <Button onClick={() => handleDeleteSkill(skill.id)} variant='link' disabled={deletingSkillId === skill.id}>
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