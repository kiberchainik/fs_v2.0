'use client'

import { Form, Button, Card, CardHeader, CardTitle, CardContent } from '@/shared/components/ui'
import { useLanguagesLogic } from '../../../hooks'
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

    return (
        <Card className='w-full'>
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
                    <div className='mt-5 p-6'>
                        {languages.map(language => (
                            <div className={styles.editLanguagesForm} key={language.id}>
                                {editingLanguageId === language.id ? (
                                    <Form {...editForm}>
                                        <form
                                            onSubmit={editForm.handleSubmit(() => handleSaveLanguage(language.id))}
                                            className={styles.formEditWrapper}
                                        >
                                            <LanuageForm formData={editForm} />
                                            <div className='flex gap-x-1'>
                                                <Button type='submit' disabled={isSaving}>
                                                    {isSaving ? 'Saving...' : 'Save'}
                                                </Button>
                                                <Button onClick={() => setEditingLanguageId(null)}>Cancel</Button>
                                            </div>
                                        </form>
                                    </Form>
                                ) : (
                                    <div className={styles.languagesList}>
                                        <div className={styles.border_language_info}>
                                            <span className={styles.language_info_title}>{language.language}</span> \ <span className={styles.language_info_grade}>{language.level}</span>
                                        </div>
                                        <div className='flex gap-x-1'>
                                            <Button onClick={() => handleEditLanguage(language)} variant='secondary'>
                                                <CiEdit />
                                            </Button>
                                            <Button onClick={() => handleDeleteLanguage(language.id)} variant='destructive' disabled={deletingLanguageId === language.id}>
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