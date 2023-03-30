import {IAppState} from "./app";
import {ICardState} from "./card";

export interface RootState {
    app: IAppState
    card: ICardState
}