import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { colorMode } from "../../../helpers/mode";
import { togglerDarkMode } from "../../../redux/root/DarkMode";

const DarkMode = () => {

    const dispatch = useDispatch();
    const isDarkMode = useSelector((state) => state.mode.darkMode);

    useEffect(() => {
        if (isDarkMode) {
            document.body.style = `background: ${colorMode.DARK_MOOE}; color: ${colorMode.LIGHT_MODE} !important; transition: .5s background`;
            return;
        }
        document.body.style = `background: ${colorMode.LIGHT_MODE}; transition: .5s background`;
    }, [isDarkMode]);


    return (
        <div id="darkmode__wrapper">
            <input
                type="checkbox"
                id="darkmode__switcher"
                onChange={() => dispatch(togglerDarkMode(!isDarkMode))}
                checked={isDarkMode}
            />
            <label htmlFor="darkmode__switcher"></label>
        </div>
    )
}

export default DarkMode