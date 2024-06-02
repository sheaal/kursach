import axios from 'axios';

export async function login(loginData) {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/login`, loginData,
        {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true
        });

        if (response.data) {
            const data = response.data;
            const token = response.data.token;
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.userId);
            localStorage.setItem('userRole', data.userRole);
            return { token, error: null };
        } else {
            const errorMessage = response.data && response.data.error ? response.data.error : 'failed';
            return { token: null, error: errorMessage };
        }
    } catch (error) {
        console.error("Error:", error);
        return { token: null, error: error.response.data.errors || "Authentication failed" };
    }
}