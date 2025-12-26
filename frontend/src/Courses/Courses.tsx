import './Courses.css'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { imageMap, type EnglishSet } from '../data/sets'
import SetModal from '../Modal/SetModal'
import UnlockedSet from '../Modal/UnlockedSet'
import axios from 'axios'


const Courses = () => { 
    const [isLockedSet, setIsLockedSet] = useState<EnglishSet | null>(null)
    // const [selectedSet, setSelectedSet] = useState<EnglishSet | null>(null)
    const [selectedSet, setSelectedSet] = useState<EnglishSet | null>(null)
    const [sets, setSets] = useState<EnglishSet[]>([])
    const token = localStorage.getItem('access_token')

    const navigate = useNavigate()

    const goToPractice = () => {
        if (!selectedSet) return
        navigate(`${selectedSet.setName}/practice`)
    }

     const goToTheory = () => {
        if (!selectedSet) return
        navigate(`${selectedSet.setName}/theory`)
    }

    const isOpenSet = (set: EnglishSet) => {
        return set.starsToUnlock > 0
    }
 
    const buyLockedSet = async (score: number | undefined) => {
        try {
            console.log(score);
            
            const request = await axios.post(import.meta.env.VITE_BUYING_SET, {score},  {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            })

            return request.data 
        } catch(error) {    
            console.log(error);
            
            throw Error('Failed buying sets')
        }
    }


    useEffect(() => {
        const renderSets = async () => {
             try {
                const response = await axios.get(import.meta.env.VITE_GET_SETS, {
                        headers: { Authorization: `Bearer ${token}` }
                });
                
            setSets(response.data)
        } catch(error) {
            throw Error('Error during render sets')
        }
        }

        renderSets()
    },[])

  return (
    <section className='section-courses'>
         
         <h1 className='courses-info'>Всі доступні курси для кожного рівня</h1>

        <div className='available-courses'>
            {sets.map((set) => {
                const isLocked = isOpenSet(set)

           return (
             <div key={set.id} className={`course ${isLocked ? 'locked' : ''}`}>
                <p className='about-course'>{set.title}</p>
                <img src={imageMap[set.image]} alt="" className='image-card' />

                {isLocked 
                ? <div className="locked-overlay" onClick={() => setIsLockedSet(set)}>
                  <span className="lock-icon">🔒</span>
                  <p>Потрібно {set.starsToUnlock} <i className="fa-solid fa-shrimp locked-set"></i></p>
                </div>
                : 
                  <button onClick={() => setSelectedSet(set)} className='start-course'>Розпочати</button>
                }                
            

                <div className='course-describe'>
                    <p className='course-level'>{set.level}</p>
                    <p className='status'>{set.status}</p>
                </div>
            </div>
           )
            })}

            <UnlockedSet open={!!isLockedSet} onClose={() => setIsLockedSet(null)}>
                <div className='unlockedScreen'>
                    <h1 className='unlockedSetName unlockedSetNamePadding'>Відкрити "{isLockedSet?.title}" ?</h1>
                    <h1 className='unlockedSetName'>Це коштує {isLockedSet?.starsToUnlock}  <i className="fa-solid fa-shrimp unlocked-shrimp"></i></h1>

                    <button className='confirmBuySet' onClick={() => buyLockedSet(isLockedSet?.starsToUnlock)}>Купити</button>
                </div>
            </UnlockedSet>            

            <SetModal open={!!selectedSet} onClose={() => setSelectedSet(null)}>
                <div>
                    <h1 className='set-modal-title'>Course</h1>
                    <h4 className='set-modal-choose'>Що обереш теорію/практику?</h4>
                
                    <div className='set-modal-buttons'>
                        <button onClick={goToTheory}>Теорія</button>
                        <button onClick={goToPractice}>Практика</button>
                    </div>
                </div>
            </SetModal>
        </div>

    </section>

  )
}

export default Courses
