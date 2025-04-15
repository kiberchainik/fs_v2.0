export interface Citta {
    id: number
    nome: string
    slug: string
}

export interface Regione {
    id: number
    nome: string
    slug: string
    citta: Citta[]
}

export const italianRegions: Regione[] = [
    {
        id: 100,
        nome: "Veneto",
        slug: "veneto",
        citta: [
            { id: 1001, nome: "Venezia", slug: "venezia" },
            { id: 1002, nome: "Verona", slug: "verona" },
            { id: 1003, nome: "Padova", slug: "padova" },
            { id: 1004, nome: "Treviso", slug: "treviso" },
            { id: 1005, nome: "Vicenza", slug: "vicenza" },
            { id: 1006, nome: "Rovigo", slug: "rovigo" },
            { id: 1007, nome: "Belluno", slug: "belluno" },
            { id: 1008, nome: "Chioggia", slug: "chioggia" },
            { id: 1009, nome: "Mestre", slug: "mestre" },
            { id: 1010, nome: "Bassano del Grappa", slug: "bassano-del-grappa" },
        ],
    },
]