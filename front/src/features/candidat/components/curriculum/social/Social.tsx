'use client'

import { Form, Button, Card, CardHeader, CardTitle, CardContent } from '@/shared/components/ui'
import { useSocialLogic } from '../../../hooks/useSocial'
import { CiEdit, CiTrash } from 'react-icons/ci'
import SocialForm from './SocialForm'

import styles from './social.module.scss'

export default function Social() {
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
        <Card className='md:w-[800px] w-full mx-5 md:mx-0'>
            <CardHeader className={styles.cardHeader}>
                <CardTitle>Candidat social links</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...addForm}>
                    <form
                        onSubmit={addForm.handleSubmit(handleAddSocial)}
                        className={styles.formWrapper}
                    >
                        <SocialForm formData={addForm} />
                        <Button type='submit' disabled={isAdding}>
                            {isAdding ? 'Adding...' : 'Save'}
                        </Button>
                    </form>
                </Form>

                {socialLinks && (
                    <div className='mt-5'>
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
                                                    {isSaving ? 'Saving...' : 'Save'}
                                                </Button>
                                                <Button onClick={() => setEditingSocialId(null)}>Cancel</Button>
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
                                                {deletingSocialId === social.id ? 'Deleting...' : <CiTrash />}
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