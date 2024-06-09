import axios from 'axios';

// Получение ленты
export async function getFeedPost() {
    try {
        const token = localStorage.getItem("token");

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            withCredentials: true
        };

        // Проверяем, есть ли токен, и добавляем его к заголовкам запроса, если есть
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/feed`,
            config
        );

        if (response.data) {
            console.log(response.data);
            return response.data.data;
        } else {
            const errorMessage = response.data && response.data.error ? response.data.error : 'failed';
            return { message: null, error: errorMessage };
        }
    } catch (error) {
        return error;
    }
}