import React from "react";
import './ChainGpt.css';

export default function ChainGpt(props) {
  return (
    <div style={{backgroundColor: props.isDark? 'black':'white'}}>
      <div className="chaingpt">
        <h1>ChainGPT</h1>
        <div>
          <p>Rank 7</p>
          <span>&bull;</span>
          <p> 6577 Watchlist</p>
        </div>
      </div>
      <div className="about">
        <h5>About ChainGPT</h5>
        <p>
          Born-To-Die-Game is a AI-powered Play2Earn 3D Shooting NFT game in the
          MetaVerse with a unique economy model and businesses like the real
          world.
        </p>
        <p>Socials</p>
        <div>
          <i className="fa-solid fa-globe"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-github"></i>
        </div>
      </div>
    </div>
  );
}
