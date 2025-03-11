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
        <Card className="w-full">
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
                    <div className='mt-5 p-6'>
                        {
                            education.map(item => (
                                <div className={styles.editEducationForm} key={item.id}>
                                    {
                                        editEducationId === item.id ? (
                                            <Form {...editForm}>
                                                <form
                                                    onSubmit={editForm.handleSubmit(() => handleSaveEducation(item.id))}
                                                    className={styles.formEditWrapper}
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
                                                <div className={styles.border_education_info}>
                                                    <div className={styles.education_info_title}>{item.school}</div>
                                                    <div className={styles.education_info_grade}><span className={styles.education_info_years}>{formatDate(item.startdate, { dateFormat: 'year' })} - {formatDate(item.enddate, { dateFormat: 'year' })}</span> \ <span>{item.grade}</span></div>
                                                    {item.description && <div className={styles.education_info_description}>{item.description}</div>}
                                                </div>
                                                <div className='flex gap-x-2'>
                                                    <Button onClick={() => handleEditEducation(item)} variant='secondary' className='p-3'>
                                                        <CiEdit className='text-lg' />
                                                    </Button>
                                                    <Button onClick={() => handleDeleteEducation(item.id)} variant='destructive' disabled={deletingEducationId === item.id} className='p-3'>
                                                        {deletingEducationId === item.id ? 'Deleting...' : <CiTrash className='text-lg text-white' />}
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