import {combineReducers, createStore} from "redux";
import {openReducer} from "./openCounterReducer/open-reducer";

const rootReducer = combineReducers({
    open: openReducer,
})

export const store = createStore(rootReducer)
export type AppRootStateType = ReturnType<typeof rootReducer>
// @ts-ignore
window.store = store;