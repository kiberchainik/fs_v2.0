'use client'

import { ImagePlus } from 'lucide-react'
import Image from 'next/image'

import styles from './ImageUpload.module.scss'
import { cn } from '@/shared/utils'
import { Button } from '@/shared/components/ui'
import { useUpload } from '../../hooks'

interface ImageUploadProps {
	isDisabled?: boolean
	onChange: (value: string) => void
	value: string | undefined
}

export function ImageUpload({ isDisabled, onChange, value }: ImageUploadProps) {
	const { handleButtonClick, isUploading, fileInputRef, handleFileChange } = useUpload(onChange)

	return (
		<div>
			<div className={styles.image_container}>
				{value && <div className={styles.image_wrapper}>
					<Image src={value} alt={value} fill />
				</div>}
			</div>
			<Button
				type='button'
				disabled={isDisabled || isUploading}
				variant='secondary'
				onClick={handleButtonClick}
				className='mt-4'>
				<ImagePlus />
				Загрузить картинки
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