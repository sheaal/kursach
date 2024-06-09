import axios from 'axios';

// Получение пользователя
export async function getUser(userId) {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/users/${userId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            withCredentials: true,
        });

        return response.data;
    } catch (error) {
        throw error;
    }
}