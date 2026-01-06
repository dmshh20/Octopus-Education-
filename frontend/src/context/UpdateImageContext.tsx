import { createContext, useContext, useState } from "react";
import { useAuth } from "../Auth/AuthContext";
import type { ReactNode } from "react";

interface UpdateContextType {
    image: string
    setImage: (url: string) => void
    isLoggedIn: boolean
}

const UpdateImageContext = createContext<UpdateContextType | undefined>(undefined)

export const UpdateImageProvider = ({ children }: {children: ReactNode}) => {
    const [image, setImage] = useState(import.meta.env.VITE_PROFILE_STANDART_USER_PHOTO)
    const { isLoggedIn } = useAuth()    


    return (
        <UpdateImageContext.Provider value={{image, isLoggedIn, setImage}}>
            {children}
        </UpdateImageContext.Provider>
    )


}

export const useUpdateProfile = () => {
    const ctx = useContext(UpdateImageContext)
    if (!ctx) throw new Error('useUpdateProfile must be used inside UpdateImageProvider');

    return ctx
}