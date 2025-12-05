import { useEffect } from "react"

export const handleEscape = (open: boolean, onClose: () => void) => {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }

        if (open) {
            return window.addEventListener('keydown', handleEsc)
        }

        return () => window.removeEventListener('keydown', handleEsc)
    },[open, onClose])
}