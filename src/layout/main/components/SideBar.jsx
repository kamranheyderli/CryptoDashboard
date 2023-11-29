import React from 'react';


const SideBar = ({ open }) => {

    return (
        <div className={`sidebar ${open ? "active" : ""}`}>
            <div className="sidebar_head">
                <img src="	https://incrypto.merku.love/static/media/logo.6614d7c9b708dc24193530dd4d1de597.svg" alt="" />
                <h1>InCrypto</h1>
            </div>
        </div>
    )
}

export default SideBar