import React, {ChangeEvent, useCallback, useEffect} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import OpenCounter from "./components/OpenCounter/OpenCounter";
import {OnePageCounter} from "./components/OnePageCounter/OnePageCounter";
import {PathButton} from "./components/FooterButton/PathButton";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {
    changeDisabledButton,
    changeMaxValue, changeNumberInc,
    changeStartValue,
    StateType
} from "./state/openCounterReducer/open-reducer";

export const PATH = {
    OpenCounter: '/openCounter',
    OnePageCounter: '/onePageCounter'
}

export type CounterPropsType = {
    onChangeHandlerMax: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeHandlerStart: (e: ChangeEvent<HTMLInputElement>) => void
    addSet: () => void
    addReset: () => void
    addInc: () => void
    maxValue: number
    startValue: number
    disabled: boolean
    number: number
}

export const App = () => {
    let open = useSelector<AppRootStateType, StateType>(state => state.open)
    const dispatch = useDispatch()

    useEffect(() => {
        let maxValueAsString = localStorage.getItem('counterMaxValue')
        if (maxValueAsString) {
            dispatch(changeMaxValue(JSON.parse(maxValueAsString)))
        }
        let startValueAsString = localStorage.getItem('counterStartValue')
        if (startValueAsString) {
            dispatch(changeStartValue(JSON.parse(startValueAsString)))
        }
        let numberAsString = localStorage.getItem('counterNumberValue')
        if (numberAsString) {
            dispatch(changeNumberInc(JSON.parse(numberAsString)))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('counterMaxValue', JSON.stringify(open.maxValue))
    }, [open.maxValue])
    useEffect(() => {
        localStorage.setItem('counterStartValue', JSON.stringify(open.startValue))
    }, [open.startValue])
    useEffect(() => {
        localStorage.setItem('counterNumberValue', JSON.stringify(open.number))
    }, [open.number])

//Logic of value block
    const onChangeHandlerMax = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeMaxValue(e.currentTarget.valueAsNumber))
        dispatch(changeDisabledButton(false))
    }, [dispatch])
    const onChangeHandlerStart = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeStartValue(e.currentTarget.valueAsNumber))
        dispatch(changeDisabledButton(false))
    }, [dispatch])
    const addSet = () => {
        dispatch(changeNumberInc(open.startValue))
        dispatch(changeDisabledButton(true))
    }


//Logic of count block
    const addInc = () => open.number < open.maxValue && dispatch(changeNumberInc(open.number + 1))
    const addReset = () => dispatch(changeNumberInc(open.startValue))

    return (
        <div>
            <PathButton/>
            <Routes>
                <Route path={'*'} element={<Navigate to={PATH.OnePageCounter}/>}/>
                <Route path={PATH.OpenCounter}
                       element={<OpenCounter onChangeHandlerMax={onChangeHandlerMax} addInc={addInc}
                                             onChangeHandlerStart={onChangeHandlerStart} addSet={addSet}
                                             addReset={addReset} maxValue={open.maxValue}
                                             startValue={open.startValue} disabled={open.disabled}
                                             number={open.number}

                       />}/>
                <Route path={PATH.OnePageCounter}
                       element={<OnePageCounter onChangeHandlerMax={onChangeHandlerMax} addInc={addInc}
                                                onChangeHandlerStart={onChangeHandlerStart} addSet={addSet}
                                                addReset={addReset} maxValue={open.maxValue}
                                                startValue={open.startValue} disabled={open.disabled}
                                                number={open.number}

                       />}/>
            </Routes>
        </div>
    );
};

