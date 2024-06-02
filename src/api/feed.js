import axios from 'axios';

export async function login(email, password) {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/feed`);
        const data = response.data;
    } catch (error) {
        console.error("Error:", error);
    }
}