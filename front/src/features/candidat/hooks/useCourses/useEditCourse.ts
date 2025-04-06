import { useRef, useState } from "react"
import { useCourses, useCreateCourse, useDeleteCourse, useUpdCourse } from "./useCourse"
import { useForm } from "react-hook-form"
import { CourseSchema, TypeCourseSchema } from "../../schemes"
import { zodResolver } from "@hookform/resolvers/zod"
import { ICourses } from "../../types"
import { toast } from "sonner"

export const useCourseLogic = () => {
    const [editCourseId, setEditCourseId] = useState<string | null>(null)
    const deletingCourseId = useRef<string | null>(null)

    const { courses, isFetching } = useCourses()
    const { newCourse, isPendingCreate, isError } = useCreateCourse()
    const { course, isPendingUpdate } = useUpdCourse()
    const { deleteCourse, isPendingDelete } = useDeleteCourse()

    const addForm = useForm<TypeCourseSchema, any, TypeCourseSchema>({
        mode: 'onChange',
        resolver: zodResolver(CourseSchema),
        defaultValues: {
            course: '',
            grade: '',
            institution: '',
            dateRange: {
                startdate: new Date(),
                enddate: new Date(),
            },
        }
    })

    const editForm = useForm<TypeCourseSchema, any, TypeCourseSchema>({
        mode: 'onChange',
        resolver: zodResolver(CourseSchema)
    })

    const handleAddCourse = (value: TypeCourseSchema) => {
        const { dateRange, ...courseDate } = value
        newCourse({
            data: {
                ...courseDate,
                enddate: dateRange.enddate,
                startdate: dateRange.startdate
            }
        })
        if (!isError) addForm.reset()
    }

    const handleEditCourse = (course: ICourses) => {
        setEditCourseId(course.id)
        editForm.reset({
            course: course.course,
            grade: course.grade,
            institution: course.institution,
            dateRange: {
                enddate: course.enddate,
                startdate: course.startdate
            }
        })
    }

    const handleSaveCourse = async (id: string) => {
        const courseData = editForm.getValues()
        const isValid = editForm.formState.isValid

        if (isValid) return

        try {
            const { dateRange, ...courseEditDate } = courseData
            course({
                id,
                data: {
                    ...courseEditDate,
                    enddate: dateRange.enddate,
                    startdate: dateRange.startdate
                }
            })
            setEditCourseId(null)
        } catch (error) {
            toast.error(`Failed to update course`)
        }
    }

    const handleDeleteCourse = (id: string) => {
        deletingCourseId.current = id
        deleteCourse({ id }, {
            onSettled: () => {
                deletingCourseId.current = null
            }
        })
    }

    return {
        deletingCourseId: deletingCourseId.current,
        courses,
        addForm,
        editForm,
        editCourseId,
        setEditCourseId,
        handleAddCourse,
        handleEditCourse,
        handleSaveCourse,
        handleDeleteCourse,
        isSaving: isPendingUpdate,
        isDeleting: isPendingDelete,
        isAdding: isPendingCreate
    }
}