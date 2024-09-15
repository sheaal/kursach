import axios from "axios";

export async function likeUser(postId) {
    
    try {
        const token=Сookie.get('token')
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/posts/${postId}/like`, {},{
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

// Получение лайкнутых постов пользователя
export async function getLikesPost() {
    try {
        const token=Сookie.get('token')
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/user/likes-posts`,
        {
            headers: {
                'Authorization': `Bearer ${token}`,
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