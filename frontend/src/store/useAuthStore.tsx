import { count } from "console";
import { create } from "zustand";

export const useAuthStore = create((set) => {
    userData: []
    count: 0

    increaseCount: () => set((state: any) => ({count: state.count + 1}))
    
})