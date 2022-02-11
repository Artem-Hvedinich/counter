import React, {ChangeEvent, useState} from "react";

type ValuePropsType = {
    title: string
    onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
    value: number
}


export const Value: React.FC<ValuePropsType> = ({title, onChangeHandler, value}) => {

    return (
        <div className='value'>
            <p>{title}</p>
            <input value={value} type={"number"} className='inputClass' onChange={onChangeHandler}/>
        </div>
    )
}