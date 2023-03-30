import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICardState as State, IGetQuoteResponse} from "../../types/card";
import http from "../../services";

export const getQuote = createAsyncThunk(
    'getQuote',
    async (id: string, thunkAPI) => {
        try {
            const response = await http.get(`quotes/${id}`)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data.statusMessage)
        }
    }
)

export const initialState: State = {
    _id: null,
    content: null,
    author: null,
    length: null,
    tags: null,
    dateAdded: null,
    loading: false,
    error: ''
}

const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getQuote.pending, (state) => {
                state.loading = true;
            })
            .addCase(getQuote.fulfilled, (state, action: PayloadAction<IGetQuoteResponse>) => {
                state.loading = false;
                state._id = action.payload._id;
                state.content = action.payload.content;
                state.author = action.payload.author;
                state.length = action.payload.length;
                state.tags = action.payload.tags;
                state.dateAdded = action.payload.dateAdded;
                state.error = null
            })
            .addCase(getQuote.rejected.type, (state, action: PayloadAction<string>) => {
                state.loading = false;
                state.error = action.payload
            })

    },
});

export const {} = cardSlice.actions;

export default cardSlice.reducer;