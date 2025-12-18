import React, { useEffect, useRef, useState } from 'react'
import './Practice.css'
import axios from 'axios'
import { useAuth } from '../Auth/AuthContext'

type Question = {
  question: string
  option1: string
  option2: string
  option3: string
  option4: string
  ans: number
}

type QuizProps = {
  data: Question[]
  children?: React.ReactNode
}

const Quiz = ({ data }: QuizProps) => {
  const [result, setResult] = useState(false) 
  const [question, setQuestion] = useState(data[0])
  const [index, setIndex] = useState(0)
  const [lock, setLock] = useState(false)
  const [score, setScore] = useState(0)
  const { updateTotalStars } = useAuth()

  const token = localStorage.getItem('access_token')


  const option1 = useRef<HTMLLIElement>(null)
  const option2 = useRef<HTMLLIElement>(null)
  const option3 = useRef<HTMLLIElement>(null)
  const option4 = useRef<HTMLLIElement>(null)

  const wholeOptions = [option1, option2, option3, option4]

  const checkAns = (e: React.MouseEvent<HTMLLIElement>, ans: number) => {
    try {
      if (question.ans === ans) {
        setScore((score) => score + 1)
        e.currentTarget.classList.add('correct')
        } else {
        e.currentTarget.classList.add('wrong')
        wholeOptions[question.ans - 1].current?.classList.add('correct')
      }
      
    setLock(true)
    } catch(error) {
      throw new Error('Error in choosing answer')
    }
  }

  const next = () => {
    if (!lock) return 

    if (index === data.length - 1) {
      setResult(true)
      return
    }

    setIndex(index + 1)
    setQuestion(data[index + 1])
    setLock(false)
    wholeOptions.map((option) => {
      option.current?.classList.remove('correct', 'wrong')
    })
  }

  useEffect(() => {
    if (result) {
      saveUserScore()
    }
  }, [result])

   const saveUserScore = async () => {
    try {                 
    
      if (!token) {
        throw Error('token is invalid or not found')
      }

      const { origin, pathname } = window.location
      const url = origin + pathname
      const setName = url.split('/').filter(Boolean).at(-2)
      const sendForm = { score, setName }

      const request = await axios.post(import.meta.env.VITE_COMPLETED_SET, sendForm,{
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })

      const totalStarsResponse = request.data.totalStars
      updateTotalStars(totalStarsResponse)

      return request.data
    } catch(error) {

      throw error
    }
  }

  const reset = () => {
    setQuestion(data[0])
    setIndex(0)
    setScore(0)
    setResult(false)
    wholeOptions.map((option) => {
      option.current?.classList.remove('correct','wrong')
  })
  }

  return (
    <div className="container">
      <h1>Практика</h1>
      <hr />
      {result ?
        <>
         <h2 className="score-result">Ти відповів правильно на {score} з {data.length} питань</h2>
          <button onClick={reset}>Reset</button>
        </>
      :  <>
          <h2>{index + 1}. {question.question}</h2>
          <ul> 
            <li onClick={(e) => checkAns(e, 1)}  ref={option1}>{question.option1}</li>
            <li onClick={(e) => checkAns(e, 2)}  ref={option2}>{question.option2}</li>
            <li onClick={(e) => checkAns(e, 3)}  ref={option3}>{question.option3}</li>
            <li onClick={(e) => checkAns(e, 4)}  ref={option4}>{question.option4}</li>
          </ul>
          <button onClick={next}>Next</button>
          <div className="index"></div>
        </> }
          
       
       
        
    </div>
  )
}

export default Quiz