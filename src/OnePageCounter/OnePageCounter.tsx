import React, {useState} from 'react';
import '../App.css';
import {BlockValue} from "../components/BlockValue";
import {CounterBlock} from "../components/CounterBlock";
import {CounterPropsType} from "../App";

export const OnePageCounter = (props: CounterPropsType) => {

    const [arr, setArr] = useState(false)
    const arrSet = () => {
        setArr(!arr)
    }

    const newAddSet = () => {
        props.addSet()
        arrSet()
    }

    return (
        <div className="App">
            {(arr ?
                    <BlockValue onChangeHandlerMax={props.onChangeHandlerMax}
                                onChangeHandlerStart={props.onChangeHandlerStart}
                                addSet={newAddSet} maxValue={props.maxValue}
                                startValue={props.startValue} disabled={props.disabled}
                    />
                    :
                    <CounterBlock addReset={props.addReset}
                                  addInc={props.addInc}
                                  arrSet={arrSet}
                                  maxValue={props.maxValue}
                                  startValue={props.startValue}
                                  disabled={props.disabled}
                                  number={props.number}
                    />
            )}
        </div>
    )
}
