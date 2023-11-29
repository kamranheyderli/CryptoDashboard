import React from 'react';
import { CiStar } from "react-icons/ci";
import { useSelector } from 'react-redux';


const CoinsCard = ({ data }) => {
    const { name, priceUsd, changePercent24Hr } = data;

    const isDarkMode = useSelector((state) => state.mode.darkMode);

   
    const isIncreased = parseFloat(changePercent24Hr) > 0;
    const shortPrice = parseFloat(priceUsd).toFixed(2);
    const shortChangePercent = parseFloat(changePercent24Hr).toFixed(2);

    const fontSize = useSelector((state) => state.fontSize.value);

    const textStyle = {
        fontSize: `${fontSize}px`,
    };



    return (
        <div className={`coins_card ${isDarkMode ? "bg_dark_card" : ""}`} >
            <div className="left">
                <div className="rating">
                    <CiStar className='star_icons' />
                </div>
                <div className="coins_info">
                    <div className="image">
                        <img src="https://incrypto.merku.love/static/media/orchid.c0064d2c5ae2191975adc28d25423622.svg" alt="" />
                    </div>
                    <div className="info">
                        <h5 className={`${ isDarkMode ? "color__light" : "color__dark" }`} style={textStyle}>{name}</h5>
                        <span>{shortPrice}$</span>
                    </div>
                </div>
            </div>
            <div className="right">
              
                <span className={isIncreased ? 'increase' : 'decrease'}>
                    {isIncreased ? '+' : ''}{shortChangePercent}%
                </span>
            </div>
        </div>
    );
}

export default CoinsCard;
