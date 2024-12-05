import { useRef, useState } from "react"
import { useCreateEducation, useDeleteEducation, useEducation, useUpdEducation } from "./useEducation"
import { useForm } from "react-hook-form"
import { EducationSchema, TypeEducationSchema } from "../../schemes/education.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { IEducation } from "../../types"
import { toast } from "sonner"

export const useEducationLogic = () => {
    const [editEducationId, setEditEducationId] = useState<string | null>(null)
    const deleteEducationId = useRef<string | null>(null)

    const { education, isFetching } = useEducation()
    const { newEducation, isPendingCreate, isError } = useCreateEducation()
    const { updEducation, isPendingUpdate } = useUpdEducation()
    const { deleteEducation, isPendingDelete } = useDeleteEducation()

    const addForm = useForm<TypeEducationSchema>({
        mode: 'onChange',
        resolver: zodResolver(EducationSchema),
        defaultValues: {
            degree: '',
            school: '',
            grade: '',
            description: '',
            dateRange: {
                startdate: new Date(),
                enddate: new Date()
            }
        }
    })

    const editForm = useForm<TypeEducationSchema>({
        mode: 'onChange',
        resolver: zodResolver(EducationSchema)
    })

    const handleAddEducation = (value: TypeEducationSchema) => {
        const { dateRange, ...educationDate } = value

        newEducation({
            data: {
                ...educationDate,
                enddate: dateRange.enddate,
                startdate: dateRange.startdate
            }
        })
        if (!isError) addForm.reset()
    }

    const handleEditEducation = (education: IEducation) => {
        setEditEducationId(education.id)
        editForm.reset({
            degree: education.degree,
            school: education.school,
            grade: education.degree,
            description: education.description,
            dateRange: {
                startdate: education.startdate,
                enddate: education.enddate
            }
        })
    }

    const handleSaveEducation = async (id: string) => {
        const educationData = editForm.getValues()
        const isValid = editForm.formState.isValid

        if (isValid) return

        try {
            const { dateRange, ...educationDate } = educationData

            updEducation({
                id,
                data: {
                    ...educationDate,
                    enddate: dateRange.enddate,
                    startdate: dateRange.startdate
                }
            })
            setEditEducationId(null)
        } catch (error) {
            toast.error(`Failed to update education`)
        }
    }

    const handleDeleteEducation = (id: string) => {
        deleteEducationId.current = id
        deleteEducation({ id }, {
            onSettled: () => {
                deleteEducationId.current = null
            }
        })
    }

    return {
        deletingEducationId: deleteEducationId.current,
        education,
        addForm,
        editForm,
        editEducationId,
        setEditEducationId,
        handleAddEducation,
        handleEditEducation,
        handleSaveEducation,
        handleDeleteEducation,
        isSaving: isPendingUpdate,
        isDelete: isPendingDelete,
        isAdding: isPendingCreate
    }
}