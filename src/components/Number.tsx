import React from "react";

type NumberPropsType = {
    classNumber: () => "Number" | "NumberRED"
    number: number
}

export const Number = (props: NumberPropsType) => {
    return (
        <div className={props.classNumber()}>
            {props.number}
        </div>
    )
}