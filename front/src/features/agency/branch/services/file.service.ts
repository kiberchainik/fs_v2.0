import { axiosPrivate } from "@/shared/api/api.interceptors"
import { API_URL } from "@/shared/config"

export interface IFile {
	url: string
	name: string
}

class FileService {
	async upload(file: FormData, folder?: string) {
		const {data} = await axiosPrivate.post<IFile>(API_URL.branch('/logo'), file, {
			params: {
				folder
			},
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})

		return data
	}
}

export const fileService = new FileService()