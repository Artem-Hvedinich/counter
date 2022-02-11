import React from "react";
import {ButtonsType} from "./App";

type ButtonPropsType = {
    disabledHandler?: boolean
    onClickHandler: () => void
    title: string
    disabled?: boolean
    typeButton?: ButtonsType
}

export const Button: React.FC<ButtonPropsType> = ({
                                                      disabled,
                                                      typeButton,
                                                      title,
                                                      disabledHandler,
                                                      onClickHandler
                                                  }) => {
    return (
        <button disabled={disabledHandler}
                onClick={onClickHandler}>{title}</button>
    )
}