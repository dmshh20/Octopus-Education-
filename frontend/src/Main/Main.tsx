import './Main.css'
import mainPhoto from '../images/main-photo-removebg-preview.png'
import mail from '../images/mail.png'
import workFrontComputer from '../images/workfrontcomputer.png'
import teacher from "../images/teacher.png"
import shake from '../images/shake.png'
import Modal from '../Modal/Modal'
import { useState } from 'react'

export default function Main() {
  const [isOpen, setIsOpen] = useState(false)
  const [isForm, setIsForm] = useState({
    firstName: "artem",
    secondName: "dmysh",
    email: "dmysh@gmail.com"
  })

  const handleChange = (e: any) => {
    setIsForm({...isForm, [e.target.name]: e.target.value})
  } 


  const handleSubmit = (e: any) => {
    try {
      console.log(isForm);
      
        return 'hi hi'
        
    } catch(err: any) {
      console.log(err);
      throw err
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
             <button onClick={() => setIsOpen(true)} className='trial-session'>Записатися на пробне заняття</button>

              <Modal open={isOpen} onClose={() => setIsOpen(false)}>
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
                        <button type='submit' className='enroll-to-the-session'>Записатися</button>
                      </form>
              
                  </div>
                </Modal>
          </div>

         


    </section>
    </>
  )
}
