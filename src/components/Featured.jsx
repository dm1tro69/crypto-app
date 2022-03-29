import React, {useEffect, useState} from 'react';
import './Featured.css'
import BTC from '../assets/btc-img.png'
import {FiArrowUpRight, FiArrowDown} from 'react-icons/fi'
import axios from "axios";
import {logDOM} from "@testing-library/react";

const Featured = () => {

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false'

    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((e) => console.log(e))
    }, [])

    if (!data) {
        return null
    }

    return (
        <div className={'featured'}>
            <div className={'container'}>
                <div className={'left'}>
                    <h2>Explore top Crypto's Like Bitcoin, Ethereum, and Dogecoin</h2>
                    <p>See al available assets: Cryptocurrencies and NFT's</p>
                    <button className={'btn'}>See More Coins</button>
                </div>

                <div className={'right'}>
                    {data.map((d)=> (
                        <div className={'card'} key={d.id}>
                            <div className={'top'}>

                                <img src={d.image} alt=""/>
                            </div>
                            <div>
                                <h5>{d.name}</h5>
                                <p>${d.current_price.toLocaleString()}</p>
                            </div>
                            {d.price_change_percentage_24h < 0 ? (
                                <span className={'red'}><FiArrowDown/>
                                    {d.price_change_percentage_24h.toFixed(2)}%
                        </span>

                            ) : (
                                <span className={'green'}><FiArrowUpRight/>
                                    {d.price_change_percentage_24h.toFixed(2)}%
                        </span>
                            )
                            }
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Featured;
