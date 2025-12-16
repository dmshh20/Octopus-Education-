import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react'
import { jwtDecode } from 'jwt-decode';

interface AuthContextType {
  isLoggedIn: boolean;
  decodedToken: JwtPayload | null;
  login: (token: string) => void;
  logout: () => void;
  updateTotalStars: (stars: number) => void
  totalStars: number
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

  const tokenValidate = (token: string) => {
    if (!token) {
      setDecodedToken(null)
      return 
    }
    const payload: JwtPayload = jwtDecode(token)
    setDecodedToken(payload)
  }

  const login = (token: string) => {
    localStorage.setItem('access_token', token);
    setIsLoggedIn(true); // triggers re-render in all components using this context
    tokenValidate(token)
  };
  
  const logout = () => {
    localStorage.removeItem('access_token');
    setIsLoggedIn(false);
    setDecodedToken(null)
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
    <AuthContext.Provider value={{ isLoggedIn, decodedToken, login, logout, totalStars: totalStars, updateTotalStars}}>
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
