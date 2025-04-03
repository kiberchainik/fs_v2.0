'use client'

import { Form, Button, Card, CardHeader, CardTitle, CardContent } from '@/shared/components/ui'
import { useSocialLogic } from '../../../hooks/useSocial'
import { CiEdit, CiTrash } from 'react-icons/ci'
import SocialForm from './SocialForm'

import styles from './social.module.scss'
import { useTranslations } from 'next-intl'
import Spinner from '@/shared/components/Spinner/Spinner'

export default function Social() {
    const t = useTranslations('curriculum.social')
    const {
        deletingSocialId,
        socialLinks,
        addForm,
        editForm,
        editingSocialId,
        setEditingSocialId,
        handleAddSocial,
        handleEditSocial,
        handleSaveSocial,
        handleDeleteSocial,
        isSaving,
        isAdding
    } = useSocialLogic()

    return (
        <Card className='w-full'>
            <CardHeader className={styles.cardHeader}>
                <CardTitle>{t('SocialTitle')}</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...addForm}>
                    <form
                        onSubmit={addForm.handleSubmit(handleAddSocial)}
                        className={styles.formWrapper}
                    >
                        <SocialForm formData={addForm} />
                        <Button type='submit' disabled={isAdding}>
                            {isAdding ? <Spinner /> : t('CreateSocialBtn')}
                        </Button>
                    </form>
                </Form>

                {socialLinks && (
                    <div className='mt-5 p-6'>
                        {socialLinks.map(social => (
                            <div className={styles.editSocialForm} key={social.id}>
                                {editingSocialId === social.id ? (
                                    <Form {...editForm}>
                                        <form
                                            onSubmit={editForm.handleSubmit(() => handleSaveSocial(social.id))}
                                            className={styles.formWrapper}
                                        >
                                            <SocialForm formData={editForm} />
                                            <div className='flex gap-x-1'>
                                                <Button type='submit' disabled={isSaving}>
                                                    {isSaving ? <Spinner /> : t('SaveSocialBtn')}
                                                </Button>
                                                <Button onClick={() => setEditingSocialId(null)}>{t('CancelSocialBtn')}</Button>
                                            </div>
                                        </form>
                                    </Form>
                                ) : (
                                    <div className={styles.socialList}>
                                        <span>
                                            {social.socialLink}
                                        </span>
                                        <div className='flex gap-x-1'>
                                            <Button onClick={() => handleEditSocial(social)} variant='link'>
                                                <CiEdit />
                                            </Button>
                                            <Button onClick={() => handleDeleteSocial(social.id)} variant='link' disabled={deletingSocialId === social.id}>
                                                {deletingSocialId === social.id ? <Spinner /> : <CiTrash />}
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
    )
}