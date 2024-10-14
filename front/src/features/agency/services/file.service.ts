import { api } from "@/shared/api"

export interface IFile {
	url: string
	name: string
}

class FileService {
	async upload(file: FormData, folder?: string) {
		console.log(file.entries.length)
		return await api.files<IFile[]>('agency/logo', file)
	}
}

export const fileService = new FileService()