import React from 'react';
import { CiWallet } from "react-icons/ci";
import { bitcoinData } from "../../../helpers/mockdata";
import WalletCoinList from './WalletCoinList';
import { useSelector } from 'react-redux';

const Wallet = () => {

    const isDarkMode = useSelector((state) => state.mode.darkMode);
    return (
        <div className='wallet'>
            <div className="wallet_head">
                <CiWallet className='wallet_icons' />
                <span>Wallet Cryptocurrency</span>
            </div>

            <div className={`wallet_card  ${isDarkMode ? "dark_mode_card" : ""} `}>
                <img src="https://incrypto.merku.love/static/media/wallet.438f370c1c5a7e7244ae.webp" alt="" />
                <div className="total">
                    <div className="tittle">
                        <h5>Total Assets</h5>
                    </div>
                    <div className="price">
                        <span>4960.01 Usd</span>
                    </div>
                    <div className="btc">
                        <span>0.234153 Btc</span>
                    </div>
                </div>
            </div>

            <div className="wallet_list">
            {
                bitcoinData.map((item) => (
                    <WalletCoinList key={item.id} data={item} />
                ))
            }
            </div>

          
        </div>
    )
}

export default Wallet

