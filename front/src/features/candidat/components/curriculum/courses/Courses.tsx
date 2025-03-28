'use client'

import { Button, Card, CardHeader, CardTitle, Form } from "@/shared/components"
import { useCourseLogic } from "../../../hooks/useCourses"
import CourseForm from "./CourseForm"
import { CiEdit, CiTrash } from "react-icons/ci"

import styles from './courses.module.scss'
import { useTranslations } from "next-intl"
import Spinner from "@/shared/components/Spinner/Spinner"

export default function Courses() {
    const t = useTranslations('curriculum.courses')
    const {
        courses,
        addForm,
        editForm,
        handleAddCourse,
        handleSaveCourse,
        handleEditCourse,
        handleDeleteCourse,
        setEditCourseId,
        deletingCourseId,
        editCourseId,
        isSaving
    } = useCourseLogic()
    return (
        <Card className="w-full">
            <CardHeader className={styles.cardHeader}>
                <CardTitle>{t('CourseTitle')}</CardTitle>
            </CardHeader>
            <Form {...addForm}>
                <form
                    onSubmit={addForm.handleSubmit(handleAddCourse)}
                    className={styles.formWrapper}
                >
                    <CourseForm formData={addForm} />
                    <Button type='submit'>{t('CreateCourseBtn')}</Button>
                </form>
            </Form>
            {
                courses && (
                    <div className='mt-5 p-6'>
                        {courses.map(course => (
                            <div className={styles.editCourseForm} key={course.id}>
                                {editCourseId === course.id ? (
                                    <Form {...editForm}>
                                        <form
                                            onSubmit={editForm.handleSubmit(() => handleSaveCourse(course.id))}
                                            className={styles.formEditWrapper}
                                        >
                                            <CourseForm formData={editForm} />
                                            <div className='flex gap-x-1'>
                                                <Button type="submit" disabled={isSaving}>
                                                    {isSaving ? <Spinner /> : t('SaveCourseBtn')}
                                                </Button>
                                                <Button onClick={() => setEditCourseId(null)}>
                                                    {t('CancelCourseBtn')}
                                                </Button>
                                            </div>
                                        </form>
                                    </Form>
                                ) : (
                                    <div className={styles.coursesList}>
                                        <div className={styles.course_info}>
                                            <span className={styles.course_info_title}>{course.course}</span> \ <span className={styles.course_info_institution}>{course.institution}</span>
                                        </div>
                                        <div className='flex gap-x-1'>
                                            <Button onClick={() => handleEditCourse(course)} variant='secondary'>
                                                <CiEdit />
                                            </Button>
                                            <Button onClick={() => handleDeleteCourse(course.id)} variant='destructive' disabled={deletingCourseId === course.id}>
                                                {deletingCourseId === course.id ? <Spinner /> : <CiTrash />}
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )
            }
        </Card>
    );
}