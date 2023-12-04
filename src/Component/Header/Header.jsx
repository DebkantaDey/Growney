import React, { useState } from 'react'
import './Header.css';
import Growney from './Growney-logo.png';
// Material UI
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Header(props) {

  //For navigation
  const navigate = useNavigate()


  const [isSignin, setSignin] = useState(false)
  const signinHandler = (event) => {
    event.preventDefault()
    setSignin(!isSignin)
    setSignup(false)
  }

  const [isSignup, setSignup] = useState(false)
  const signupHandler = (e) => {
    e.preventDefault();
    setSignin(false)
    setSignup(!isSignup)
  }

  window.onClick = function (event) {
    if (event.target == isSignin) {
      setSignin(false)
    }
  }

  const [isSidebar, setSidebar] = useState(false)
  const sidebarHandler = () => {
    setSidebar(!isSidebar)
  }


  // For Register
  const [registrationData, setRegistrationData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const registrationDataHandler=(event)=>{

     setRegistrationData( registrationData => {
      return{
      ...registrationData,
      [event.target.name]: event.target.value
      }
     })
     console.log(event.target.name)
     console.log(event.target.value)
    
     values => {
      return {...values, [event.target.name]: event.target.value};
  }
  }
  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password } = registrationData;
    try {
      const { registrationdata } = await axios.post('http://localhost:8080/register', {
        name, email, password
      })
      if (registrationdata.error) {
        toast.error(registrationdata.error)
      }
      else {
        setRegistrationData({})
        toast.success('Login successfull.')
        // navigate('/login')
      }
    } catch (error) {
      console.log(error)
    }
    console.log(registrationData)
  }


  // For Login

  const [data, setData]=useState({
    name: '',
    email: '',
    password: ''
  })
  const loginHandler= async (e)=>{
      e.preventDefault()
      const {email, password}=data;
      try {
        const {data}=await axios.post('/login',{
          name,
          email,
          password
        })
        if(data.error){
          toast.error(data.error)
        }
        else{
          setData({})
        }
      } catch (error) {
        
      }
  }
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light container-fluid d-flex justify-content-between header-container'>
        <div className="container-fluid navs h-100 align-items-center">
          <i className="fa-solid fa-bars bars p-3 bars text-white" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop" onClick={sidebarHandler}></i>
          {/* <img src={Growney} alt="" className='growney-logo'/> */}
          <h2 className='text-white brand-logo'>Growney</h2>
          <div className='d-flex align-items-center h-100'>
            <div className="mt-2 hiddable-content size">
              <ul className='pt-3 d-flex text-white refer-earn'>
                <li className='me-4 list-item'>Refer & Earn</li>
                <li className='me-4 list-item'>Trending</li>
                <li className='text-white list-item'><i className="fa-regular fa-star me-2"></i>Watchlist</li>
              </ul>
              <div className='d-flex'>
                <i className="bi bi-search" id='search-icon'></i>
                <input type="text" className="search-input form-control shadow bg-body rounded ps-5 me-3 mt-1" id="formGroupExampleInput" placeholder="Search for coins, Contracts, IDO..." />
              </div>
            </div>
            <button type="button" className="btn h-100 signin-signup bg-white" onClick={signinHandler}>Sign up</button>
            <i className={props.isDark ? 'fas fa-moon ms-2 lightdark text-dark' : 'fa-solid fa-sun ms-2 lightdark text-white'} onClick={props.darkHandler}></i>
          </div>
        </div>
      </nav >

      {
        isSignin ?
          <div className='container model-container bg-light'>
            <div className='x-icon' onClick={signinHandler}>
              <i className="fa-solid fa-xmark"></i>
            </div>
            {/* <img src='https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png' alt='' className='user-profile mt-3'></img> */}
            <form className='form-control signin-form border border-0 mb-3 bg-white mt-5'>
              <div>
                <label>Enter your email</label>
                <br></br>
                <input type='text' placeholder='Your email' className='w-100 mt-3'></input>
              </div>
              <div>
                <label className='mt-2'>Enter your password</label>
                <br></br>
                <input type='password' placeholder='Your password' className='w-100 mt-3'></input>
              </div>
              <div className='d-flex justify-content-between mt-3 form-last-div'>
                <div>
                  <input type='checkbox' className='Checkbox'></input>
                  <label className='ms-2'>Remember me</label>
                </div>
                <p>Forget password?</p>
              </div>
              <button className='btn w-25 mt-2 sign-button'>Sign in</button>
            </form>
            <div className=' sign-with-logo mb-3 mt-4'>
              <p className='me-2 text-center'>Or Sign in with</p>
              <div className='googleXButtons mt-2'>
                <button className='googleButton socialButton'> <img src='https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png' className='googleButtonImage'></img>Signin with Google</button>
                <button className='xButton socialButton'><i className="fa-brands fa-x-twitter xSocialIcon"></i> Signin with X</button>
              </div>
            </div>
            <p className='text-center'>Don't have an account? <a href="" onClick={signupHandler} className='sign-up-in-link'>Sign up</a></p>
          </div>
          :
          ""
      }

      {
        isSignup ?
          <div className='container model-container bg-light'>
            <div className='x-icon' onClick={signupHandler}>
              <i className="fa-solid fa-xmark"></i>
            </div>
            {/* <img src='https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png' alt='' className='user-profile mt-3'></img> */}
            <form className='form-control signin-form border border-0 mb-4 bg-white mt-5' onSubmit={registerUser}>
              <div>
                <label>Enter your name:</label>
                <br></br>
                <input type='text' placeholder='Your name' className='w-100 mt-3' value={registrationData.name} onChange={(e)=> registrationDataHandler(e)}></input>
              </div>
              <div>
                <label>Enter your email:</label>
                <br></br>
                <input type='text' placeholder='Your email' className='w-100 mt-3' value={registrationData.email} onChange={(e)=> registrationDataHandler(e)}></input>
              </div>
              {/* <div>
                <label>Enter your email:</label>
                <br></br>
                <input type='email' placeholder='Your email' className='w-100 mt-3' value={registrationData.email} onChange={(e)=> setRegistrationData({...registrationData, name: e.target.value})}></input>
              </div> */}
              <div>
                <label className='mt-2'>Enter your password:</label>
                <br></br>
                <input type='password' placeholder='Your password' className='w-100 mt-3' value={registrationData.password} onChange={(e)=> registrationDataHandler(e)}></input>
              </div>
              {/* <div>
                <label className='mt-2'>Confirm password</label>
                <br></br>
                <input type='password' placeholder='Confirm password' className='w-100 mt-3' name='confirmpassword' onChange={registrationDataChange}></input>
              </div> */}

              <button type='submit' className='btn w-25 mt-3 sign-button'>Sign up</button>
            </form>
            <div className=' sign-with-logo mb-2 mt-3'>
              <p className='me-2 text-center'>Or Sign in with</p>
              <div className='googleXButtons mt-2'>
                <button className='googleButton'><img src='https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png' className='googleButtonImage'></img>Signin with Google</button>
                <button className='xButton'>Signin with X</button>
              </div>
            </div>
            <p className='text-center sign-up-link'>Already have an account? <a href="" onClick={signinHandler} className='sign-up-in-link'>Sign in</a></p>
          </div>
          :
          ""
      }

      <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">
        <div className="offcanvas-header">
          <img src={Growney} alt="" className='growney-logo' />
          <h2 className="sidebar-title">Growney</h2>
          <button type="button" className="btn-close text-reset offcanvas-stop" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className='sidebar-ul'>
            <li><i className="fa-solid fa-house me-2"></i>Home</li>
            <li><i className="fa-solid fa-user me-2"></i>Profile</li>
            <li><i className="fa-regular fa-star me-2"></i>Watchlist</li>
            <li><i className="fa-solid fa-gift me-2"></i>Refer & Earn</li>
            <li><i className="fa-solid fa-wallet me-2"></i>Wallet</li>
            <li><i className="fa-solid fa-dollar-sign me-2"></i>Withdrawal</li>
          </ul>
        </div>
      </div>

    </div>
  )
}
