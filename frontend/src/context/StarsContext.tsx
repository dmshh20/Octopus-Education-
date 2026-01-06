import { createContext, useContext, useEffect, useState } from 'react';
import { countScore } from '../services/countScoreReq';
import { useAuth } from '../Auth/AuthContext';
import type { ReactNode } from 'react';

interface starsContextType {
  updateTotalStars: (stars?: number) => Promise<void>;
  stars: number;
}

const starsContext = createContext<starsContextType | undefined>(undefined);

export const StarsProvider = ({ children }: { children: ReactNode }) => {
  const [stars, setStars] = useState<number>(0);
  const { isLoggedIn } = useAuth();

  const updateTotalStars = async (stars?: number) => {
    if (typeof stars === 'number') {
      setStars(stars); 
    } else {
      try {
        const currentTotalScore = await countScore();
        setStars(currentTotalScore);
      } catch (error) {  
        console.error("Failed to fetch stars:", error);
      }
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      updateTotalStars();
    }
  }, [isLoggedIn]);

  return (
    <starsContext.Provider value={{ stars, updateTotalStars }}>
      {children}
    </starsContext.Provider>
  );
};

export const useStars = () => {
  const ctx = useContext(starsContext);
  if (!ctx) throw new Error('useStars must be used inside StarsProvider');
  return ctx;
};