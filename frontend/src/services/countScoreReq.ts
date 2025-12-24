import axios from "axios";

export const countScore = async () => {
    try {
        const token = localStorage.getItem('access_token')

        if (!token) {
            throw new Error('token is invalid')
        }

        const request = await axios.get(import.meta.env.VITE_COUNT_STARS, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json" 
            }
        })
        return request.data
    } catch(error) {
        throw error
    }
}