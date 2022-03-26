import React, {ChangeEvent, useCallback} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import OpenCounter from "./components/OpenCounter/OpenCounter";
import {OnePageCounter} from "./components/OnePageCounter/OnePageCounter";
import {PathButton} from "./components/FooterButton/PathButton";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {
    changeDisabledButton,
    changeMaxValue, changeNumberInc,
    changeStartValue,
    StateType
} from "./state/openCounterReducer/open-reducer";

export const PATH = {
    OpenCounter: '/openCounter',
    OnePageCounter: '/onePageCounter'
}

export type CounterPropsType = {
    onChangeHandlerMax: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeHandlerStart: (e: ChangeEvent<HTMLInputElement>) => void
    addSet: () => void
    addReset: () => void
    addInc: () => void
}

export const App = () => {
    let open = useSelector<AppRootStateType, StateType>(state => state.open)
    const dispatch = useDispatch()


//Logic of value block
    const onChangeHandlerMax = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeMaxValue(e.currentTarget.valueAsNumber))
        dispatch(changeDisabledButton(false))
    }, [dispatch])
    const onChangeHandlerStart = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeStartValue(e.currentTarget.valueAsNumber))
        dispatch(changeDisabledButton(false))
    }, [dispatch])
    const addSet = () => {
        dispatch(changeNumberInc(open.startValue))
        dispatch(changeDisabledButton(true))
    }


//Logic of count block
    const addInc = () => open.number < open.maxValue && dispatch(changeNumberInc(open.number + 1))
    const addReset = () => dispatch(changeNumberInc(open.startValue))

    return (
        <div>
            <PathButton/>
            <Routes>
                <Route path={'*'} element={<Navigate to={PATH.OnePageCounter}/>}/>
                <Route path={PATH.OpenCounter}
                       element={<OpenCounter onChangeHandlerMax={onChangeHandlerMax} addInc={addInc}
                                             onChangeHandlerStart={onChangeHandlerStart} addSet={addSet}
                                             addReset={addReset}
                       />}/>
                <Route path={PATH.OnePageCounter}
                       element={<OnePageCounter onChangeHandlerMax={onChangeHandlerMax} addInc={addInc}
                                                onChangeHandlerStart={onChangeHandlerStart} addSet={addSet}
                                                addReset={addReset}

                       />}/>
            </Routes>
        </div>
    );
};

