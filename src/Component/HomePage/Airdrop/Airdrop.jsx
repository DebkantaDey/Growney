import React from 'react'
import './Airdrop.css';

export default function Airdrop() {
    return (
        <div className="row mt-3 airdropsCards">
            <div className="col-lg-4 col-sm-12 col-md-4 card bg-light mb-3 airdrops-card">
                <div className="card-body d-flex shadow bg-body rounded">
                    <div className="airdrop-img-div">
                        <img src="https://www.thecoinrepublic.com/wp-content/uploads/2022/08/XRP-Pair-to-Be-Delisted-by-Bitstamp-Exchange-ripple-news-top-stories.jpg" className="airdropcard-image rounded-circle d-flex justify-content-center m-auto"></img>
                    </div>
                    <div className="airdrop-content-div">
                        <h5 className="card-title">Bitstamp US Delisting</h5>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-4 card bg-light mb-3 airdrops-card">
                <div className="card-body d-flex shadow bg-body rounded">
                    <div className="airdrop-img-div">
                        <img src="https://www.a2ztaxcorp.com/wp-content/uploads/2020/03/GST-Composition-Scheme.jpg" className="airdropcard-image rounded-circle  d-flex justify-content-center m-auto"></img>
                    </div>
                    <div className="airdrop-content-div">
                        <h5 className="card-title">Settlement Opt-out Limit</h5>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-4 card bg-light mb-3 airdrops-card">
                <div className="card-body d-flex shadow bg-body rounded">
                    <div className="airdrop-img-div">
                        <img src="https://cdn.pixabay.com/photo/2015/03/26/18/36/satellite-693204_640.jpg" className="airdropcard-image rounded-circle  d-flex justify-content-center m-auto"></img>
                    </div>
                    <div className="airdrop-content-div">
                        <h5 className="card-title">X Space</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
