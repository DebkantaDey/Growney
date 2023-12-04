import React, { useState, useEffect } from 'react'
import axios from "axios";
import './Recent.css';

export default function Recent() {

    // Get Unusual Activity data
    const [unusualActivity, setUnusualActivity] = useState([])
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get('http://localhost:8080/unusualactivity');
                setUnusualActivity(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchImages();
    }, []);
    return (
        <div className="container recentActivitys">
            <h1 className="name heading">Recent unusual activity</h1>
            <div className="recent-activity">
                <table className="table">
                    <thead style={{ backgroundColor: '#facb92', color: 'white' }}>
                        <tr className="size">
                            <th scope="col" className="name" style={{ backgroundColor: '#facb92' }}>Projects</th>
                            <th scope="col">Activities</th>
                        </tr>
                    </thead>
                    <tbody>
                        {unusualActivity?.map((item, index) =>
                            <tr className="size">
                                <td className="name item-name bg-white">
                                    <i className="fa-regular fa-star"></i> <img className="logo-image"></img> {item.projects}
                                </td>
                                <td>{item.activities}</td>
                            </tr>
                        )}
                        {/* <tr className="size">
                            <td className="name bg-white">
                                <i className="fa-regular fa-star"></i> <img src="https://s3.coinmarketcap.com/static-gravity/image/426329002f5144e0b2f43b31bf52255d.png" className="logo-image"></img> Affine Defi
                            </td>
                            <td>
                                Affine Defi RAISED MONEY IN THE BEAR MARKET Total <br></br>Raised 7
                                Million Led by Coinbase venture{" "}
                            </td>
                        </tr>
                        <tr className="size">
                            <td className="name bg-white">
                                <i className="fa-regular fa-star"></i> <img src="https://s3.coinmarketcap.com/static-gravity/image/426329002f5144e0b2f43b31bf52255d.png" className="logo-image"></img> Affine Defi
                            </td>
                            <td>
                                Affine Defi RAISED MONEY IN THE BEAR MARKET Total <br></br>Raised 7
                                Million Led by Coinbase venture{" "}
                            </td>
                        </tr>
                        <tr className="size">
                            <td className="name bg-white">
                                <i className="fa-regular fa-star"></i> <img src="https://s3.coinmarketcap.com/static-gravity/image/426329002f5144e0b2f43b31bf52255d.png" className="logo-image"></img> Affine Defi
                            </td>
                            <td>
                                Affine Defi RAISED MONEY IN THE BEAR MARKET Total <br></br>Raised 7
                                Million Led by Coinbase venture{" "}
                            </td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
