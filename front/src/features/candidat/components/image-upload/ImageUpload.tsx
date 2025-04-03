'use client'

import { ImagePlus } from 'lucide-react'
import Image from 'next/image'

import styles from './ImageUpload.module.scss'
import { cn } from '@/shared/utils'
import { useUpload } from '../../hooks/useUpload'
import { Button } from '@/shared/components'
import { useTranslations } from 'next-intl'

interface ImageUploadProps {
	isDisabled: boolean
	onChange: (value: string[]) => void
	value: string[]
}

export function ImageUpload({ isDisabled, onChange, value }: ImageUploadProps) {
	const { handleButtonClick, isUploading, fileInputRef, handleFileChange } = useUpload(onChange)
	const t = useTranslations('candidat')

	return (
		<div>
			<div className={styles.image_container}>
				{value.map(url => (
					<div key={url} className={styles.image_wrapper}>
						<Image src={url} alt='user_avatar' fill />
					</div>
				))}
			</div>
			<Button
				type='button'
				disabled={isDisabled || isUploading}
				variant='secondary'
				onClick={handleButtonClick}
				className={cn(styles.upload, {
					'mt-4': value.length
				})}
			>
				<ImagePlus />
				{t('imgUpload')}
			</Button>
			<input
				type='file'
				multiple
				className='hidden'
				ref={fileInputRef}
				onChange={handleFileChange}
				disabled={isDisabled}
			/>
		</div>
	)
}
