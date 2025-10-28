
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './Auth/AuthContext.tsx'

createRoot(document.getElementById('root')!).render(

  // <BrowserRouter>
  <BrowserRouter
  future={{
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  }}>

  <AuthProvider>
    <App />
  </AuthProvider>
  </BrowserRouter>
  // </BrowserRouter>,
)
