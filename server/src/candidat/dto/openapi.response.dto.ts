import { ApiProperty } from "@nestjs/swagger"

export class OpenAPICandidatsResponse {
    @ApiProperty({
        description: 'Id dell candidato',
        example: 'dhfy48wk-g56y-5432-s8g6-7djeeh46x736k'
    })
    id: string

    @ApiProperty({
        description: 'Imagine del candidato',
        example: '/static/candidat-id/avatar.jpg'
    })
    avatar: string

    @ApiProperty({
        description: 'Nome dell candidato',
        example: 'candidato@email.com'
    })
    firstname: string

    @ApiProperty({
        description: 'Cognome dell candidato',
        example: 'candidato@email.com'
    })
    surname: string

    @ApiProperty({
        description: 'Email dell candidato',
        example: 'candidato@email.com'
    })
    user: {
        email: string
    }

    @ApiProperty({
        description: 'Data di nascita',
        example: '2025-01-04T12:25:48.355Z'
    })
    birthday: Date

    @ApiProperty({
        description: 'Livello di istruzione',
        example: 'Laurea'
    })
    education: [
        {
            grade: string
        }
    ]

    @ApiProperty({
        description: 'Competenze del candidato',
        example: 'JavaScript, TypeScript, Node.js'
    })
    skills: [
        {
            skill: string
        }
    ]
}