import React, { useState, useEffect } from 'react'
//import FundingRound from './../../../details/FundingRound';
import axios from "axios";
import './FundingRound.css';

export default function Fundinground() {

  // Get Funding Round data
  const [fundingRound, setFundingRound] = useState([])
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:8080/fundinground');
        setFundingRound(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchImages();
  }, []);
  return (
    <div className="fundingRound">
          <table className="table float-start mt-3">
            <thead style={{ backgroundColor: '#facb92', color: 'white' }}>
              <tr className="size">
                <th scope="col" className="name">Project</th>
                <th scope="col">Date</th>
                <th scope="col">Stage/Rounds</th>
                <th scope="col">Partners</th>
                <th scope="col">Investors/VCs</th>
                <th scope="col">Raised</th>
                <th scope="col">Category</th>
              </tr>
            </thead>
            <tbody>
              {fundingRound?.map((item,index)=>
                <tr className="item-name size" key={index}>
                  <td className="name bg-white">
                    <i className="fa-regular fa-star watchlist-star"></i><img className="logo-image"></img>  {item.project}
                  </td>
                  <td>{item.date}</td>
                  <td>{item.stage}</td>
                  <td>{item.partners}</td>
                  <td>{item.investors}</td>
                  <td>{item.raised}</td>
                  <td>{item.category}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
  )
}
