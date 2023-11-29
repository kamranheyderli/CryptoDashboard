import React, { useState, useEffect } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import CoinsCard from './CoinsCard';
import { getData } from '../../../services/service';

const BitCoinsList = () => {
    const [data, setData] = useState([]);
    const [visibleData, setVisibleData] = useState(6);
    const [sort, setSort] = useState('asc');

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
    }, [visibleData]);

    const handleLoadMore = () => {
        setVisibleData((prevVisibleData) => prevVisibleData + 6);
    };

    const sortByTitle = () => {
        const sortArr = [...data];
        if (sort === "asc") {
            sortArr.sort((a, b) => a.name.localeCompare(b.name));
            setSort("desc");
        } else {
            sortArr.sort((a, b) => b.name.localeCompare(a.name));
            setSort("asc");
        }
        setData(sortArr);
    };

    const sortByPrice = () => {
        const sortArr = [...data];
        if (sort === "asc") {
            sortArr.sort((a, b) => a.priceUsd - b.priceUsd);
            setSort("desc");
        } else {
            sortArr.sort((a, b) => b.priceUsd - a.priceUsd);
            setSort("asc");
        }
        setData(sortArr);
    };

    const sortBy24 = () => {
        const sortArr = [...data];
        if (sort === "asc") {
            sortArr.sort((a, b) => a.changePercent24Hr - b.changePercent24Hr);
            setSort("desc");
        } else {
            sortArr.sort((a, b) => b.changePercent24Hr - a.changePercent24Hr);
            setSort("asc");
        }
        setData(sortArr);
    };




    return (
        <div className="bitcoins_list">
            <div className="list_sorting">
                <div className="name" onClick={sortByTitle}>
                    <span>Name</span>
                    <div className="icons">
                        <FaChevronUp />
                        <FaChevronDown />
                    </div>
                </div>
                <div className="right">
                    <div className="price" onClick={sortByPrice} >
                        <span>Price</span>
                        <div className="icons">
                            <FaChevronUp />
                            <FaChevronDown />
                        </div>
                    </div>
                    <div className="time_changes" onClick={sortBy24} >
                        <span>Changes 24h</span>
                        <div className="icons">
                            <FaChevronUp />
                            <FaChevronDown />
                        </div>
                    </div>
                </div>
            </div>

            <div className="coins_list">
                {data.slice(0, visibleData).map((item) => (
                    <CoinsCard key={item.id} data={item} />
                ))}
            </div>

            {visibleData < data.length && (
                <div className="load_more">
                    <button onClick={handleLoadMore}>Load More</button>
                </div>
            )}
        </div>
    );
};

export default BitCoinsList;
