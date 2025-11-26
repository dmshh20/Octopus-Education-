import { Link } from 'react-router-dom'
import './Header.css'
import { useAuth } from '../Auth/AuthContext'
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

export default function Header() {
   const { isLoggedIn, logout, decodedToken } = useAuth(); 
   const [image, setImage] = useState(import.meta.env.VITE_PROFILE_STANDART_USER_PHOTO)
   const fileUploadRef = useRef<HTMLInputElement>(null)

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

  
     const handleFileUploadRef = async () =>  {
      fileUploadRef.current?.click()
    }
    
    const handleUploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
      try {
          const file = e.target.files?.[0]

          if (!file) {
            throw new Error('File is not uploaded')
          }

          const formData = new FormData()
          formData.append('file', file)

          const token = localStorage.getItem('access_token')
          const response = await axios.post(import.meta.env.VITE_CLOUDINARY,
             formData, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })         


          const newImageUrl = response.data.url || response.data.secure_url
           setImage(newImageUrl)
      } catch(error) {
        throw new Error('Error in uploading')
      }

    }

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

          <Link to='/courses' style={{color: "white", textDecoration: 'none'}}>
            <li>Курси </li>
          </Link>
          {isLoggedIn ? (
            <div>
              <li onClick={logout}> Logout</li>
              <img  className='imageProfile'
                onClick={handleFileUploadRef}
                src={image}
                style={{
                    cursor: 'pointer',
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    // border: '1px solid black',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                  }}
              ></img>
                <input
                ref={fileUploadRef}
                onChange={handleUploadImage}
                 type="file"
                accept='image/*'
                style={{display: 'none'}}
                 />

            </div>
          ) : (
            <li><Link to="/signin">Sign In</Link></li>
          )}


        </ul>
      </nav>
    </header>
  )
}
