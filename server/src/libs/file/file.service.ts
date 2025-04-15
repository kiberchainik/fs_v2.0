import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { access, mkdir, unlink, writeFile } from "fs/promises";
import * as sharp from 'sharp'
import { join } from "path";
import { MFile } from "./mfile.class";
import { v4 } from 'uuid'
import { path } from "app-root-path";

export interface FileResponse {
    url: string
    name: string
}

@Injectable()
export class FileService {
    async saveFiles(files: MFile[], folder = 'default') {
        const uploadFolder = `${path}/src/static/${folder}`

        try {
            await access(uploadFolder)
        } catch (err) {
            await mkdir(uploadFolder, { recursive: true })
        }

        const res: FileResponse[] = await Promise.all(
            files.map(async (file): Promise<FileResponse> => {
                try {
                    await writeFile(`${uploadFolder}/${file.originalname}`, file.buffer)
                } catch (err) {
                    throw new InternalServerErrorException('Errore durante il caricamento del file')
                }

                return {
                    url: `/static/${folder}/${file.originalname}`,
                    name: file.originalname
                }
            })
        )
        return res
    }

    convertToWebP(file: Buffer): Promise<Buffer> {
        return sharp(file).webp().toBuffer()
    }

    async filterFiles(files: MFile[]) {
        const newFiles = await Promise.all(
            files.map(async file => {
                const mimetype = file.mimetype
                const currentFileType = file.mimetype.split('/')[1]
                const newName = v4()
                const type = file.originalname.split('.')[1]

                if (mimetype.includes('image')) {
                    if (currentFileType != 'svg+xtml') {
                        const buffer = await this.convertToWebP(file.buffer)

                        return new MFile({
                            buffer,
                            originalname: `${newName}.webp`,
                            mimetype
                        })
                    }
                    return new MFile({
                        buffer: file.buffer,
                        originalname: `${newName}.svg`,
                        mimetype
                    })
                }
                return new MFile({
                    buffer: file.buffer,
                    originalname: `${newName}.${type}`,
                    mimetype
                })
            })
        )
        return newFiles
    }

    async exists(path: string) {
        try {
            await access(path)
            return true
        } catch (e) {
            return false
        }
    }

    async delete(path: string) {
        try {
            const [dir, file] = path.split('/')
            const pathFile = join(__dirname, '..', '../static', `/${dir}`, file)
            await unlink(pathFile)
        } catch (e) {
            console.log(e)
        }
    }
}