import React from "react";
import {Number} from "./Number";
import {Button} from "./Button";
import {PATH} from "../App";
import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";
import {changeMaxValue, changeNumberInc, StateType} from "../state/openCounterReducer/open-reducer";

export type CounterBlockPropsType = {
    addInc: () => void
    addReset: () => void
    arrSet?: () => void
}

export const CounterBlock: React.FC<CounterBlockPropsType> = ({
                                                                  addInc,
                                                                  addReset,
                                                                  arrSet
                                                              }) => {
    let open = useSelector<AppRootStateType, StateType>(state => state.open)
    const dispatch = useDispatch()

    const classNumber = () => open.number < open.maxValue ? 'Number' : 'NumberRED'
    const disabledInc = () => {
        if (open.disabled) {
            return open.number >= open.maxValue
        }
        return !open.disabled
    }
    const disabledReset = () => {
        if (open.disabled) {
            return open.number <= open.startValue
        }
        return !open.disabled
    }

    const content = () => {
        if (open.maxValue <= open.startValue) {
            return <div className={'NoValid'}>'Is not valid'</div>
        }
        if (open.startValue < 0) {
            return <div className={'NoValid'}>'Start value no valid'</div>
        }
        if (!open.disabled) {
            return <div className={'NoValid'}>'Enter set'</div>
        }
         else if (open.disabled) {
            return <Number classNumber={classNumber}
                           number={open.number}
            />
        }
    }
    const buttonFilter = useLocation()

    const buttonContent = () => {
        if (buttonFilter.pathname === PATH.OpenCounter) {
            return (
                <div className={'blockApp'}>
                    {content()}
                    <div className='blockButton'>
                        <Button onClickHandler={addInc}
                                disabledHandler={disabledInc()}
                                title="Inc"
                        />
                        <Button onClickHandler={addReset}
                                disabledHandler={disabledReset()}
                                title="Reset"
                        />
                    </div>
                </div>
            )
        }
        if (buttonFilter.pathname === PATH.OnePageCounter) {
            return (
                <div className={'blockApp'}>
                    {content()}
                    <div className='blockButton'>
                        <Button onClickHandler={addInc}
                                disabledHandler={disabledInc()}
                                title="Inc"
                        />
                        <Button onClickHandler={addReset}
                                disabledHandler={disabledReset()}
                                title="Reset"
                        />
                        <Button onClickHandler={arrSet}
                                title="Set"
                        />
                    </div>
                </div>
            )
        }
    }

    return (
        <div>
            {buttonContent()}
        </div>
    )
}