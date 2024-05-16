import React, { Component } from 'react';
import './beranda.css';
import Banner from './img/banner.png';
import ticketsoad from './img/ticketsoad.jpeg'

class Beranda extends Component {
    render() {
        return (
            <div className="container">
                {/* Banner Image */}
                <a href='./beranda'><img
                    src={Banner}
                    className="banner-img" /></a>

                {/* Trending Background */}
                <div className="trending-bg">
                    <div className='trending'>
                        <h1>1</h1>
                    </div> 
                </div>

                {/* Kontainer Jual Beli */}
                <div className="ticket-container">
                    <div className="item">
                        <a href='#'><img src={ticketsoad} alt="SOAD ticket" />
                        <p>System Of A Down</p></a>
                    </div>
                    <div className="item">
                        <a href='#'><img src={ticketsoad} alt="SOAD ticket" />
                        <p>System Of A Down</p></a>
                    </div>
                    <div className="item">
                        <a href='#'><img src={ticketsoad} alt="SOAD ticket" />
                        <p>System Of A Down</p></a>
                    </div>
                    <div className="item">
                        <a href='#'><img src={ticketsoad} alt="SOAD ticket" />
                        <p>System Of A Down</p></a>
                    </div>
                </div>
                <div className="ticket-container">
                    <div className="item">
                        <a href='#'><img src={ticketsoad} alt="SOAD ticket" />
                        <p>System Of A Down</p></a>
                    </div>
                    <div className="item">
                        <a href='#'><img src={ticketsoad} alt="SOAD ticket" />
                        <p>System Of A Down</p></a>
                    </div>
                    <div className="item">
                        <a href='#'><img src={ticketsoad} alt="SOAD ticket" />
                        <p>System Of A Down</p></a>
                    </div>
                    <div className="item">
                        <a href='#'><img src={ticketsoad} alt="SOAD ticket" />
                        <p>System Of A Down</p></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Beranda;
