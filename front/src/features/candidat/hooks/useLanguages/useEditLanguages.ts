import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TypeLanguageSchema, LanguageSchema } from '../../schemes'
import { useCreateLanguage, useDeleteLanguage, useLanguages, useUpdLanguage } from '.'

export const useLanguagesLogic = () => {
    const [editingLanguageId, setEditingLanguageId] = useState<string | null>(null)
    const deletingLanguageId = useRef<string | null>(null)

    const { languages, isFetching } = useLanguages()
    const { newLanguage, isPendingCreate } = useCreateLanguage()
    const { language, isPendingUpdate } = useUpdLanguage()
    const { deleteLanguage, isPendingDelete } = useDeleteLanguage()

    const addForm = useForm<TypeLanguageSchema, any, TypeLanguageSchema>({
        mode: 'onChange',
        resolver: zodResolver(LanguageSchema),
        values: {
            level: '',
            language: ''
        }
    })

    const editForm = useForm<TypeLanguageSchema, any, TypeLanguageSchema>({
        mode: 'onChange',
        resolver: zodResolver(LanguageSchema)
    })

    const handleAddLanguage = (values: TypeLanguageSchema) => {
        newLanguage({ data: values })
        addForm.reset()
    }

    const handleEditLanguage = (language: { id: string; language: string; level: string }) => {
        setEditingLanguageId(language.id)
        editForm.reset(language)
    }

    const handleSaveLanguage = async (id: string) => {
        const languageData = editForm.getValues()
        const isValid = editForm.formState.isValid

        if (!isValid) return

        try {
            language({ id, data: languageData })
            setEditingLanguageId(null)
        } catch (error) {
            console.error('Impossibile aggiornare la lingua')
        }
    }

    const handleDeleteLanguage = (id: string) => {
        deletingLanguageId.current = id
        deleteLanguage({ id }, {
            onSettled: () => {
                deletingLanguageId.current = null // Сбрасываем состояние после завершения запроса
            }
        })
    }

    return {
        deletingLanguageId: deletingLanguageId.current,
        languages,
        addForm,
        editForm,
        editingLanguageId,
        setEditingLanguageId,
        handleAddLanguage,
        handleEditLanguage,
        handleSaveLanguage,
        handleDeleteLanguage,
        isSaving: isPendingUpdate,
        isDeleting: isPendingDelete,
        isAdding: isPendingCreate
    }
}
