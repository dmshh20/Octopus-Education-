import React from 'react'
import './Main.css'
import octopusLeft from '../images/Gemini_Generated_Image_882ugq882ugq882u-removebg-preview.png'
import octopusRight from '../images/Gemini_Generated_Image_7urof07urof07uro-removebg-preview (1).png'

export default function Main() {
  return (
    <div>

    <section>
        <div className='firstStage'>
            <p><b>Octopus</b> - українська безкоштовна платформа для вивчення англійської мови</p>
            <img src={octopusLeft} alt="octopusLeft" />
        </div>
    </section>

     <section>
        <div className='secondStage'>
          
            <p>Чому вам слід вибрати саме нас?</p>
            <ul>
              <li>Безкоштовне навчання</li>
              <li>Позитивні відгуки наших користувачів про досягнення B1-B2 рівня</li>
              <li>Зосередження на граматиці, що важливо на початково рівні</li>
              <li>Практика. Наша платформа надає хорошу практику для закріплення всього теоричного матеріалу</li>
              <li>Сучасні слова та вирази</li>
            </ul> 
          

            <img src={octopusRight} alt="octopusLeft" />
        </div>
    </section>
    </div>
  )
}
