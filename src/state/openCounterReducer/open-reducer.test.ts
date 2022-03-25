import {
    changeDisabledButton,
    changeMaxValue,
    changeNumberInc,
    changeStartValue,
    openReducer,
    StateType
} from "./open-reducer";

let startState: StateType
beforeEach(() => {
    startState = {number: 2, maxValue: 5, startValue: 0, disabled: false}
})

test('change the number when pressing the inc button', () => {
    const startState = {number: 2, maxValue: 5, startValue: 0, disabled: false}
    const endState = openReducer(startState, changeNumberInc(0))

    if (endState) {
        expect(endState.number).toBe(0)
    } else {
        expect(endState).toBe(undefined)
    }
})

test('change max value', () => {
    const startState = {number: 2, maxValue: 5, startValue: 0, disabled: false}
    const endState = openReducer(startState, changeMaxValue(19))

    if (endState) {
        expect(endState.maxValue).toBe(19)
    } else {
        expect(endState).toBe(undefined)
    }
})

test('change disabled button status', () => {
    const startState = {number: 2, maxValue: 5, startValue: 0, disabled: false}
    const endState = openReducer(startState, changeStartValue(4))

    if (endState) {
        expect(endState.startValue).toBe(4)
    } else {
        expect(endState).toBe(undefined)
    }
})

test('change disabled button status', () => {
    const startState = {number: 2, maxValue: 5, startValue: 0, disabled: false}
    const endState = openReducer(startState, changeDisabledButton(true))

    if (endState) {
        expect(endState.disabled).toBe(true)
    } else {
        expect(endState).toBe(undefined)
    }
})