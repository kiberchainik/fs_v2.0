import { axiosPrivate } from "@/shared/api/api.interceptors"

export interface IFile {
	url: string
	name: string
}

class FileService {
	async upload(file: FormData, folder?: string) {
		return await axiosPrivate.post<IFile>('agency/logo', file, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
	}
}

export const fileService = new FileService()