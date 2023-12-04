import React, { useState, useEffect } from "react";
import "./NewListing.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Fragment } from 'react'; // This is scroll to top
import axios from "axios";
//import new_Listing from './../../../details/NewListing';


export default function NewListing({ buttons, isDark }) {

  // Scroll to top
  const [scrollvisible, setScrollVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setScrollVisible(true)
    }
    else if (scrolled <= 300) {
      setScrollVisible(false)
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener('scroll', toggleVisible);


  // Get newlisting data
  const [newListingdata, setNewListingdata] = useState([])
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:8080/newlisting');
        setNewListingdata(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchImages();
  }, []);


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
    <div className=" container-fluid mt-5 newListng">
      <div className='container-fluid float-start mt-3 new-listing'>
        <table className="table">
          <thead style={{ backgroundColor: '#facb92', color: 'white' }}>
            <tr className="size">
              <th scope="col" className="name" >Name</th>
              <th scope="col">Date</th>
              <th scope="col">Backed by / investors</th>
              <th scope="col">Category</th>
              <th scope="col">Network</th>
              <th scope="col">Max Supply</th>
            </tr>
          </thead>
          <tbody>
            {newListingdata?.map((item) =>
              <tr className="item-name size" key={item.id}>
                <td className="name">
                  <i className="fa-regular fa-star watchlist-star"></i><img src="https://pbs.twimg.com/profile_images/1675359338523705344/2kbpH2H3_400x400.jpg" className="logo-image"></img><Link to='/xterio'
                    style={{
                      color: "black",
                      textDecoration: "none",
                    }}
                  >{item.name}
                  </Link>
                </td>
                <td>{item.date}</td>
                <td>{item.backed}</td>
                <td>{item.category}</td>
                <td>{item.network}</td>
                <td>{item.supply}</td>
              </tr>
            )}
            {/* <tr className="item-name size">
              <td className="name">
                <i className="fa-regular fa-star watchlist-star"></i><img src="https://pbs.twimg.com/profile_images/1490773577930584069/uoeUkeKe_400x400.jpg" className="logo-image"></img><Link to='/mantaNetwork'
                  style={{
                    color: "black",
                    textDecoration: "none",
                  }}
                > Manta Network
                </Link>
              </td>
              <td>26 July</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr className="item-name size">
              <td className="name">
                <i className="fa-regular fa-star watchlist-star"></i><img src="https://yt3.googleusercontent.com/XnnT5lFSiuApvuzSi8hd-FSZFzmjX-B-EvqW14cOV814LzH4OeujADrI9ZAI3brDcs2PwmcCgQ=s900-c-k-c0x00ffffff-no-rj" className="logo-image"></img><Link to='/suiNetwork'
                  style={{
                    color: "black",
                    textDecoration: "none",
                  }}
                > Sui Network
                </Link>
              </td>
              <td>26 July</td>
              <td>a16z, Coinbase, Ventures</td>
              <td>Blockchain Infrastructure</td>
              <td>Own Chain</td>
              <td>10,000,000,000</td>
            </tr>
            <tr className="item-name size">
              <td className="name">
                <i className="fa-regular fa-star watchlist-star"></i><img src="https://tk-storage.s3.ap-southeast-1.amazonaws.com/host/game/0znqJWb0_400x400_20220909032551.jpg" className="logo-image"></img><Link
                  to={"/born-to-die"}
                  style={{
                    color: "black",
                    textDecoration: "none",
                  }}
                > Born To Die Game
                </Link>
              </td>
              <td>26 July</td>
              <td>Bloctopia...</td>
              <td>GameFi</td>
              <td>BSC, Polygon</td>
              <td></td>
            </tr>
            <tr className="item-name size">
              <td className="name">
                <i className="fa-regular fa-star watchlist-star"></i><img src="https://pbs.twimg.com/profile_images/1516368838589554688/pYWBx8Mv_400x400.jpg" className="logo-image"></img><Link to='/bitsCrush'
                  style={{
                    color: "black",
                    textDecoration: "none",
                  }}
                > BitsCrush
                </Link>
              </td>
              <td>26 July</td>
              <td>Coinbase Ventures</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr className="item-name size">
              <td className="name">
                <i className="fa-regular fa-star watchlist-star"></i><img src="https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/64bc2225948776bd5d69eacd_ChainGPTPR.jpeg" className="logo-image"></img><Link to='/chainGpt'
                  style={{
                    color: "black",
                    textDecoration: "none",
                  }}
                > ChainGPT
                </Link>
              </td>
              <td>26 July</td>
              <td>Poolz Ventures</td>
              <td>Artificial Intelligence</td>
              <td>BSC</td>
              <td>1,000,000,000</td>
            </tr>
            <tr className="item-name size">
              <td className="name">
                <i className="fa-regular fa-star watchlist-star"></i><img src="https://pbs.twimg.com/profile_images/1639203410695143426/p195CZDM_400x400.jpg" className="logo-image"></img><Link to='/orbofiAi'
                  style={{
                    color: "black",
                    textDecoration: "none",
                  }}
                > Orbofi AI
                </Link>
              </td>
              <td>26 July</td>
              <td></td>
              <td>Artificial Intelligence</td>
              <td>BSC</td>
              <td>2,000,000,000</td>
            </tr>
            <tr className="item-name size">
              <td className="name">
                <i className="fa-regular fa-star watchlist-star"></i><img src="https://s3.coinmarketcap.com/static-gravity/image/426329002f5144e0b2f43b31bf52255d.png" className="logo-image"></img><Link to='/arkham'
                  style={{
                    color: "black",
                    textDecoration: "none",
                  }}
                > Arkham
                </Link>
              </td>
              <td>26 July</td>
              <td>Binance Labs....</td>
              <td>Blockchain Service</td>
              <td>BSC</td>
              <td>1,000,000,000</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>

  );
}
