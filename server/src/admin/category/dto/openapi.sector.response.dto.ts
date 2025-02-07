import { ApiProperty } from "@nestjs/swagger"

// category: {
//     name: string;
//     slug: string;
// };
// } & {
// id: string;
// name: string;
// slug: string;
// categoryId: string;

export class OpenAPISectorResponse {
    @ApiProperty({
        description: 'Id del settore',
        example: '5f9d1f3b7f4b3b001f3b4b3b',
        type: String
    })
    id: string

    @ApiProperty({
        description: 'Slug del settore',
        example: 'informatica',
        type: String
    })
    slug: string

    @ApiProperty({
        description: 'Nome del settore',
        example: 'Informatica',
        type: String
    })
    name: string

    @ApiProperty({
        description: 'Descrozione del settore',
        example: 'Sviluppatore Full Stack con esperienza in Node.js e React',
        type: String
    })
    description: string

    @ApiProperty({
        description: 'Id della categoria a cui appartiene il settore',
        example: '5f9d1f3b7f4b3b001f3b4b3b',
        type: String
    })
    categoryId: string

    @ApiProperty({
        description: 'Nome della categoria a cui appartiene il settore',
        example: 'Informatica',
        type: String
    })
    categoryName: {
        name: string
        slug: string
    }
}