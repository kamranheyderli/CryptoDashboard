
import React, { useState, useEffect } from 'react';
import LeaderCard from './LeaderCard';
import { getData } from '../../../services/service';
import { useSelector } from 'react-redux';

const LeaderBord = () => {

    const [data, setData] = useState([]);
    const [visibleData, setVisibleData] = useState(8);
    const isDarkMode = useSelector((state) => state.mode.darkMode);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedData = await getData();
                setData(fetchedData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleLoadMore = () => {
        setVisibleData((prevVisibleData) => prevVisibleData + 8);
    };
    return (
        <div className='leaderboard_list'>
            <div className="leader_head">
                <div className="image">
                    <img src="https://incrypto.merku.love/static/media/icon-cup-light.00a7d9c80caca58fbee9a2ec37d0619d.svg" alt="" />
                </div>
                <h2 className={`${ isDarkMode ? "color__light" : "color__dark" }`}>Leaderboard</h2>
            </div>

            <div className="leader_card_list">
                {
                    data.slice(0, visibleData).map((data, i) => (
                        <LeaderCard key={data.id} id={i} data={data} />
                    ))
                }
                {visibleData < data.length && (
                    <div className="load_more">
                        <button onClick={handleLoadMore}>Load More</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default LeaderBord