export type TPaginationResponse<T> = {
    item: T[],
    count: number,
    pageCount: number ,
}

export type TPagination = {
    count?: number,
    page?: number
}