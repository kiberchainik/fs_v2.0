'use client'

import { Button, Card, CardHeader, CardTitle, Form } from "@/shared/components";
import { useExperienceLogic } from "../../../hooks"
import { CiEdit, CiTrash } from "react-icons/ci";
import ExperienceForm from "./ExperienceForm";

import styles from './experience.module.scss'
import { formatDate } from "@/shared/utils";
import { useTranslations } from "next-intl";
import Spinner from "@/shared/components/Spinner/Spinner";

export default function Experience() {
    const t = useTranslations('curriculum.experience')
    const {
        deletingExperienceId,
        experience,
        addForm,
        editForm,
        editExperienceId,
        contractType,
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
                <CardTitle>{t('ExperienceTitle')}</CardTitle>
            </CardHeader>
            <Form {...addForm}>
                <form
                    onSubmit={addForm.handleSubmit(handleAddExperience)}
                    className={styles.formWrapper}
                >
                    <ExperienceForm formData={addForm} contractType={contractType!} />
                    <Button type='submit' disabled={isAdding}>{t('CreateExperienceBtn')}</Button>
                </form>
            </Form>
            {
                experience && (
                    <div className='mt-5 p-6'>
                        {
                            experience.map(item => (
                                <div className={styles.editExperienceForm} key={item.id}>
                                    {
                                        editExperienceId === item.id ? (
                                            <Form {...editForm}>
                                                <form
                                                    onSubmit={editForm.handleSubmit(() => handleSaveExperience(item.id))}
                                                    className={styles.formEditWrapper}
                                                >
                                                    <ExperienceForm formData={editForm} contractType={contractType!} />
                                                    <div className='flex gap-x-1'>
                                                        <Button type='submit' disabled={isSaving}>
                                                            {isSaving ? <Spinner /> : t('SaveExperienceBtn')}
                                                        </Button>
                                                        <Button onClick={() => setEditExperienceId(null)}>{t('CancelExperienceBtn')}</Button>
                                                    </div>
                                                </form>
                                            </Form>
                                        ) : (
                                            <div className={styles.experienceList}>
                                                <div className={styles.border_experience_info}>
                                                    <div className={styles.experience_info_title}>{item.company}</div>
                                                    <div className={styles.experience_info_grade}>
                                                        <span className={styles.experience_info_years}>
                                                            {formatDate(item.startDate, { dateFormat: 'year' })} - {item.currently ? t('CurrentExperience') : formatDate(item.endDate, { dateFormat: 'year' })}
                                                        </span> \
                                                        <span>{item.contractTypeJob?.name}</span>
                                                    </div>
                                                    {item.description && <div className={styles.experience_info_description}>{item.description}</div>}
                                                </div>
                                                <div className='flex gap-x-1'>
                                                    <Button onClick={() => handleEditExperience(item)} variant='secondary' className='p-3'>
                                                        <CiEdit />
                                                    </Button>
                                                    <Button onClick={() => handleDeleteExperience(item.id)} variant='destructive' className='p-3' disabled={deletingExperienceId === item.id}>
                                                        {deletingExperienceId === item.id ? <Spinner /> : <CiTrash />}
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