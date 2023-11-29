import React, { useState } from 'react'
import FontScale from './FontScale'
import SearchInput from './SearchInput';
import { GiHamburgerMenu } from "react-icons/gi";
import SideBar from './SideBar';
import Overlay from './Overlay';
import DarkMode from './DarkMode';
import { useSelector } from 'react-redux';


const Header = () => {
    const [open, setOpen] = useState(false);
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);
    const isDarkMode = useSelector((state) => state.mode.darkMode);

    const handleClick = () => {
        setOpen(!open)
        setIsOverlayVisible(!isOverlayVisible);
    }
    return (
        <header>
            <div className="container">
                <div className="all_header">
                    <div className="logo">
                        <h2>Dashboard</h2>
                    </div>
                    <div className="right">
                        <FontScale />
                        <SearchInput />
                        <DarkMode />
                        <div className="hamburger">
                            <Overlay isOverlayVisible={isOverlayVisible} onClick={handleClick} />
                            <SideBar open={open} />
                            <GiHamburgerMenu className={`ham_icon ${isDarkMode ? "ham_dark" : ""}`} onClick={handleClick} />
                        </div>
                    </div>
                </div>
            </div>


        </header>
    )
}

export default Header