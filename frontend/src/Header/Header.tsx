import { Link } from 'react-router-dom'
import './Header.css'
import { useAuth } from '../Auth/AuthContext'
import { useEffect, useRef } from 'react';
import axios from 'axios';
import { useStars } from '../context/StarsContext';
import { useUpdateProfile } from '../context/UpdateImageContext';

export default function Header() {
    const { stars } = useStars()
    const { isLoggedIn, logout, decodedToken, isLoading } = useAuth(); 
       const { setImage, image } = useUpdateProfile()
    
    useEffect( () =>  {
      const token = localStorage.getItem('access_token')
      if (!token) {
        return
      }
      const getUserData = async () => {
        const response = await axios.get(import.meta.env.VITE_USER_ME, 
          { 
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
        })

       if (response.data.profileUrl) {
        setImage(response.data.profileUrl)
      }
      

        if (!response.data) {
          throw new Error('error in reponse')
        }
      }
        
        getUserData()
    }, [isLoggedIn])  

  return (  
    <header className='header'>
      <Link to='/' style={{color: 'white', textDecoration: 'none'}}>
      <div className='header-name'>
        <h1>Octopus</h1>
        <i className="fa-brands fa-octopus-deploy" style={{fontSize: '30px', color: '#F75270  '}}></i>
      </div>
      </Link>

      <nav className='header-nav'>
        <ul className='header-nav-list'>

          {decodedToken?.roleId === 2 || decodedToken?.roleId === 3 
          ?
          <Link to='/trial-session'  style={{color: "white", textDecoration: 'none'}}><li style={{fontSize: '18px'}} ><i className="fa-solid fa-user"></i></li> </Link>  
          :
          <></>}

         {isLoading ? 
           <div className='packOfStars'>
            <i className="fa-solid fa-shrimp"></i>
            <div className='countOfStars'>{stars}</div>
          </div>
         : <></>}


          <Link to='/courses' style={{color: "white", textDecoration: 'none'}}>
            <li>Courses </li>
          </Link>
          {isLoggedIn ? (
            <div>
              <li onClick={logout}> Logout</li>
              <Link to="profile">
              <img  className='imageProfile'
                // onClick={handleFileUploadRef}
                src={image}
                style={{
                    cursor: 'pointer',
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                  }}
              ></img>
              </Link>

            </div>
          ) : (
            <li><Link to="/signin">Sign In</Link></li>
          )}


        </ul>
      </nav>
    </header>
  )
}
