import './Profile.css'
import { Chart as ChartJS } from 'chart.js/auto'
import { useEffect, useRef } from 'react'
import { Doughnut } from 'react-chartjs-2'
import axios from 'axios'
import { useAuth } from '../Auth/AuthContext'
import { useUpdateProfile } from '../context/UpdateImageContext'

const Profile = () => {
    const fileUploadRef = useRef<HTMLInputElement>(null)
    const { isLoggedIn } = useAuth()
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

     const handleFileUploadRef = async () =>  {
      fileUploadRef.current?.click()
    }

  return (
    <>
        <div className='profilePage'>

            <div className="profileEdit">
                <div className='userProfile'>

                    <img  
                    onClick={handleFileUploadRef}
                    src={image}
                    style={{
                        cursor: 'pointer',
                        width: '64px',
                        height: '64px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                    }}
                ></img>
                <h1>Artem Dmysh</h1>
                      <input
                        ref={fileUploadRef}
                        onChange={handleUploadImage}
                        type="file"
                        accept='image/*'
                        capture="environment"
                        style={{display: 'none'}}
                        />
                </div>

            </div>


            <div className="statistics">
                    <Doughnut className='chart'
                    data={{
                        labels: ['A1', 'B1', 'B2', 'C1'],
                        datasets: [
                        {
                            label: "Ccount",
                            data: [200, 100, 80, 110],
                            backgroundColor: [
                            "rgba(43, 63, 229, 0.8)",
                            "rgba(250, 192, 19, 0.8)",
                            "rgba(253, 135, 135, 0.8)",
                            "rgba(102, 255, 102, 0.74)",
                            // "rgba(75, 192, 192, 0.8)",
                            // "rgba(255, 159, 64, 0.8)",
                            ],
                            borderColor: [
                            "rgba(43, 63, 229, 0.8)",
                            "rgba(250, 192, 19, 0.8)",
                            "rgba(253, 135, 135, 0.8)",
                            // "rgba(153, 102, 255, 0.8)",
                            "rgba(102, 255, 102, 0.74)",

                            // "rgba(75, 192, 192, 0.8)",
                            // "rgba(255, 159, 64, 0.8)",    
                            ],
                        },
                        ],
                    }}
                    options={{
                        plugins: {
                        title: {
                            text: "Revenue Sources",
                        },
                        },
                    }}
                    
                 />
            </div>


        </div>
    
    </>
  )
}

export default Profile
