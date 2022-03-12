import React, {ChangeEvent} from "react";
import {Value} from "./Value";
import {Button} from "./Button";

export type BlockValuePropsType = {
    onChangeHandlerMax: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeHandlerStart: (e: ChangeEvent<HTMLInputElement>) => void
    addSet: () => void
    maxValue: number
    startValue: number
    disabled: boolean
}
export const BlockValue = (props: BlockValuePropsType) => {

    const classInput = () => {
        if (props.startValue >= props.maxValue) {
            return 'inputRED'
        }
        if (props.startValue < 0) {
            return 'inputRED'
        }
        return 'inputClass'
    }

    return (
        <div>
            <div className='blockApp'>
                <div className='valueBlock'>
                    <Value className={classInput} value={props.maxValue} title='max value:'
                           onChangeHandler={props.onChangeHandlerMax}/>
                    <Value className={classInput} value={props.startValue} title='start value:'
                           onChangeHandler={props.onChangeHandlerStart}/>
                </div>
                <div className='blockButton'>
                    <Button onClickHandler={props.addSet}
                            disabledHandler={props.disabled}
                            title="Set"
                    />
                </div>
            </div>
        </div>
    )
}