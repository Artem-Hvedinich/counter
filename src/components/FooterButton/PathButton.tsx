import React from 'react';
import {NavLink} from 'react-router-dom';
import {PATH} from "../../App";
import s from './PathButton.module.css'

export const PathButton = () => {
    const setActive = ({isActive}: any) => isActive ? s.active : s.anActive
    return (
        <div className={s.style}>
            <NavLink to={PATH.OnePageCounter} className={setActive}>OnePage</NavLink>
            <NavLink to={PATH.OpenCounter} className={setActive}>Open</NavLink>

        </div>
    );
};

