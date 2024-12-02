'use client'

import { Form, Button, Card, CardHeader, CardTitle, CardContent } from '@/shared/components/ui'
import { useHobbiesLogic } from '../../hooks/useHobbies'
import { CiEdit, CiTrash } from 'react-icons/ci'
import HobbieForm from './HobbieForm'

import styles from './hobbies.module.scss'

export default function Hobbies() {
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
        <Card className='md:w-[800px] w-full mx-5 md:mx-0'>
            <CardHeader className={styles.cardHeader}>
                <CardTitle>Candidat hobbies</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...addForm}>
                    <form
                        onSubmit={addForm.handleSubmit(handleAddHobbie)}
                        className={styles.formWrapper}
                    >
                        <HobbieForm formData={addForm} />
                        <Button type='submit' disabled={isAdding}>
                            {isAdding ? 'Adding...' : 'Save'}
                        </Button>
                    </form>
                </Form>

                {hobbies && (
                    <div className='mt-5'>
                        {hobbies.map(hobbie => (
                            <div className={styles.editHobbieForm} key={hobbie.id}>
                                {editingHobbieId === hobbie.id ? (
                                    <Form {...editForm}>
                                        <form
                                            onSubmit={editForm.handleSubmit(() => handleSaveHobbie(hobbie.id))}
                                            className={styles.formWrapper}
                                        >
                                            <HobbieForm formData={editForm} />
                                            <div className='flex gap-x-2'>
                                                <Button type='submit' disabled={isSaving}>
                                                    {isSaving ? 'Saving...' : 'Save'}
                                                </Button>
                                                <Button onClick={() => setEditingHobbieId(null)}>Cancel</Button>
                                            </div>
                                        </form>
                                    </Form>
                                ) : (
                                    <div className={styles.hobbiesList}>
                                        <span>
                                            {hobbie.hobbie}
                                        </span>
                                        <div className='flex gap-x-2'>
                                            <Button onClick={() => handleEditHobbie(hobbie)}>
                                                <CiEdit />
                                            </Button>
                                            <Button onClick={() => handleDeleteHobbie(hobbie.id)} disabled={deletingHobbieId === hobbie.id}>
                                                {deletingHobbieId === hobbie.id ? 'Deleting...' : <CiTrash />}
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