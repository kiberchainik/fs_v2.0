import { HttpException } from '@nestjs/common';
import { Express } from 'express';

export class FileFormatValidator {
    private readonly validMimeTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];

    validate(files: Express.Multer.File[]): void {
        const filteredFiles = files.filter(file => this.validMimeTypes.includes(file.mimetype));

        if (filteredFiles.length !== files.length) {
            throw new HttpException('Solo i file immagine sono consentiti', 415);
        }
    }
}
