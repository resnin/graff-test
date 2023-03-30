import {
    IAppState as State,
    IGetQuotesResponse,
    IQuotesRequest,
    ISearchQuotesRequest,
    ISetFilters
} from "../../types/app";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import http from "../../services";
import axios from "axios";

export const getQuotes = createAsyncThunk(
    'getQuotes',
    async ({page = 1, tags = '', author = ''}: IQuotesRequest,
           thunkAPI) => {

        const source = axios.CancelToken.source()

        thunkAPI.signal.addEventListener('abort', () => {
            source.cancel()
        })

        try {
            const response = await http.get(`quotes?limit=5&page=${page}&tags=${tags}&author=${author}`,
                {cancelToken: source.token})
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data.statusMessage)
        }
    }
)

export const searchQuotes = createAsyncThunk(
    'searchQuotes',
    async ({page = 1, query}: ISearchQuotesRequest,
           thunkAPI) => {

        const source = axios.CancelToken.source()

        thunkAPI.signal.addEventListener('abort', () => {
            source.cancel()
        })

        try {
            const response = await http.get(`search/quotes?limit=5&query=${query}&page=${page}`,
                {cancelToken: source.token})
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data.statusMessage)
        }
    }
)

export const initialState: State = {
    loading: false,
    currentPage: 1,
    totalPages: null,
    data: [],
    error: null,
    searchValue: null,
    currentAuthor: '',
    currentTags: '',
    showFilters: false
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setSearchVal(state, action: PayloadAction<string>) {
            state.searchValue = action.payload
        },
        setFilters(state, action: PayloadAction<ISetFilters>) {
            state.currentTags = action.payload.tags
            state.currentAuthor = action.payload.author
        },
        showFilter(state, action: PayloadAction<boolean>) {
            state.showFilters = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getQuotes.pending, (state) => {
                state.loading = true;
            })
            .addCase(getQuotes.fulfilled, (state, action: PayloadAction<IGetQuotesResponse>) => {
                state.loading = false;
                state.currentPage = action.payload.page;
                state.totalPages = action.payload.totalPages;
                state.data = action.payload.results
                state.error = null
                state.searchValue = null
            })
            .addCase(getQuotes.rejected.type, (state, action: PayloadAction<string>) => {
                state.loading = false;
                state.error = action.payload
            })

            .addCase(searchQuotes.pending, (state) => {
                state.loading = true;
            })
            .addCase(searchQuotes.fulfilled, (state, action: PayloadAction<IGetQuotesResponse>) => {
                state.loading = false;
                state.currentPage = action.payload.page;
                state.totalPages = action.payload.totalPages;
                state.data = action.payload.results
                state.error = null
            })
            .addCase(searchQuotes.rejected.type, (state, action: PayloadAction<string>) => {
                state.loading = false;
                state.error = action.payload
            })
    },
});

export const {setSearchVal, setFilters, showFilter} = appSlice.actions;

export default appSlice.reducer;