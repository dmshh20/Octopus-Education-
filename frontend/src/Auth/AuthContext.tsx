import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react'
import { jwtDecode } from 'jwt-decode';
import { countScore } from '../services/countScoreReq';

interface AuthContextType {
  isLoggedIn: boolean;
  decodedToken: JwtPayload | null;
  login: (token: string) => void;
  logout: () => void;
  updateTotalStars: (stars: number) => void
  totalStars: number
  isLoading: boolean
}


interface JwtPayload {
  email: string;
  roleId: number;
  iat: number;
  exp: number;
}


const AuthContext = createContext<AuthContextType | null>(null);


export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('access_token'));
  const [decodedToken, setDecodedToken] = useState<JwtPayload | null>(null)
  const [totalStars, setTotalStars] = useState<number>(starsValidate())              
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const tokenValidate = (token: string) => {
    if (!token) {
      setDecodedToken(null)
      setIsLoading(false)
      return 
    }

    const payload: JwtPayload = jwtDecode(token)
    setDecodedToken(payload)
    setIsLoading(true)
  }

   useEffect(() => {
      const countRerender = async() => {
        const token = localStorage.getItem('access_token')
         const stars = await countScore()
         setTotalStars(stars)
        if(token) {
          tokenValidate(token) 
          
        } else {
          setIsLoading(false)
    
        }

      }
      countRerender()
    
  },[])

  const login = async (token: string) => {
    localStorage.setItem('access_token', token);
    setIsLoggedIn(true); // triggers re-render in all components using this context
    tokenValidate(token)
    setTotalStars(starsValidate())
    const stars = await countScore()
    setTotalStars(stars)
  };
  
  const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('stars');
    setIsLoggedIn(false);
    setDecodedToken(null)
    setIsLoading(false)
    setTotalStars(0)
  };
    
  const updateTotalStars = (stars: number) => {
    setTotalStars(stars)
    localStorage.setItem('stars', String(stars))

  }

  function starsValidate() {
    const stars = localStorage.getItem('stars')
    if (stars) {
      return parseInt(stars) || 0
    }
    return 0
  }


  return (
    <AuthContext.Provider value={{ isLoggedIn, decodedToken, login, logout, totalStars: totalStars, updateTotalStars, isLoading}}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the context easily
export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
};
