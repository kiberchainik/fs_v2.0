'use client'

import { Button, Card, CardHeader, CardTitle, Form } from "@/shared/components";
import { useEducationLogic } from "../../../hooks/useEducation";

import styles from './education.module.scss'
import { CiEdit, CiTrash } from "react-icons/ci";
import EducationForm from "./EducationForm";

export default function Education() {
    const {
        deletingEducationId,
        education,
        addForm,
        editForm,
        editEducationId,
        setEditEducationId,
        handleAddEducation,
        handleEditEducation,
        handleSaveEducation,
        handleDeleteEducation,
        isSaving,
        isDelete,
        isAdding
    } = useEducationLogic()

    return (
        <Card className="md:w-[800px] w-full mx-5 md:mx-0">
            <CardHeader className={styles.cardHeader}>
                <CardTitle>Candidat education</CardTitle>
            </CardHeader>
            <Form {...addForm}>
                <form
                    onSubmit={addForm.handleSubmit(handleAddEducation)}
                    className={styles.formWrapper}
                >
                    <EducationForm formData={addForm} />
                    <Button type='submit' disabled={isAdding}>
                        Add course
                    </Button>
                </form>
            </Form>
            {
                education && (
                    <div className='mt-5'>
                        {
                            education.map(item => (
                                <div className={styles.editEducationForm} key={item.id}>
                                    {
                                        editEducationId === item.id ? (
                                            <Form {...editForm}>
                                                <form
                                                    onSubmit={editForm.handleSubmit(() => handleSaveEducation(item.id))}
                                                    className={styles.formWrapper}
                                                >
                                                    <EducationForm formData={editForm} />
                                                    <div className='flex gap-x-2'>
                                                        <Button type='submit' disabled={isSaving}>
                                                            {isSaving ? 'Saving...' : 'Save'}
                                                        </Button>
                                                        <Button onClick={() => setEditEducationId(null)}>
                                                            Cancel
                                                        </Button>
                                                    </div>
                                                </form>
                                            </Form>
                                        ) : (
                                            <div className={styles.educationList}>
                                                <span>{item.degree}</span>
                                                <div className='flex gap-x-2'>
                                                    <Button onClick={() => handleEditEducation(item)}>
                                                        <CiEdit />
                                                    </Button>
                                                    <Button onClick={() => handleDeleteEducation(item.id)} disabled={deletingEducationId === item.id}>
                                                        {deletingEducationId === item.id ? 'Deleting...' : <CiTrash />}
                                                    </Button>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </Card>
    );
}