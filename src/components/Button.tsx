import React from "react";

type ButtonPropsType = {
    disabledHandler?: boolean
    onClickHandler?: () => void
    title: string
}

export const Button = (props: ButtonPropsType) => {
    return (
        <button disabled={props.disabledHandler}
                onClick={props.onClickHandler}>{props.title}</button>
    )
}