import axios from "axios";

// Создание поста
export async function createPost(postData) {
    try {
        const token = Сookie.get("token");
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/posts`, postData,
            {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            withCredentials: true
        });

        if (response.data) {
            const message = response.data.message;
            return { message, error: null };
        } else {
            const errorMessage = response.data && response.data.error ? response.data.error : 'failed';
            return { message: null, error: errorMessage };
        }
    } catch (error) {
        return { token: null, error: error.response.data.errors || "Register failed" };
    }
}

// Получение постов пользователя
export async function getUserPost(userId) {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/user/${userId}/posts`,
        {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            withCredentials: true
        });
        if (response.data) {
            return response.data;
        } else {
            const errorMessage = response.data && response.data.error ? response.data.error : 'failed';
            return { message: null, error: errorMessage };
        }
    } catch (error) {
        return error;
    }
}

// Получение одного поста пользователя
export async function getPost(Id) {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/posts/${Id}`,
        {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            withCredentials: true
        });
        if (response.data) {
            return response.data;
        } else {
            const errorMessage = response.data && response.data.error ? response.data.error : 'failed';
            return { message: null, error: errorMessage };
        }
    } catch (error) {
        return error;
    }
}
// удаление поста пользователя
export async function delPost(postId) {
    try {
        const token=Сookie.get('token')
        const response = await axios.delete(`${import.meta.env.VITE_API_URL}/posts/${postId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            withCredentials: true,
        });

        return response.data;
    } catch (error) {
        throw error;
    }
}