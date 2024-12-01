'use client'

import { Form, Button, Card, CardHeader, CardTitle, CardContent } from '@/shared/components/ui'
import { useLanguagesLogic } from '../../hooks/useLanguages'
import { CiEdit, CiTrash } from 'react-icons/ci'
import LanuageForm from './LanguageForm'

import styles from './languages.module.scss'

export default function Languages() {
    const {
        addForm,
        deletingLanguageId,
        editForm,
        editingLanguageId,
        handleAddLanguage,
        handleDeleteLanguage,
        handleEditLanguage,
        handleSaveLanguage,
        isAdding,
        isDeleting,
        isSaving,
        languages,
        setEditingLanguageId
    } = useLanguagesLogic()

    console.log(typeof (languages));


    return (
        <Card className='md:w-[800px] w-full mx-5 md:mx-0'>
            <CardHeader className={styles.cardHeader}>
                <CardTitle>Candidat lanuages</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...addForm}>
                    <form
                        onSubmit={addForm.handleSubmit(handleAddLanguage)}
                        className={styles.formWrapper}
                    >
                        <LanuageForm formData={addForm} />
                        <Button type='submit' disabled={isAdding}>
                            {isAdding ? 'Adding...' : 'Save'}
                        </Button>
                    </form>
                </Form>

                {languages && (
                    <div className='mt-5'>
                        {languages.map(language => (
                            <div className={styles.editLanuageForm} key={language.id}>
                                {editingLanguageId === language.id ? (
                                    <Form {...editForm}>
                                        <form
                                            onSubmit={editForm.handleSubmit(() => handleSaveLanguage(language.id))}
                                            className={styles.formWrapper}
                                        >
                                            <LanuageForm formData={editForm} />
                                            <div className='flex gap-x-2'>
                                                <Button type='submit' disabled={isSaving}>
                                                    {isSaving ? 'Saving...' : 'Save'}
                                                </Button>
                                                <Button onClick={() => setEditingLanguageId(null)}>Cancel</Button>
                                            </div>
                                        </form>
                                    </Form>
                                ) : (
                                    <div className={styles.lanuagesList}>
                                        <span>
                                            {language.language} - {language.level}
                                        </span>
                                        <div className='flex gap-x-2'>
                                            <Button onClick={() => handleEditLanguage(language)}>
                                                <CiEdit />
                                            </Button>
                                            <Button onClick={() => handleDeleteLanguage(language.id)} disabled={deletingLanguageId === language.id}>
                                                {deletingLanguageId === language.id ? 'Deleting...' : <CiTrash />}
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