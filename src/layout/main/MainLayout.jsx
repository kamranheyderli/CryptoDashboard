import React from 'react'
import Wallet from './components/Wallet'
import BitCoinsList from './components/BitCoinsList'
import LeaderBord from './components/LeaderBord'

const MainLayout = () => {
    return (
        <div className='container'>
            <div className="main_layout">
                <Wallet />
                <BitCoinsList />
                <LeaderBord />
            </div>
        </div>
    )
}

export default MainLayout