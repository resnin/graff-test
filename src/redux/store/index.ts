import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../slices/index';

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware( { thunk: true}),
    devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch