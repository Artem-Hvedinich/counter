import {AppRootStateType} from "../state/store";

export const loadState = () => {
    try {
        let maxValueAsString = localStorage.getItem('counterMaxValue')
        if (maxValueAsString) {
            return (JSON.parse(maxValueAsString))
        }
        let startValueAsString = localStorage.getItem('counterStartValue')
        if (startValueAsString) {
            return (JSON.parse(startValueAsString))
        }
        let numberAsString = localStorage.getItem('counterNumberValue')
        if (numberAsString) {
            return (JSON.parse(numberAsString))
        }
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state: AppRootStateType) => {
    try {
        // const serializedState = JSON.stringify(state.open);
        // localStorage.setItem('state', serializedState);
        localStorage.setItem('counterNumberValue', JSON.stringify(state.open.number))
        localStorage.setItem('counterMaxValue', JSON.stringify(state.open.maxValue))
        localStorage.setItem('counterStartValue', JSON.stringify(state.open.startValue))
    } catch {
        // ignore write errors
    }
};