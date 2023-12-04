import React, { useState, useEffect } from 'react'
import axios from "axios";

function Notchproject() {

    // Get New Project data
    const [newProjectData, setNewProjectData] = useState([])
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get('http://localhost:8080/newproject');
                setNewProjectData(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchImages();
    }, []);
    return (
        <div className="newProject">
            <table className="table float-start mt-3">
                <thead style={{ backgroundColor: '#facb92', color: 'white' }}>
                    <tr className="size">
                        <th scope="col" className="name">Project</th>
                        <th scope="col">Category</th>
                        <th scope="col">Total Raise</th>
                        <th scope="col">Round</th>
                        <th scope="col">Investors</th>
                    </tr>
                </thead>
                <tbody>
                    {newProjectData?.map((item, index) =>
                        <tr className="item-name size">
                            <td className="name bg-white">
                                <i className="fa-regular fa-star watchlist-star"></i><img className="logo-image"></img>  {item.project}
                            </td>
                            <td>{item.category}</td>
                            <td>{item.totalRaise}</td>
                            <td>{item.round}</td>
                            <td>{item.investors}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
export default Notchproject;