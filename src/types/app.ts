export interface IAppState {
    loading: boolean
    currentPage: number
    totalPages: number | null
    data: IQuote[]
    error: string | null
    searchValue: string | null
    currentTags: string
    currentAuthor: string
    showFilters: boolean
}

export interface IQuote {
    _id: string
    content: string
    author: string
    authorSlug: string
    length: number
    tags: string[]
}

export interface IGetQuotesResponse {
    count: number
    totalCount: number
    page: number
    totalPages: number
    lastItemIndex: number
    results: IQuote[]
}

export interface IQuotesRequest {
    page?: number
    tags?: string
    author?: string
}

export interface ISearchQuotesRequest {
    page?: number
    query: string
}

export interface ISetFilters {
    tags: string
    author: string
}