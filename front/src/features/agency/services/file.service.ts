import { api } from "@/shared/api"
import { axiosPrivate } from "@/shared/api/api.interceptors"

export interface IFile {
	url: string
	name: string
}

class FileService {
	async upload(file: FormData, folder?: string) {
		//return await api.files<IFile[]>('agency/logo', file)
		return await axiosPrivate<IFile[]>({
			url: 'agency/logo',
			method: 'POST',
			data: file,
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
	}
}

export const fileService = new FileService()