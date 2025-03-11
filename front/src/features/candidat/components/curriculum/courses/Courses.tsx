'use client'

import { Button, Card, CardHeader, CardTitle, Form } from "@/shared/components"
import { useCourseLogic } from "../../../hooks/useCourses"
import CourseForm from "./CourseForm"
import { CiEdit, CiTrash } from "react-icons/ci"

import styles from './courses.module.scss'

export default function Courses() {
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
                <CardTitle>Candidat courses</CardTitle>
            </CardHeader>
            <Form {...addForm}>
                <form
                    onSubmit={addForm.handleSubmit(handleAddCourse)}
                    className={styles.formWrapper}
                >
                    <CourseForm formData={addForm} />
                    <Button type='submit'>
                        Add course
                    </Button>
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
                                                    {isSaving ? 'Saving...' : 'Save'}
                                                </Button>
                                                <Button onClick={() => setEditCourseId(null)}>
                                                    Cancel
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
                                                {deletingCourseId === course.id ? 'Deleting...' : <CiTrash />}
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