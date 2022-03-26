const initialState = {
    number: 0,
    maxValue: (localStorage.getItem('counterMaxValue') === null ? 5 : Number(localStorage.getItem('counterMaxValue'))) as number,
    startValue: (localStorage.getItem('counterStartValue') !== null ? Number(localStorage.getItem('counterStartValue')) : 0) as number,
    disabled: false
}

export type StateType = {
    number: number
    maxValue: number
    startValue: number
    disabled: boolean
}

export const openReducer = (state = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case 'CHANGE_NUMBER_INC': {
            return {...state, number: action.number}
        }
        case 'CHANGE_MAX_VALUE': {
            return {...state, maxValue: action.maxValue}
        }
        case 'CHANGE_START_VALUE': {
            return {...state, startValue: action.startValue}
        }
        case 'CHANGE_DISABLED_BUTTON': {
            return {...state, disabled: action.disabled}
        }
        default:
            return state
    }
}
type ActionType = ChangeNumberIncType | ChangeMaxValueType |
    ChangeStartValueType | ChangeDisabledButtonType

export type ChangeNumberIncType = ReturnType<typeof changeNumberInc>
export const changeNumberInc = (number: number) => {
    return {type: 'CHANGE_NUMBER_INC', number} as const
}
export type ChangeMaxValueType = ReturnType<typeof changeMaxValue>
export const changeMaxValue = (maxValue: number) => {
    return {type: 'CHANGE_MAX_VALUE', maxValue} as const
}
export type ChangeStartValueType = ReturnType<typeof changeStartValue>
export const changeStartValue = (startValue: number) => {
    return {type: 'CHANGE_START_VALUE', startValue} as const
}
export type ChangeDisabledButtonType = ReturnType<typeof changeDisabledButton>
export const changeDisabledButton = (disabled: boolean) => {
    return {type: 'CHANGE_DISABLED_BUTTON', disabled} as const
}
