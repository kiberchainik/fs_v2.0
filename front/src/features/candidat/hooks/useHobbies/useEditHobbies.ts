import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TypeHobbieSchema, HobbieSchema } from '../../schemes'
import { useCreateHobbie, useDeleteHobbie, useHobbies, useUpdHobbie } from '../useHobbies'

export const useHobbiesLogic = () => {
    const [editingHobbieId, setEditingHobbieId] = useState<string | null>(null)
    const deletingHobbieId = useRef<string | null>(null)

    const { hobbies, isFetching } = useHobbies()
    const { newHobbie, isPendingCreate } = useCreateHobbie()
    const { hobbie, isPendingUpdate } = useUpdHobbie()
    const { deleteHobbie, isPendingDelete } = useDeleteHobbie()

    const addForm = useForm<TypeHobbieSchema>({
        mode: 'onChange',
        resolver: zodResolver(HobbieSchema),
        values: {
            hobbie: ''
        }
    })

    const editForm = useForm<TypeHobbieSchema>({
        mode: 'onChange',
        resolver: zodResolver(HobbieSchema)
    })

    const handleAddHobbie = (values: TypeHobbieSchema) => {
        newHobbie({ data: values })
        addForm.reset()
    }

    const handleEditHobbie = (hobbie: { id: string; hobbie: string }) => {
        setEditingHobbieId(hobbie.id)
        editForm.reset(hobbie)
    }

    const handleSaveHobbie = async (id: string) => {
        const hobbieData = editForm.getValues()
        const isValid = editForm.formState.isValid

        if (!isValid) return

        try {
            hobbie({ id, data: hobbieData })
            setEditingHobbieId(null)
        } catch (error) {
            console.error('Failed to update hobbie:', error)
        }
    }

    const handleDeleteHobbie = (id: string) => {
        deletingHobbieId.current = id
        deleteHobbie({ id }, {
            onSettled: () => {
                deletingHobbieId.current = null // Сбрасываем состояние после завершения запроса
            }
        })
    }

    return {
        deletingHobbieId: deletingHobbieId.current,
        hobbies,
        addForm,
        editForm,
        editingHobbieId,
        setEditingHobbieId,
        handleAddHobbie,
        handleEditHobbie,
        handleSaveHobbie,
        handleDeleteHobbie,
        isSaving: isPendingUpdate,
        isDeleting: isPendingDelete,
        isAdding: isPendingCreate
    }
}
