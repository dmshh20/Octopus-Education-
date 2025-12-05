import { Route, Routes, useLocation  } from 'react-router-dom'
import './App.css'
import SignUp from './Auth/SignUp'
import Header from './Header/Header'
import SignIn from './Auth/SignIn'
import Main from './Main/Main'
import Courses from './Courses/Courses'
import TrialSession from './TrialSessions/TrialSession'
import A1PresentSimple from './Courses/а1/А1TheoryPS'
import A1PastSimple from './Courses/а1/A1TheoryPP'
import A1FutureSimple from './Courses/а1/A1TheoryPF'
import { useEffect } from 'react'
import A2PresentContinuous from './Courses/a2/A2TheoryPC'
import B1PresentPerfect from './Courses/b1/B1TheoryPP'
import B2Conditionals from './Courses/b2/B2TheoryConditionals'
import C1PassiveVoice from './Courses/c1/C1TheoryPassiveVoice'
import A1PracticePS from './Courses/а1/A1PracticePS'
import A1PracticePastS from './Courses/а1/A1PracticePastS'
import B2PracticeConditionals from './Courses/b2/B2PracticeConditionals'
import C1PracticePassiveVoice from './Courses/c1/C1PracticePassiveVoice'
import A2PracticePC from './Courses/a2/A2PracticePC'
import A1PracticePF from './Courses/а1/A1PracticePF'
import B1PracticePP from './Courses/b1/B1PracticePP'

function App() {
  const path = useLocation()

  useEffect(() => {
      window.scrollTo(0,0)
  }, [path])

  return (
   <> 
   <Header></Header>
  <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/signin" element={<SignIn/>} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/courses" element={<Courses/>} />
      <Route path='/trial-session' element={<TrialSession/>}></Route>

      <Route path="/courses/a1-presentsimple/theory" element={<A1PresentSimple></A1PresentSimple>} />
      <Route path="/courses/a1-pastsimple/theory" element={<A1PastSimple></A1PastSimple>} />
      <Route path="/courses/a1-futuresimple/theory" element={<A1FutureSimple></A1FutureSimple>} />

      <Route path="/courses/a2-presentcontinuous/theory" element={<A2PresentContinuous></A2PresentContinuous>} />
      <Route path="/courses/b1-presentperfect/theory" element={<B1PresentPerfect></B1PresentPerfect>} />
      <Route path="/courses/b2-conditionals/theory" element={<B2Conditionals></B2Conditionals>} />
      <Route path="/courses/c1-passivevoice/theory" element={<C1PassiveVoice></C1PassiveVoice>} />

      <Route path="/courses/a1-presentsimple/practice" element={<A1PracticePS></A1PracticePS>} />
      <Route path="/courses/a1-pastsimple/practice" element={<A1PracticePastS></A1PracticePastS>} />
      <Route path="/courses/a1-futuresimple/practice" element={<A1PracticePF></A1PracticePF>} />

      <Route path="/courses/a2-presentcontinuous/practice" element={<A2PracticePC></A2PracticePC>} />
      <Route path="/courses/b1-presentperfect/practice" element={<B1PracticePP></B1PracticePP>} />
      <Route path="/courses/b2-conditionals/practice" element={<B2PracticeConditionals></B2PracticeConditionals>} />
      <Route path="/courses/c1-passivevoice/practice" element={<C1PracticePassiveVoice></C1PracticePassiveVoice>} />
      


   </Routes>
   </>
  )
}

export default App
