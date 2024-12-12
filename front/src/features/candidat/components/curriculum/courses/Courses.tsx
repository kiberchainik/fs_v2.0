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
        <Card className="md:w-[800px] w-full mx-5 md:mx-0">
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
                    <div className='mt-5'>
                        {courses.map(course => (
                            <div className={styles.editCourseForm} key={course.id}>
                                {editCourseId === course.id ? (
                                    <Form {...editForm}>
                                        <form
                                            onSubmit={editForm.handleSubmit(() => handleSaveCourse(course.id))}
                                            className={styles.formWrapper}
                                        >
                                            <CourseForm formData={editForm} />
                                            <div className='flex gap-x-2'>
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
                                        <span>{course.course}</span>
                                        <div className='flex gap-x-2'>
                                            <Button onClick={() => handleEditCourse(course)}>
                                                <CiEdit />
                                            </Button>
                                            <Button onClick={() => handleDeleteCourse(course.id)} disabled={deletingCourseId === course.id}>
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