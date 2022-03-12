import React from "react";
import {Number} from "./Number";
import {Button} from "./Button";
import {PATH} from "../App";
import {useLocation} from "react-router-dom";

export type CounterBlockPropsType = {
    addInc: () => void
    addReset: () => void
    maxValue: number
    startValue: number
    disabled: boolean
    number: number
    arrSet?: () => void
}

export const CounterBlock: React.FC<CounterBlockPropsType> = ({
                                                                  addInc,
                                                                  addReset,
                                                                  maxValue,
                                                                  startValue,
                                                                  disabled,
                                                                  number,
                                                                  arrSet
                                                              }) => {
    const classNumber = () => number < maxValue ? 'Number' : 'NumberRED'
    const disabledInc = () => {
        if (disabled) {
            return number >= maxValue
        }
        return !disabled
    }
    const disabledReset = () => {
        if (disabled) {
            return number <= startValue
        }
        return !disabled
    }
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
                                disabledHandler={false}
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