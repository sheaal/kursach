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

export async function delUser() {
    try {
        const token=Сookie.get('token')
        const response = await axios.delete(`${import.meta.env.VITE_API_URL}/users-delete`, {
            headers: {
                'Authorization': `Bearer ${token}`
            },
            withCredentials: true,
        });

        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function searchUser(searchText) {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/search/users`, {
        search_content: searchText
        
        }, {
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