import { ApiProperty } from "@nestjs/swagger"

export class OpenAPIAgencyResponse {
    @ApiProperty({
        required: false,
        description: 'Id dell\'agenzia registrata',
        example: 'dhfy48wk-g56y-5432-s8g6-7djeeh46x736k'
    })
    id: string

    @ApiProperty({
        required: false,
        description: 'Email dell\'agenzia registrata',
        example: 'agenzia-di-lavoro@email.com'
    })
    email: string

    @ApiProperty({
        required: false,
        description: 'Data di creazione aggenzia',
        example: '2025-01-04T12:25:48.355Z'
    })
    createdAt: Date

    @ApiProperty({
        required: false,
        description: 'Token per l\'accesso nell\'account',
        example: 'lskdfoisupfouiuaiIYOIYOIGKJG6567kjjkgki7y&IYlkjh.eyJpZdfsfdgsfdC1hMmEwLTE2MGNkMjUwZjA5MSIsImVtYWlsdfgsdfgZXJmZWRlQGdtYWlsLmNvbSIsInJvbGUiOiJBR0VOQ1kiLCsgsIsdfgsdfgsdfgsdfgdOH0.454b5345v354v-qHd5K1_345v6345v345vcertcevc_MvQ'
    })
    accessToken: string
}