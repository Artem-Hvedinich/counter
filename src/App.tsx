import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {BlockValue} from "./components/BlockValue";
import {CounterBlock} from "./components/CounterBlock";


export type ButtonsType = 'set' | 'inc' | 'reset'

const App = () => {
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
        <div className="App">

            <BlockValue onChangeHandlerMax={onChangeHandlerMax}
                        onChangeHandlerStart={onChangeHandlerStart}
                        addSet={addSet} maxValue={maxValue} startValue={startValue}
                        disabled={disabled}
            />
            <CounterBlock addReset={addReset}
                          addInc={addInc}
                          maxValue={maxValue}
                          startValue={startValue}
                          disabled={disabled}
                          number={number}
            />
        </div>
    )
}

export default App;

