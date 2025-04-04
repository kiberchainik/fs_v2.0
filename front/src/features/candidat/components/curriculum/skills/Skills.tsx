'use client'

import { Form, Button, Card, CardHeader, CardTitle, CardContent } from '@/shared/components/ui'
import { useSkillsLogic } from '../../../hooks/useSkills'
import { CiEdit, CiTrash } from 'react-icons/ci'
import SkillForm from './SkillForm'

import styles from './skills.module.scss'
import { useTranslations } from 'next-intl'
import Spinner from '@/shared/components/Spinner/Spinner'

export default function Skills() {
    const t = useTranslations('curriculum.skills')
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
        <Card className='w-full'>
            <CardHeader className={styles.cardHeader}>
                <CardTitle>{t('SkillsTitle')}</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...addForm}>
                    <form
                        onSubmit={addForm.handleSubmit(handleAddSkill)}
                        className={styles.formWrapper}
                    >
                        <SkillForm formData={addForm} />
                        <Button type='submit' disabled={isAdding}>
                            {isAdding ? <Spinner /> : t('CreateSkillsBtn')}
                        </Button>
                    </form>
                </Form>

                {skills && (
                    <div className='mt-5 p-6'>
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
                                                    {isSaving ? <Spinner /> : t('SaveSkillsBtn')}
                                                </Button>
                                                <Button onClick={() => setEditingSkillId(null)}>{t('CancelSkillsBtn')}</Button>
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
                                                {deletingSkillId === skill.id ? <Spinner /> : <CiTrash />}
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