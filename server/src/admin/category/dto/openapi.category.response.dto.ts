import { ApiProperty } from "@nestjs/swagger"

export class OpenAPICategoryResponse {
    @ApiProperty({
        description: 'Id della categoria',
        example: '5f9d1f3b7f4b3b001f3b4b3b',
        type: String
    })
    id: string

    @ApiProperty({
        description: 'Nome della categoria',
        example: 'Informatica',
        type: String
    })
    name: string

    @ApiProperty({
        description: 'Slug della categoria',
        example: 'informatica',
        type: String
    })
    slug: string

    @ApiProperty({
        description: 'Descrizione della categoria',
        example: 'Offerte di lavoro nel settore informatico',
        type: String
    })
    description: string


    @ApiProperty({
        description: 'Livello della categoria',
        type: Number || null,
    })
    level: number | null

    @ApiProperty({
        description: 'Id della categoria padre',
        example: '5f9d1f3b7f4b3b001f3b4b3b',
        type: String
    })
    parentId: string[]

    @ApiProperty({
        description: 'Categoria figlia',
        type: OpenAPICategoryResponse
    })
    children: [OpenAPICategoryResponse]
}