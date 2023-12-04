import { useState } from "react";
import "./App.css";
import Header from "./Component/Header/Header";
import NewListing from "./Component/HomePage/New Listing/NewListing";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import BornToDie from "./Component/BornToDie/BornToDie";
import SpaceId from "./Component/SpaceId/SpaceId";
import SuiNetwork from "./Component/SuiNetwork/SuiNetwork";
import MantaNetwork from "./Component/MantaNetwork/MantaNetwork";
import Arkham from "./Component/Arkham/Arkham";
import BitsCrush from "./Component/BitsCrush/BitsCrush";
import ChainGpt from "./Component/ChainGpt/ChainGpt";
import OrbofiAi from "./Component/OrbofiAi/OrbofiAi";
import Xterio from "./Component/Xterio/Xterio";
import Home from './Component/HomePage/Home';
import { Toaster } from 'react-hot-toast'


function App() {
  const [isSidebar, setSidebar] = useState(false);
  const sidebarHandler = () => {
    setSidebar(!isSidebar);
  };

  const [isSignin, setSignin] = useState(false);
  const signinHandler = () => {
    setSignin(true)
  }

  const [isDark, setDark] = useState(false);
  const darkModeHandler = () => {
    setDark(!isDark)
  }

  const buttons = [
    'New Listing',
    'IDO/IEO',
    'Hot News',
    'NewProject',
    'Airdrop',
    'EcoSystem',
    'Funding Round'
  ]
  return (

      <div className="App">
        <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
        <BrowserRouter>
          <Header sidebarShow={isSidebar} sidebarHandle={sidebarHandler} signinHandler={signinHandler} isDark={isDark} darkHandler={darkModeHandler}></Header>
          <Routes>
            <Route path="/" element={<Home sidebarShow={isSidebar} showsignin={isSignin} buttons={buttons} isDark={isDark}></Home>} />
            {/* <Route path="/" element={<NewListing sidebarShow={isSidebar} showsignin={isSignin} buttons={buttons} isDark={isDark}></NewListing>} /> */}
            <Route path="/born-to-die" element={<BornToDie isDark={isDark}></BornToDie>} />
            <Route path="/spaceId" element={<SpaceId isDark={isDark}></SpaceId>} />
            <Route path="/suiNetwork" element={<SuiNetwork isDark={isDark}></SuiNetwork>} />
            <Route path="/mantaNetwork" element={<MantaNetwork isDark={isDark}></MantaNetwork>} />
            <Route path="/arkham" element={<Arkham isDark={isDark}></Arkham>} />
            <Route path="/bitsCrush" element={<BitsCrush isDark={isDark}></BitsCrush>} />
            <Route path="/chainGpt" element={<ChainGpt isDark={isDark}></ChainGpt>} />
            <Route path="/orbofiAi" element={<OrbofiAi isDark={isDark}></OrbofiAi>} />
            <Route path="/xterio" element={<Xterio isDark={isDark}></Xterio>} />
          </Routes>
        </BrowserRouter>
      </div>

  );
}

export default App;
