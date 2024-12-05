import { zodResolver } from "@hookform/resolvers/zod"
import { useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { ExperienceSchema, TypeExperienceSchema } from "../../schemes"
import { useExperience, useCreateExperience, useUpdExperience, useDeleteExperience } from "./useExperience"
import { IExperience } from "../../types"

export const useExperienceLogic = () => {
    const [editExperienceId, setEditExperienceId] = useState<string | null>(null)
    const deleteExperienceId = useRef<string | null>(null)

    const { experience, isFetching } = useExperience()
    const { newExperience, isPendingCreate, isError } = useCreateExperience()
    const { updExperience, isPendingUpdate } = useUpdExperience()
    const { deleteExperience, isPendingDelete } = useDeleteExperience()

    const addForm = useForm<TypeExperienceSchema>({
        mode: 'onChange',
        resolver: zodResolver(ExperienceSchema),
        defaultValues: {
            company: '',
            contract: '',
            currently: false,
            description: '',
            location: '',
            dateRange: {
                startDate: new Date(),
                endDate: new Date()
            }
        }
    })

    const editForm = useForm<TypeExperienceSchema>({
        mode: 'onChange',
        resolver: zodResolver(ExperienceSchema)
    })

    const handleAddExperience = (value: TypeExperienceSchema) => {
        const { dateRange, ...experienceDate } = value

        newExperience({
            data: {
                ...experienceDate,
                endDate: dateRange.endDate,
                startDate: dateRange.startDate
            }
        })
        if (!isError) addForm.reset()
    }

    const handleEditExperience = (experience: IExperience) => {
        setEditExperienceId(experience.id)
        editForm.reset({
            company: experience.company,
            contract: experience.contract,
            currently: experience.currently,
            description: experience.description,
            location: experience.location,
            dateRange: {
                startDate: experience.startDate,
                endDate: experience.endDate
            }
        })
    }

    const handleSaveExperience = async (id: string) => {
        const experienceData = editForm.getValues()
        const isValid = editForm.formState.isValid

        if (isValid) return

        try {
            const { dateRange, ...experienceDate } = experienceData
            updExperience({
                id,
                data: {
                    ...experienceDate,
                    endDate: dateRange.endDate,
                    startDate: dateRange.startDate
                }
            })
            setEditExperienceId(null)
        } catch (error) {
            toast.error(`Failed to update experience`)
        }
    }

    const handleDeleteExperience = (id: string) => {
        deleteExperienceId.current = id
        deleteExperience({ id }, {
            onSettled: () => {
                deleteExperienceId.current = null
            }
        })
    }

    return {
        deletingExperienceId: deleteExperienceId.current,
        experience,
        addForm,
        editForm,
        editExperienceId,
        setEditExperienceId,
        handleAddExperience,
        handleEditExperience,
        handleSaveExperience,
        handleDeleteExperience,
        isSaving: isPendingUpdate,
        isDelete: isPendingDelete,
        isAdding: isPendingCreate
    }
}