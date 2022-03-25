import React, {ChangeEvent} from "react";
import {Value} from "./Value";
import {Button} from "./Button";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";
import {StateType} from "../state/openCounterReducer/open-reducer";

export type BlockValuePropsType = {
    onChangeHandlerMax: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeHandlerStart: (e: ChangeEvent<HTMLInputElement>) => void
    addSet: () => void

}
export const BlockValue = (props: BlockValuePropsType) => {
    let open = useSelector<AppRootStateType, StateType>(state => state.open)

    const classInput = () => {
        if (open.startValue >= open.maxValue) {
            return 'inputRED'
        }
        if (open.startValue < 0) {
            return 'inputRED'
        }
        return 'inputClass'
    }

    return (
        <div>
            <div className='blockApp'>
                <div className='valueBlock'>
                    <Value className={classInput} value={open.maxValue} title='max value:'
                           onChangeHandler={props.onChangeHandlerMax}/>
                    <Value className={classInput} value={open.startValue} title='start value:'
                           onChangeHandler={props.onChangeHandlerStart}/>
                </div>
                <div className='blockButton'>
                    <Button onClickHandler={props.addSet}
                            disabledHandler={open.disabled}
                            title="Set"
                    />
                </div>
            </div>
        </div>
    )
}