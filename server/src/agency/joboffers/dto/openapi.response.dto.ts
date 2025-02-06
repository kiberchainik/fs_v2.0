import { ApiProperty } from "@nestjs/swagger"

export class OpenAPIJobsResponse {
    @ApiProperty({
        required: true,
        description: 'Titolo dell\'offerta di lavoro',
        example: 'Sviluppatore Full Stack',
        type: String
    })
    title: string

    @ApiProperty({
        required: false,
        description: 'Questo parametro è facoltativo se non viene specificato verrà generato automaticamente dal titolo dall\'offerta di lavoro',
        example: 'sviluppatore-full-stack',
        type: String
    })
    slug: string

    @ApiProperty({
        description: 'Descrizione dell\'offerta di lavoro',
        example: 'Sviluppatore Full Stack con esperienza in Node.js e React',
        type: String,
        required: true
    })
    description: string

    @ApiProperty({
        description: 'Id della categoria',
        example: '5f9d1f3b7f4b3b001f3b4b3b',
        type: String,
        required: true
    })
    categoryId: string

    @ApiProperty({
        description: 'I settori dell\'offerta di lavoro',
        example: ['Informatica', 'Tecnologia', 'Sviluppo software'],
        type: [String],
        required: false
    })
    sectors: string[]

    @ApiProperty({
        description: 'Le fraze o le parole chiave che descrivono l\'offerta di lavoro',
        example: ['Milano', 'Sviluppo software', 'Full Time'],
        type: [String],
        required: true
    })
    tags: string[]

    @ApiProperty({
        description: 'Regione in cui si trova il posto di lavoro',
        example: 'Lombardia',
        type: String,
        required: true
    })
    region: string

    @ApiProperty({
        description: 'Provincia in cui si trova il posto di lavoro',
        example: 'Milano',
        type: String,
        required: true
    })
    province: string

    @ApiProperty({
        description: 'Città in cui si trova il posto di lavoro',
        example: 'Milano',
        required: true
    })
    location: string

    @ApiProperty({
        description: 'Data di scadenza dell\'offerta di lavoro',
        example: '2021-11-30T23:59:59.000Z',
        type: Date,
        required: false
    })
    reallyUpTo: string

    @ApiProperty({
        description: 'Id filiale se l\'offerta di lavoro è legata ad una filiale',
        example: '5f9d1f3b7f4b3b001f3b4b3b',
        type: String,
        required: false
    })
    branchId: string

    @ApiProperty({
        description: 'Id del contratto di lavoro. E\' opzionale',
        example: '5f9d1f3b7f4b3b001f3b4b3b',
        type: String,
        required: false
    })
    contractTypeId: string

    @ApiProperty({
        description: 'Id di esperienza minima richiesta per l\'offerta di lavoro. E\' opzionale',
        example: '5f9d1f3b7f4b3b001f3b4b3b',
        type: String,
        required: false
    })
    experienceMinimalId: string

    @ApiProperty({
        description: 'Id di livello di istruzione minimo richiesto per l\'offerta di lavoro. E\' opzionale',
        example: '5f9d1f3b7f4b3b001f3b4b3b',
        type: String,
        required: false
    })
    levelEducationId: string

    @ApiProperty({
        description: 'Id di modalità di lavoro richiesta per l\'offerta di lavoro. E\' opzionale',
        example: '5f9d1f3b7f4b3b001f3b4b3b',
        type: String,
        required: false
    })
    modeJobId: string

    @ApiProperty({
        description: 'Id di orario di lavoro richiesto per l\'offerta di lavoro. E\' opzionale',
        example: '5f9d1f3b7f4b3b001f3b4b3b',
        type: String,
        required: false
    })
    workingTimeId: string
}