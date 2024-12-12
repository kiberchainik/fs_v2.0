'use client'

import { Button, Card, CardHeader, CardTitle, Form } from "@/shared/components";
import { useExperienceLogic } from "../../../hooks"
import { CiEdit, CiTrash } from "react-icons/ci";
import ExperienceForm from "./ExperienceForm";

import styles from './experience.module.scss'

export default function Experience() {
    const {
        deletingExperienceId,
        experience,
        addForm,
        editForm,
        editExperienceId,
        setEditExperienceId,
        handleAddExperience,
        handleEditExperience,
        handleSaveExperience,
        handleDeleteExperience,
        isSaving,
        isDelete,
        isAdding
    } = useExperienceLogic()

    return (
        <Card>
            <CardHeader className={styles.cardHeader}>
                <CardTitle>Candidat experience</CardTitle>
            </CardHeader>
            <Form {...addForm}>
                <form
                    onSubmit={addForm.handleSubmit(handleAddExperience)}
                    className={styles.formWrapper}
                >
                    <ExperienceForm formData={addForm} />
                    <Button type='submit' disabled={isAdding}>
                        Add course
                    </Button>
                </form>
            </Form>
            {
                experience && (
                    <div className='mt-5'>
                        {
                            experience.map(item => (
                                <div className={styles.editExperienceForm} key={item.id}>
                                    {
                                        editExperienceId === item.id ? (
                                            <Form {...editForm}>
                                                <form
                                                    onSubmit={editForm.handleSubmit(() => handleSaveExperience(item.id))}
                                                    className={styles.formWrapper}
                                                >
                                                    <ExperienceForm formData={editForm} />
                                                    <div className='flex gap-x-2'>
                                                        <Button type='submit' disabled={isSaving}>
                                                            {isSaving ? 'Saving...' : 'Save'}
                                                        </Button>
                                                        <Button onClick={() => setEditExperienceId(null)}>
                                                            Cancel
                                                        </Button>
                                                    </div>
                                                </form>
                                            </Form>
                                        ) : (
                                            <div className={styles.experienceList}>
                                                <span>{item.company}</span> = <span>{item.contract}</span>
                                                <div className='flex gap-x-2'>
                                                    <Button onClick={() => handleEditExperience(item)}>
                                                        <CiEdit />
                                                    </Button>
                                                    <Button onClick={() => handleDeleteExperience(item.id)} disabled={deletingExperienceId === item.id}>
                                                        {deletingExperienceId === item.id ? 'Deleting...' : <CiTrash />}
                                                    </Button>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </Card>
    );
}