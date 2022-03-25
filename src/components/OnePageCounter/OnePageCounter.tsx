import React, {useState} from 'react';
import '../../App.css';
import {BlockValue} from "../BlockValue";
import {CounterBlock} from "../CounterBlock";
import {CounterPropsType} from "../../App";

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
                                addSet={newAddSet}
                    />
                    :
                    <CounterBlock addReset={props.addReset}
                                  addInc={props.addInc}
                                  arrSet={arrSet}
                    />
            )}
        </div>
    )
}
