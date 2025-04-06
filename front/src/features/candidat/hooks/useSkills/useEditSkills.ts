import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TypeSkillSchema, SkillSchema } from '../../schemes'
import { useCreateSkill, useDeleteSkill, useSkills, useUpdSkill } from '../useSkills'
import { ISkills } from '../../types'

export const useSkillsLogic = () => {
    const [editingSkillId, setEditingSkillId] = useState<string | null>(null)
    const deletingSkillId = useRef<string | null>(null)

    const { skills, isFetching } = useSkills()
    const { newSkill, isPendingCreate } = useCreateSkill()
    const { skill, isPendingUpdate } = useUpdSkill()
    const { deleteSkill, isPendingDelete } = useDeleteSkill()

    const addForm = useForm<TypeSkillSchema, any, TypeSkillSchema>({
        mode: 'onChange',
        resolver: zodResolver(SkillSchema),
        values: {
            level: '',
            skill: ''
        }
    })

    const editForm = useForm<TypeSkillSchema, any, TypeSkillSchema>({
        mode: 'onChange',
        resolver: zodResolver(SkillSchema)
    })

    const handleAddSkill = (values: TypeSkillSchema) => {
        newSkill({ data: values })
        addForm.reset()
    }

    const handleEditSkill = (skill: ISkills) => {
        setEditingSkillId(skill.id)
        editForm.reset(skill)
    }

    const handleSaveSkill = async (id: string) => {
        const skillData = editForm.getValues()
        const isValid = editForm.formState.isValid

        if (!isValid) return

        try {
            skill({ id, data: skillData })
            setEditingSkillId(null)
        } catch (error) {
            console.error('Failed to update skill:', error)
        }
    }

    const handleDeleteSkill = (id: string) => {
        deletingSkillId.current = id
        deleteSkill({ id }, {
            onSettled: () => {
                deletingSkillId.current = null
            }
        })
    }

    return {
        deletingSkillId: deletingSkillId.current,
        skills,
        addForm,
        editForm,
        editingSkillId,
        setEditingSkillId,
        handleAddSkill,
        handleEditSkill,
        handleSaveSkill,
        handleDeleteSkill,
        isSaving: isPendingUpdate,
        isDeleting: isPendingDelete,
        isAdding: isPendingCreate
    }
}
