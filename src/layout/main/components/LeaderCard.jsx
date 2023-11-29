import React from 'react'
import { useSelector } from 'react-redux';

const LeaderCard = ({ data, id }) => {

    const { name, changePercent24Hr } = data;

    const isIncreased = parseFloat(changePercent24Hr) > 0;
    const shortChangePercent = parseFloat(changePercent24Hr).toFixed(2);

    const fontSize = useSelector((state) => state.fontSize.value);
    const isDarkMode = useSelector((state) => state.mode.darkMode);


    const textStyle = {
        fontSize: `${fontSize}px`,
    };

    return (
        <div className={`leader_card ${isDarkMode ? "dark_mode_leader":""}`}>
            <div className="left">
                <span>{id}</span>
                <h5>{name}</h5>
            </div>
            <div className="right">
                <h4 className={`${ isDarkMode ? "color__light" : "color__dark" }`} style={textStyle}>Wallet Increase</h4>
                <span className={isIncreased ? 'increase' : 'decrease'}>
                    {isIncreased ? '+' : ''}{shortChangePercent}%
                </span>
            </div>

        </div>
    )
}

export default LeaderCard