import { Link } from 'react-router-dom'
import './Header.css'
import { useEffect, useState } from 'react'
import { useAuth } from '../Auth/AuthContext'

export default function Header() {
   const { isLoggedIn, logout } = useAuth(); 

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
          <li><a href="">Курси</a></li>
          {/* <li><a href="">About</a></li> */}
          {/* <li><a href="">Contact</a></li> */}

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
