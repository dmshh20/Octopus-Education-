import { Link } from 'react-router-dom'
import './Header.css'
import { useAuth } from '../Auth/AuthContext'
import { jwtDecode } from 'jwt-decode' 
import { useEffect, useState } from 'react';

export default function Header() {
   const { isLoggedIn, logout, decodedToken } = useAuth(); 
  

    useEffect(() => {
      const token = localStorage.getItem('access_token')
      if (!token) {
        return
      }
      console.log('tokens ---', jwtDecode(token))
    }, [])  

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
         <Link to='/trial-session'  style={{color: "white", textDecoration: 'none'}}><li>Нові студенти</li> </Link>  
          :
           <></>}
          {/* <li><a href="">About</a></li> */}
          {/* <li><a href="">Contact</a></li> */}

          <Link to='/courses' style={{color: "white", textDecoration: 'none'}}>
            <li>Курси</li>
          </Link>
          {isLoggedIn ? (
            <li onClick={logout}> Logout</li>
          ) : (
            <li><Link to="/signin">Sign In</Link></li>
          )}
        </ul>
      </nav>
    </header>
  )
}
