import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Number} from "./Number";
import {Button} from "./Button";
import {Value} from "./Value";


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
    const addInc = () => number < maxValue && setNumber(number + 1)
    const addReset = () => setNumber(startValue)
    const classNumber = () => number < maxValue ? 'Number' : 'NumberRED'
    const disabledInc = number >= maxValue
    const disabledReset = number <= startValue

    const content = () => {
        if (maxValue <= startValue) {
            return <div className={'NoValid'}>'Is not valid'</div>
        }
        if (startValue < 0) {
            return <div className={'NoValid'}>'Start value no valid'</div>
        }
        if (!disabled) {
            return <div className={'NoValid'}>'Enter set'</div>
        } else {
            return <Number classNumber={classNumber}
                           number={number}
            />
        }
    }
    return <div>
        <div className="App">
            <div className='blockApp'>
                <div className='valueBlock'>
                    <Value value={maxValue} title='max value:' onChangeHandler={onChangeHandlerMax}/>
                    <Value value={startValue} title='start value:' onChangeHandler={onChangeHandlerStart}/>
                </div>
                <div className='block_button'>
                    <Button onClickHandler={addSet}
                            disabledHandler={disabled}
                            title="Set"
                    />
                </div>
            </div>

            <div className="App">
                <div className='blockApp'>
                    {content()}
                    <div className='blockButton'>
                        <Button onClickHandler={addInc} disabledHandler={disabledInc} title="Inc"
                        />
                        <Button onClickHandler={addReset} disabledHandler={disabledReset} title="Reset"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default App;