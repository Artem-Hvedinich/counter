import React from 'react';
import '../../App.css';
import {BlockValue} from "../BlockValue";
import {CounterBlock} from "../CounterBlock";
import {CounterPropsType} from "../../App";

const OpenCounter = (props: CounterPropsType) => {
    return (
        <div className="App">
            <BlockValue onChangeHandlerMax={props.onChangeHandlerMax}
                        onChangeHandlerStart={props.onChangeHandlerStart}
                        addSet={props.addSet}
            />
            <CounterBlock addReset={props.addReset}
                          addInc={props.addInc}
            />
        </div>
    )
}

export default OpenCounter;

