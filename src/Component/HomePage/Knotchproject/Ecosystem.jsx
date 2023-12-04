import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './EcoSystem.css';

export default function Ecosystem() {

    // Get Ecosystem  data
    const [ecosystem, setEcosystem] = useState([])
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get('http://localhost:8080/ecosystem');
                setEcosystem(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchImages();
    }, []);
    return (
        <div className="ecoSystem">
            <table className="table float-start mt-3">
                <thead style={{ backgroundColor: '#facb92', color: 'white' }}>
                    <tr className="size">
                        <th scope="col" className="name">Name</th>
                        <th scope="col">Project</th>
                    </tr>
                </thead>
                <tbody>
                    {ecosystem?.map((item, index) =>
                        <tr className="size">
                            <td className="name bg-white">
                                <i className="fa-regular fa-star watchlist-star"></i> <img src={item.image} className="logo-image"></img> {item.name}
                            </td>
                            <td>{item.project}</td>
                        </tr>
                    )}
                    {/* <tr className="size">
                        <td className="name bg-white">
                            <i className="fa-regular fa-star watchlist-star"></i> <img src="https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/64bc2225948776bd5d69eacd_ChainGPTPR.jpeg" className="logo-image"></img> Layer 2
                        </td>
                        <td></td>
                    </tr>
                    <tr className="size">
                        <td className="name bg-white">
                            <i className="fa-regular fa-star watchlist-star"></i> <img src="https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/64bc2225948776bd5d69eacd_ChainGPTPR.jpeg" className="logo-image"></img> Centralized Exchange (CEX)
                        </td>
                        <td></td>
                    </tr>
                    <tr className="size">
                        <td className="name bg-white">
                            <i className="fa-regular fa-star watchlist-star"></i> <img src="https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/64bc2225948776bd5d69eacd_ChainGPTPR.jpeg" className="logo-image"></img> Decentralized Finance (DeFi)
                        </td>
                        <td></td>
                    </tr>
                    <tr className="size">
                        <td className="name bg-white">
                            <i className="fa-regular fa-star watchlist-star"></i> <img src="https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/64bc2225948776bd5d69eacd_ChainGPTPR.jpeg" className="logo-image"></img> Coinlist
                        </td>
                        <td></td>
                    </tr>
                    <tr className="size">
                        <td className="name bg-white">
                            <i className="fa-regular fa-star watchlist-star"></i> <img src="https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/64bc2225948776bd5d69eacd_ChainGPTPR.jpeg" className="logo-image"></img> Binance Launchpad
                        </td>
                        <td></td>
                    </tr>
                    <tr className="size">
                        <td className="name bg-white">
                            <i className="fa-regular fa-star watchlist-star"></i> <img src="https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/64bc2225948776bd5d69eacd_ChainGPTPR.jpeg" className="logo-image"></img> Dao Makers
                        </td>
                        <td></td>
                    </tr>
                    <tr className="size">
                        <td className="name bg-white">
                            <i className="fa-regular fa-star watchlist-star"></i> <img src="https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/64bc2225948776bd5d69eacd_ChainGPTPR.jpeg" className="logo-image"></img> Seedifi
                        </td>
                        <td></td>
                    </tr>
                    <tr className="size">
                        <td className="name bg-white">
                            <i className="fa-regular fa-star watchlist-star"></i> <img src="https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/64bc2225948776bd5d69eacd_ChainGPTPR.jpeg" className="logo-image"></img> Wallet
                        </td>
                        <td></td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    )
}
