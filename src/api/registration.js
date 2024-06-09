import axios from "axios";

export async function register(registerData) {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/register`, registerData,
            {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            withCredentials: true
        });

        if (response && response.data) {
            const message = response.data.message;
            return { message, error: null };
        } else {
            const errorMessage = response.data && response.data.error ? response.data.error : 'failed';
            return { message: null, error: errorMessage };
        }
    } catch (error) {
        console.error("Error:", error);
        return { token: null, error: error.response.data.errors || "Register failed" };
    }
}