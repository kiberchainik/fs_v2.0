import { ApiProperty } from "@nestjs/swagger"
export class OpenAPICandidatFullDateResponse {
    @ApiProperty({
        description: 'Id dell candidato',
        example: 'dhfy48wk-g56y-5432-s8g6-7djeeh46x736k'
    })
    id: string

    @ApiProperty({
        description: 'Descrizione del candidato',
        example: 'Persona seria, automunito e disponibile per lavoro a turni e a giornata'
    })
    about_my: string

    @ApiProperty({
        description: 'Imagine del candidato',
        example: '/static/dhfy48wk-g56y-5432-s8g6-7djeeh46x736k/avatar.jpg'
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
        description: 'Anagrafica del candidato',
        example: {
            availabilityTransport: 'Se il candidato sia automunito, true o false',
            maritalStatus: 'single',
            driverCategory: ['A1', 'B']
        }
    })
    candidatLifeState: {
        availabilityTransport: boolean,
        maritalStatus: string,
        driverCategory: string[]
    }

    @ApiProperty({
        description: 'Cellulare del candidato',
        example: '333 1234567'
    })
    phone: string

    @ApiProperty({
        description: 'Residenza del candidato',
        example: 'Via Roma 12, 31020 Ponzano'
    })
    resident: string

    @ApiProperty({
        description: 'Data creazione account',
        example: '2025-01-04T12:25:48.355Z'
    })
    createdAt: Date

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
        example: [{
            grade: 'Programmatore',
            startdate: '2006-09-01T00:00:00.000Z',
            enddate: '2012-08-15T00:00:00.000Z',
            description: 'Programmazione soft per compiuter e machine aziendali'
        }]
    })
    education: [
        {
            grade: string,
            startdate: Date,
            enddate: Date,
            description: string
        }
    ]

    @ApiProperty({
        description: 'Corsi di formazione',
        example: [{
            course: 'Programmatore',
            institution: 'Università di Padova',
            grade: 'Programmatore',
            startdate: '2006-09-01T00:00:00.000Z',
            enddate: '2012-08-15T00:00:00.000Z'
        }]
    })
    courses: [
        {
            course: string
            institution: string
            grade: string
            startdate: Date
            enddate: Date
        }
    ]

    @ApiProperty({
        description: 'Esperienza lavorativa',
        example: [{
            company: 'GLS',
            description: 'Magazziniere, gestione riparto partenze',
            endDate: '2020-02-16T21:16:35.000Z',
            location: 'Ponzano',
            contractTypeJob: {
                name: 'Tempo indeterminato'
            }
        }]
    })
    experience: [
        {
            company: string,
            description: string,
            endDate: Date,
            location: string,
            contractTypeJob: {
                name: string
            }
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

    @ApiProperty({
        description: 'Lingue parlate dal candidato',
        example: 'Italian, English'
    })
    languages: [
        {
            language: string,
            level: string
        }
    ]

    @ApiProperty({
        description: 'Hoobies del candidato',
        example: 'Pallavolo, Pesca'
    })
    hobbies: [
        {
            hobbie: string
        }
    ]
}