import { useRef, useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TypeSocialSchema, SocialSchema } from '../../schemes'
import { useCreateSocial, useDeleteSocial, useSocial, useUpdSocial } from '.'
import { ISocial } from '../../types'

export const useSocialLogic = () => {
    const [editingSocialId, setEditingSocialId] = useState<string | null>(null)
    const deletingSocialId = useRef<string | null>(null)

    const { socialLinks, isFetching } = useSocial()
    const { newSocial, isPendingCreate } = useCreateSocial()
    const { social, isPendingUpdate } = useUpdSocial()
    const { deleteSocial, isPendingDelete } = useDeleteSocial()

    const addForm = useForm<TypeSocialSchema>({
        resolver: zodResolver(SocialSchema),
        defaultValues: {
            social: '',
        },
    })

    const editForm = useForm<TypeSocialSchema>({
        mode: 'onChange',
        resolver: zodResolver(SocialSchema)
    })

    const handleAddSocial = (values: TypeSocialSchema) => {
        newSocial({ data: values })
        addForm.reset()
    }

    const handleEditSocial = (social: ISocial) => {
        setEditingSocialId(social.id)
        editForm.reset({ social: social.socialLink })
    }

    const handleSaveSocial = async (id: string) => {
        const socialData = editForm.getValues()
        const isValid = editForm.formState.isValid

        if (!isValid) return

        try {
            social({ id, data: socialData })
            setEditingSocialId(null)
        } catch (error) {
            console.error('Failed to update social:', error)
        }
    }

    const handleDeleteSocial = (id: string) => {
        deletingSocialId.current = id
        deleteSocial({ id }, {
            onSettled: () => {
                deletingSocialId.current = null // Сбрасываем состояние после завершения запроса
            }
        })
    }

    return {
        deletingSocialId: deletingSocialId.current,
        social,
        socialLinks,
        addForm,
        editForm,
        editingSocialId,
        setEditingSocialId,
        handleAddSocial,
        handleEditSocial,
        handleSaveSocial,
        handleDeleteSocial,
        isSaving: isPendingUpdate,
        isDeleting: isPendingDelete,
        isAdding: isPendingCreate
    }
}
