import { useEffect } from "react"

export const handleOffScroll = (open: boolean) => {
     useEffect(() => {
        if (open) {
            document.body.classList.add('off-scroll')
        } else {
            document.body.classList.remove('off-scroll')
        }

        return (() => {
            document.body.classList.remove('off-scroll')
        })
    }, [open])
}