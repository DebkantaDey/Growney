import React, { useState, useEffect } from 'react'
import axios from "axios";
import './Idoieo.css';

export default function Idoieo() {

    // Get IDO data
    const [idoData, setIdoData] = useState([])
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get('http://localhost:8080/ido');
                setIdoData(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchImages();
    }, []);
    return (
        <div className="idoIeo">
            <table className="table float-start mt-3">
                <thead style={{ backgroundColor: '#facb92', color: 'white' }}>
                    <tr className="size">
                        <th scope="col" className="name">Project</th>
                        <th scope="col">Backedby</th>
                        <th scope="col">Partners</th>
                        <th scope="col">Coin/Token Sale Partnars</th>
                        <th scope="col">Audits</th>
                    </tr>
                </thead>
                <tbody>
                    {idoData?.map((item, index) =>
                        <tr className="size">
                            <td className="name bg-white">
                                <i className="fa-regular fa-star watchlist-star"></i><img className="logo-image"></img>  {item.project}
                            </td>
                            <td>{item.backedby}</td>
                            <td>{item.partners}</td>
                            <td>{item.coin}</td>
                            <td>{item.audits}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
