import React from 'react';
import '../App.css';
import {BlockValue} from "../components/BlockValue";
import {CounterBlock} from "../components/CounterBlock";
import {CounterPropsType} from "../App";

const OpenCounter = (props: CounterPropsType) => {
    return (
        <div className="App">
            <BlockValue onChangeHandlerMax={props.onChangeHandlerMax}
                        onChangeHandlerStart={props.onChangeHandlerStart}
                        addSet={props.addSet} maxValue={props.maxValue}
                        startValue={props.startValue} disabled={props.disabled}
            />
            <CounterBlock addReset={props.addReset}
                          addInc={props.addInc}
                          maxValue={props.maxValue}
                          startValue={props.startValue}
                          disabled={props.disabled}
                          number={props.number}
            />
        </div>
    )
}

export default OpenCounter;

