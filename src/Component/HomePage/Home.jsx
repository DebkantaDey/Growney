import React, { useState, useEffect } from 'react'
import './Home.css';
import NewListing from './New Listing/NewListing';
import KillerProject from './KillerProject/KillerProject';
import Notchproject from './NewProject/NewProject';
import Fundinground from './FundingRound/Fundinground';
import Idoieo from './Idoieo/Idoieo';
import Hotnews from './Hotnews/Hotnews';
import Airdrop from './Airdrop/Airdrop';
import Ecosystem from './Knotchproject/Ecosystem';
import Recent from './RecentActivities/Recent';

export default function Home({ buttons, isDark }) {

    const [number, setNumber] = useState(0);
    const buttonChange = (id) => {
        setNumber(id);
        console.log(id);
    };

    const buttonsPerPage = buttons.length; // Change this number to adjust the number of buttons per page
    const [currentPage, setCurrentPage] = useState(0);

    const totalPages = Math.ceil(buttons.length / buttonsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };
    const startIndex = currentPage * buttonsPerPage;
    const visibleButtons = buttons.slice(startIndex, startIndex + buttonsPerPage);


    const [scrollPosition, setScrollPosition] = useState(0);

    const handleNext = () => {
        setScrollPosition(scrollPosition + 100);
    };

    const handlePrev = () => {
        setScrollPosition(scrollPosition - 100);
    };
    return (
        <div className=" container-fluid mt-5 main-container">
            <h1 className="ms-3 website_heading">Grow your money using growney</h1>
            <div className="d-flex mt-3 buttons-area">

                <div className="button-group" style={{ transform: `translateX(-${scrollPosition}px)` }}>
                    {visibleButtons.map((button, index) =>
                        <button key={index} className={index === number ? "active text-nowrap" : "inactive text-nowrap"} onClick={() => buttonChange(index)}>
                            {button}
                        </button>
                    )}
                </div>
                <button className="prev-button" onClick={handlePrev} disabled={scrollPosition === 0}>
                    <i className="fa-solid fa-chevron-left"></i>
                </button>
                <button className="next-button" onClick={handleNext} disabled={scrollPosition >= buttons.length * 100 - 100}>
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
            </div>

            {
                number === 0 ? (
                    <>
                        <NewListing></NewListing>
                        <Recent></Recent>
                        <KillerProject></KillerProject>
                    </>
                )
                    :
                    (
                        ""
                    )
            }
            {number === 1 ?
                <Idoieo></Idoieo>
                :
                ""
            }
            {
                number === 2 ?
                    <Hotnews></Hotnews>
                    :
                    ""
            }
            {
                number === 3 ?
                    <Notchproject></Notchproject>
                    :
                    ""
            }
            {
                number === 4 ?
                    <Airdrop></Airdrop>
                    :
                    ""
            }
            {
                number === 5 ?
                    <Ecosystem></Ecosystem>
                    :
                    ""
            }
            {
                number === 6 ?
                    <Fundinground></Fundinground>
                    :
                    ""
            }
        </div>
    )
}
