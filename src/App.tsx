import React, {ChangeEvent, useEffect, useState} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import OpenCounter from "./OpenCounter/OpenCounter";
import {OnePageCounter} from "./OnePageCounter/OnePageCounter";
import {PathButton} from "./components/FooterButton/PathButton";

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
    const [number, setNumber] = useState<number>(0)
    const [disabled, setDisabled] = useState(false)
    const [maxValue, setMaxValue] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)

    useEffect(() => {
        let maxValueAsString = localStorage.getItem('counterMaxValue')
        if (maxValueAsString) {
            setMaxValue(JSON.parse(maxValueAsString))
        }
        let startValueAsString = localStorage.getItem('counterStartValue')
        if (startValueAsString) {
            setStartValue(JSON.parse(startValueAsString))
        }
        let numberAsString = localStorage.getItem('counterNumberValue')
        if (numberAsString) {
            setNumber(JSON.parse(numberAsString))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('counterMaxValue', JSON.stringify(maxValue))
    }, [maxValue])
    useEffect(() => {
        localStorage.setItem('counterStartValue', JSON.stringify(startValue))
    }, [startValue])
    useEffect(() => {
        localStorage.setItem('counterNumberValue', JSON.stringify(number))
    }, [number])

//Logic of value block
    const onChangeHandlerMax = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue((e.currentTarget.valueAsNumber))
        setDisabled(false)
    }
    const onChangeHandlerStart = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue((e.currentTarget.valueAsNumber))
        setDisabled(false)
    }
    const addSet = () => {
        setNumber(startValue)
        setDisabled(true)
    }

//Logic of count block
    const addInc = () => number < maxValue && setNumber(number + 1)
    const addReset = () => setNumber(startValue)

    return (
        <div>
            <PathButton/>
            <Routes>
                <Route path={'*'} element={<Navigate to={PATH.OnePageCounter}/>}/>
                <Route path={PATH.OpenCounter}
                       element={<OpenCounter onChangeHandlerMax={onChangeHandlerMax}
                                             onChangeHandlerStart={onChangeHandlerStart} addSet={addSet}
                                             addReset={addReset} addInc={addInc} maxValue={maxValue}
                                             startValue={startValue} disabled={disabled} number={number}

                       />}/>
                <Route path={PATH.OnePageCounter}
                       element={<OnePageCounter onChangeHandlerMax={onChangeHandlerMax}
                                                onChangeHandlerStart={onChangeHandlerStart} addSet={addSet}
                                                addReset={addReset} addInc={addInc} maxValue={maxValue}
                                                startValue={startValue} disabled={disabled} number={number}

                       />}/> </Routes>
        </div>
    );
};

