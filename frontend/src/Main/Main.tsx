import './Main.css'
import mainPhoto from '../images/main-photo-removebg-preview.png'
import mail from '../images/mail.png'
import workFrontComputer from '../images/workfrontcomputer.png'
import teacher from "../images/teacher.png"
import shake from '../images/shake.png'
import Modal from '../Modal/Modal'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { jwtDecode } from 'jwt-decode'

interface JwtPayload {
  email: string;
  roleId: number;
  iat: number;
  exp: number;
}

export default function Main() {
  const [error, setError] = useState<string | boolean>()
  const [isOpen, setIsOpen] = useState(false)
  const [isForm, setIsForm] = useState({
    firstName: "",
    secondName: "",
    email: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsForm({...isForm, [e.target.name]: e.target.value})
  } 

  const openModal = () => {
    setIsOpen(true);
    setError(false);
  };


  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    try {
      const token = localStorage.getItem('access_token')
      
      if (!token) {
          setError(true)
          return
      }
      setError(false)
      const decodedToken: JwtPayload = jwtDecode(token)
      
      if (isForm.email !== decodedToken.email) {
        setError('Заявку можна відсилати тільки на свій емейл')
        return
      }

      const response = await axios.post(import.meta.env.VITE_FORM, isForm, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      } )   
      setIsOpen(false)
      setIsForm({firstName: "", secondName: "", email: ""})


      return response
    } catch(error: any) {
      if (error.response.status === 409) {
        setError('Ви вже подавалися на пробний урок')
      }
    }
  }

  return (
      <>
    <section>
        

        <div className='firstStage'>
              <div className='inside-first'>

                <h1 className='about-school'>Онлайн-школа, де ти досягнеш цілі</h1>
                <div className='school-features1'>Безкоштовний пробний урок</div>
                <div className='school-features2'>Гнучкий графік занять</div>
                <div className='school-features3'>Індивідуальна програма навчання</div>
              </div>
            
              <img src={mainPhoto} alt="" className='mainPhoto' />

          </div>
    </section>

     <section className='secondStage'>
       
        <div className='trial-steps'>

          <div className='step'>
            <img src={mail} alt="" className='step-icon' />
            <p>Ви відправляєте коротку форму заявки</p>
          </div>
              <i className="fa-solid fa-arrow-right"></i>

            <div className='step'>
            <img src={workFrontComputer} alt="" className='step-icon' />
            <p>Наша команда турботи дізнається всі ваші потреби та побажання</p>
          </div>
              <i className="fa-solid fa-arrow-right"></i>
            <div className='step'>
            <img src={teacher} alt="" className='step-icon' />
            <p>Ви проходите безкоштовний пробний урок з викладачем, якого для вас підібрали</p>
          </div>
              <i className="fa-solid fa-arrow-right"></i>
    
            <div className='step'>
            <img src={shake} alt="" className='step-icon' />
            <p>Ви приймаєте рішення чи продовжувати навчання з цим викладачем</p>
          </div>

        </div>

          <div className='button-wrapper-styles'>
             <button onClick={openModal} className='trial-session'>Записатися на пробне заняття</button>

              <Modal open={isOpen} onClose={() => setIsOpen(false)} error={() => setError(true)}>
                  <div className='enroll-form' >
                    <h1 className='message-fill-in-the-form'>Заповніть форму для зв'язку з репетитором</h1>


                      <form className='enroll-session-form' onSubmit={handleSubmit}>
                        <div className='trial-reg-form'>
                          <input type="text" name='firstName' value={isForm.firstName} onChange={handleChange} required/>
                          <label htmlFor="">firstName</label>

                        </div>
                         <div className='trial-reg-form'>
                          <input type="text" name='secondName'  value={isForm.secondName} onChange={handleChange} required/>
                          <label htmlFor="">secondName</label>

                        </div>
                         <div className='trial-reg-form'>
                          <input type="email" name='email' value={isForm.email} onChange={handleChange} required/>
                          <label htmlFor="">email</label>

                        </div>
                          {error && <b style={{color: '#DC0000', textAlign: 'center', marginBottom: '20px'}}>{error}<br /></b>}
                        <button type='submit' className='enroll-to-the-session'>Записатися</button>

                          <Link to='/signup'>Create an account</Link>
                            
                      </form>
              
                  </div>
                </Modal>
          </div>

         


    </section>
    </>
  )
}
