import { useRef, useState } from "react"
import { useCreateEducation, useDeleteEducation, useEducation, useUpdEducation } from "./useEducation"
import { useForm } from "react-hook-form"
import { EducationSchema, TypeEducationSchema } from "../../schemes/education.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { IEducation } from "../../types"
import { toast } from "sonner"
import { useGetLevelEducation } from "@/features/agency/vacancy/hooks"

export const useEducationLogic = () => {
    const [editEducationId, setEditEducationId] = useState<string | null>(null)
    const { levelEducation, isFetching: isFLE } = useGetLevelEducation()
    const deleteEducationId = useRef<string | null>(null)

    const { education, isFetching } = useEducation()
    const { newEducation, isPendingCreate, isError } = useCreateEducation()
    const { updEducation, isPendingUpdate } = useUpdEducation()
    const { deleteEducation, isPendingDelete } = useDeleteEducation()

    const addForm = useForm<TypeEducationSchema, any, TypeEducationSchema>({
        mode: 'onChange',
        resolver: zodResolver(EducationSchema),
        defaultValues: {
            levelId: '',
            school: '',
            grade: '',
            description: '',
            dateRange: undefined
        }
    })

    const editForm = useForm<TypeEducationSchema, any, TypeEducationSchema>({
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
            levelId: education.levelId,
            school: education.school,
            grade: education.grade,
            description: education.description,
            dateRange: {
                startdate: new Date(education.startdate),
                enddate: new Date(education.enddate)
            }
        })
    }

    const handleSaveEducation = async (id: string) => {
        const educationData = editForm.getValues()
        const isValid = editForm.formState.isValid

        if (!isValid) return

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
            toast.error(`Aggiornamento dell'istruzione non riuscito`)
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
        levelEducation,
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