export interface ICardState {
    _id: string | null
    content: string | null
    author: string | null
    length: number
    tags: string[] | null
    dateAdded: string | null
    loading: boolean
    error: string
}

export interface IGetQuoteResponse {
    _id: string
    content: string
    author: string
    length: number
    tags: string[]
    dateAdded: string
}