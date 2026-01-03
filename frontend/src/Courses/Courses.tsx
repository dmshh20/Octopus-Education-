import './Courses.css'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { imageMap, type EnglishSet } from '../data/sets'
import SetModal from '../Modal/SetModal'
import UnlockedSet from '../Modal/UnlockedSet'
import axios from 'axios'
import { useStars } from '../context/StarsContext'


const Courses = () => { 
    const [isLockedSet, setIsLockedSet] = useState<EnglishSet | null>(null)
    const [selectedSet, setSelectedSet] = useState<EnglishSet | null>(null)
    const [sets, setSets] = useState<EnglishSet[]>([])
    const token = localStorage.getItem('access_token')
    const { updateTotalStars } = useStars()

    const navigate = useNavigate()

    const goToPractice = () => {
        if (!selectedSet) return
        navigate(`${selectedSet.setName}/practice`)
    }

     const goToTheory = () => {
        if (!selectedSet) return
        navigate(`${selectedSet.setName}/theory`)
    }

 
    const buyLockedSet = async (score: number | undefined, setId: number | undefined) => {
        try {
            if (!score) {
                throw Error('No score to add')
            }

            const body = {score, setId}
            const request = await axios.post(import.meta.env.VITE_BUYING_SET, body,  {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            })

            setSets((sets) => sets.map((set) => set.id === setId ? {...set, isUnlocked: true } : set))
            
            updateTotalStars(score)
            setIsLockedSet(null)
             updateTotalStars(request.data)
        } catch(error) {    
            throw Error('Failed buying sets')
        }
    }

        
    useEffect(() => {
        const renderSets = async () => {
             try {
                const request = await axios.get(import.meta.env.VITE_GET_SETS, {
                        headers: { Authorization: `Bearer ${token}` }
                });
                
            setSets(request.data)
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
               const isLocked = set.starsToUnlock > 0 && !set.isUnlocked

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

                    <button className='confirmBuySet' onClick={() => buyLockedSet(isLockedSet?.starsToUnlock, isLockedSet?.id)}>Купити</button>
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
