import React, { useState, useEffect } from 'react'
import axios from "axios";
import './KillerProject.css';

export default function KillerProject() {

    // Get Killer Project data
    const [killerProject, setKillerProject] = useState([])
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get('http://localhost:8080/killerproject');
                setKillerProject(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchImages();
    }, []);
    return (
        <div className="container killerProjects">
            <h1 className="name heading">Recent Tranding killer projects</h1>
            <div className="killer-project">
                <table className="table">
                    <thead style={{ backgroundColor: '#facb92', color: 'white' }}>
                        <tr className="size">
                            <th scope="col" className="name" style={{ backgroundColor: '#facb92' }}>Projects</th>
                            <th scope="col">Activities</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr className="size">
                                <td className="name item-name bg-white">
                                    <i className="fa-regular fa-star watchlist-star"></i> <img src={item.image} alt="space id" className="logo-image"></img> {item.projects}
                                </td>
                                <td>
                                    {item.activities}
                                </td>
                            </tr> */}
                        {killerProject?.map((item,index)=>
                        <tr className="size">
                            <td className="name bg-white">
                                <i className="fa-regular fa-star watchlist-star"></i> <img src={item.image} className="logo-image"></img> {item.projects}
                            </td>
                            <td>
                                {item.projects}
                            </td>
                        </tr>
                        )}
                        {/* <tr className="size">
                            <td className="name bg-white">
                                <i className="fa-regular fa-star watchlist-star"></i> <img src="https://pbs.twimg.com/profile_images/1639203410695143426/p195CZDM_400x400.jpg" className="logo-image"></img> Affine Defi
                            </td>
                            <td>
                                Affine Defi RAISED MONEY IN THE BEAR MARKET Total <br></br>Raised 7
                                Million Led by Coinbase venture{" "}
                            </td>
                        </tr>
                        <tr className="size">
                            <td className="name bg-white">
                                <i className="fa-regular fa-star watchlist-star"></i> <img src="https://pbs.twimg.com/profile_images/1639203410695143426/p195CZDM_400x400.jpg" className="logo-image"></img> Affine Defi
                            </td>
                            <td>
                                Affine Defi RAISED MONEY IN THE BEAR MARKET Total <br></br>Raised 7
                                Million Led by Coinbase venture{" "}
                            </td>
                        </tr> */}

                    </tbody >
                </table>
            </div >
        </div>
    )
}
