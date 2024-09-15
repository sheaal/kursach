import axios from 'axios';

export async function logout() {
    try {
        const token = Сookie.get('token');

        const response = await axios.post(
            `${import.meta.env.VITE_API_URL}/logout`,
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                withCredentials: true
            }
        );

        if (response.data) {
            const message = response.data.message;

            if (message) {
                Сookie.remove('token');
            }

            return message;
        } else {
            const errorMessage = response.data && response.data.error ? response.data.error : 'failed';
            return errorMessage;
        }
    } catch (error) {
        console.error("Error:", error);
        return { token: null, error: error.response.data.errors || "Logout failed" };
    }
}