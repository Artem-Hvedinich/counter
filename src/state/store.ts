import {combineReducers, createStore} from "redux";
import {openReducer} from "./openCounterReducer/open-reducer";
import {loadState, saveState} from "../utils/localsrorage";

const rootReducer = combineReducers({
    open: openReducer,
})

export const store = createStore(rootReducer, loadState())

store.subscribe(() => {
    saveState({
        open: store.getState().open,
        // maxValue:store.getState().open.maxValue
    })
    // localStorage.setItem('counterMaxValue', JSON.stringify(store.getState().open.maxValue))
    // localStorage.setItem('counterStartValue', JSON.stringify(store.getState().open.startValue))
    // localStorage.setItem('counterNumberValue', JSON.stringify(store.getState().open.number))
})


export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppStoreType = ReturnType<typeof rootReducer>
// @ts-ignore
window.store = store;
