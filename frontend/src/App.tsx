import { Route, Routes  } from 'react-router-dom'
import './App.css'
import SignUp from './Auth/SignUp'
import Header from './Header/Header'
import SignIn from './Auth/SignIn'
import Main from './Main/Main'

function App() {

  return (
   <> 
   <Header></Header>
  <Routes>

      <Route path="/" element={<Main/>} />

      <Route path="/signin" element={<SignIn/>} />
      <Route path="/signup" element={<SignUp />} />

   </Routes>
   </>
  )
}

export default App
