'use client'

import { Form, Button, Card, CardHeader, CardTitle, CardContent } from '@/shared/components/ui'
import { useHobbiesLogic } from '../../../hooks/useHobbies'
import { CiEdit, CiTrash } from 'react-icons/ci'
import HobbieForm from './HobbieForm'

import styles from './hobbies.module.scss'
import { useTranslations } from 'next-intl'
import Spinner from '@/shared/components/Spinner/Spinner'

export default function Hobbies() {
    const t = useTranslations('curriculum.hobbies')
    const {
        deletingHobbieId,
        hobbies,
        addForm,
        editForm,
        editingHobbieId,
        setEditingHobbieId,
        handleAddHobbie,
        handleEditHobbie,
        handleSaveHobbie,
        handleDeleteHobbie,
        isSaving,
        isAdding
    } = useHobbiesLogic()

    return (
        <Card className='w-full'>
            <CardHeader className={styles.cardHeader}>
                <CardTitle>{t('HobbiesTitle')}</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...addForm}>
                    <form
                        onSubmit={addForm.handleSubmit(handleAddHobbie)}
                        className={styles.formWrapper}
                    >
                        <HobbieForm formData={addForm} />
                        <Button type='submit' disabled={isAdding}>
                            {isAdding ? <Spinner /> : t('CreateHobbiesBtn')}
                        </Button>
                    </form>
                </Form>

                {hobbies && (
                    <div className='mt-5 p-6'>
                        {hobbies.map(hobbie => (
                            <div className={styles.editHobbieForm} key={hobbie.id}>
                                {editingHobbieId === hobbie.id ? (
                                    <Form {...editForm}>
                                        <form
                                            onSubmit={editForm.handleSubmit(() => handleSaveHobbie(hobbie.id))}
                                            className={styles.formWrapper}
                                        >
                                            <HobbieForm formData={editForm} />
                                            <div className='flex gap-x-1'>
                                                <Button type='submit' disabled={isSaving}>
                                                    {isSaving ? <Spinner /> : t('SaveHobbiesBtn')}
                                                </Button>
                                                <Button onClick={() => setEditingHobbieId(null)}>{t('CancelHobbiesBtn')}</Button>
                                            </div>
                                        </form>
                                    </Form>
                                ) : (
                                    <div className={styles.hobbiesList}>
                                        <span>
                                            {hobbie.hobbie}
                                        </span>
                                        <div className='flex gap-x-1'>
                                            <Button onClick={() => handleEditHobbie(hobbie)} variant='link'>
                                                <CiEdit />
                                            </Button>
                                            <Button onClick={() => handleDeleteHobbie(hobbie.id)} variant='link' disabled={deletingHobbieId === hobbie.id}>
                                                {deletingHobbieId === hobbie.id ? <Spinner /> : <CiTrash />}
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