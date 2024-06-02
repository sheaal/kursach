import axios from 'axios';

export async function getUser(userId) {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/users/${userId}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw error;
    }
}

