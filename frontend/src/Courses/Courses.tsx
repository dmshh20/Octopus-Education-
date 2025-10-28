import React from 'react'
import './Courses.css'
import a1 from '../images/a1.png'
import { Link } from 'react-router-dom'

const Courses = () => {
  return (
    <section className='section-courses'>
         
         <h1 className='courses-info'>Всі доступні курси для кожного рівня</h1>


        <div className='available-courses'>
            
            <div className='course'>
                <p className='about-course'>Курс для початківців</p>
                
                <img src={a1} alt="" className='image-card' />
                <Link to={'/beginercourse'}>
                  <button className='start-course'>Розпочати</button>
                </Link>
            

                <div className='course-describe'>
                    <p className='course-level'>A1</p>
                    <p className='status'>Вступ/Основи</p>
                </div>
            </div>
             <div className='course'>
                <p className='about-course'>Курс для початківців</p>
                
                <img src={a1} alt="" className='image-card' />
                <button className='start-course'>Розпочати</button>
            

                <div className='course-describe'>
                    <p className='course-level'>A1</p>
                    <p className='status'>Вступ/Основи</p>
                </div>
            </div>
            <div className='course'>
                <p className='about-course'>Курс для початківців</p>
                
                <img src={a1} alt="" className='image-card' />
                <button className='start-course'>Розпочати</button>
            

                <div className='course-describe'>
                    <p className='course-level'>A1</p>
                    <p className='status'>Вступ/Основи</p>
                </div>
            </div>
            <div className='course'>
                <p className='about-course'>Курс для початківців</p>
                
                <img src={a1} alt="" className='image-card' />
                <button className='start-course'>Розпочати</button>
            

                <div className='course-describe'>
                    <p className='course-level'>A1</p>
                    <p className='status'>Вступ/Основи</p>
                </div>
            </div>
            <div className='course'>
                <p className='about-course'>Курс для початківців</p>
                
                <img src={a1} alt="" className='image-card' />
                <button className='start-course'>Розпочати</button>
            

                <div className='course-describe'>
                    <p className='course-level'>A1</p>
                    <p className='status'>Вступ/Основи</p>
                </div>
            </div>
            
        </div>


    </section>

  )
}

export default Courses
