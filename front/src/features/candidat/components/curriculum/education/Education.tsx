'use client'

import { Button, Card, CardHeader, CardTitle, Form } from "@/shared/components";
import { useEducationLogic } from "../../../hooks/useEducation";

import styles from './education.module.scss'
import { CiEdit, CiTrash } from "react-icons/ci";
import EducationForm from "./EducationForm";
import { formatDate } from "@/shared/utils";

export default function Education() {
    const {
        deletingEducationId,
        education,
        addForm,
        editForm,
        editEducationId,
        levelEducation,
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
                    <EducationForm formData={addForm} levelEducation={levelEducation!} />
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
                                                    <EducationForm formData={editForm} levelEducation={levelEducation!} />
                                                    <div className='flex gap-x-1'>
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
                                                <div>
                                                    <div>{item.school}</div>
                                                    <div>{item.grade}</div>
                                                    <div>{formatDate(item.startdate, { dateFormat: 'year' })} - {formatDate(item.enddate, { dateFormat: 'year' })}</div>
                                                    {item.description && <div>{item.description}</div>}
                                                </div>
                                                <div className='flex gap-x-1'>
                                                    <Button onClick={() => handleEditEducation(item)} variant='link'>
                                                        <CiEdit />
                                                    </Button>
                                                    <Button onClick={() => handleDeleteEducation(item.id)} variant='link' disabled={deletingEducationId === item.id}>
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