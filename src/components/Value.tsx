import React, {ChangeEvent} from "react";

type ValuePropsType = {
    title: string
    onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
    value: number
    className: () => 'inputClass' | 'inputRED'
}


export const Value: React.FC<ValuePropsType> = ({title, onChangeHandler, value, className}) => {

    const newValue = isNaN(value) ? 0 : value

    return (
        <div className='value'>
            <p>{title}</p>
            <input value={newValue} type={"number"} className={className()} onChange={onChangeHandler}/>
        </div>
    )
}