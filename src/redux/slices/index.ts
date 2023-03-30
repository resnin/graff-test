import {combineReducers, Reducer} from "@reduxjs/toolkit";
import {RootState} from "../../types";
import appReducer from './app';
import cardReducer from './card'

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
    app: appReducer,
    card: cardReducer
});

export default rootReducer;