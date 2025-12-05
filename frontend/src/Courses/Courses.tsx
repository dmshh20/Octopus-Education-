import './Courses.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { EnglishSets, type EnglishSet } from '../data/sets'
import SetModal from '../Modal/SetModal'


const Courses = () => { 
    const [selectedSet, setSelectedSet] = useState<EnglishSet | null>(null)
    const navigate = useNavigate()

    const goToPractice = () => {
        if (!selectedSet) return
        navigate(`${selectedSet.id}/practice`)
    }

     const goToTheory = () => {
        if (!selectedSet) return
        navigate(`${selectedSet.id}/theory`)
    }


  return (
    <section className='section-courses'>
         
         <h1 className='courses-info'>Всі доступні курси для кожного рівня</h1>

        <div className='available-courses'>
            {EnglishSets.map((set) => (

            <div key={set.id} className='course'>
                <p className='about-course'>{set.title}</p>
                
                <img src={set.image} alt="" className='image-card' />
                  <button onClick={() => setSelectedSet(set)} className='start-course'>Розпочати</button>
            

                <div className='course-describe'>
                    <p className='course-level'>{set.level}</p>
                    <p className='status'>{set.status}</p>
                </div>
            </div>
            ))}

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
