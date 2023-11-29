import React from 'react'
import { useSelector } from 'react-redux';

const WalletCoinList = ({ data }) => {

    const fontSize = useSelector((state) => state.fontSize.value);
    const isDarkMode = useSelector((state) => state.mode.darkMode);

    const textStyle = {
        fontSize: `${fontSize}px`,
    };
    const { image, name, price, lit_name } = data;

    
    return (
        <div className={`wallet_coins_list ${isDarkMode ? "dark_mode" : ""}`}>
            <div className="left">
                <div className="image">
                    <img src={image} alt="" />
                </div>
                <div className="info">
                    <h5 className={`${ isDarkMode ? "color__light" : "color__dark" }`} style={textStyle}>{name}</h5>
                    <span style={textStyle}>{lit_name}</span>
                </div>
            </div>
            <div className="right">
                <div className="price">
                    <span style={textStyle}>{price}$</span>
                </div>
            </div>
        </div>
    )
}

export default WalletCoinList