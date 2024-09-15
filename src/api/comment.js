import axios from "axios";

export async function createCom(postId, commentText) {
    try {
      const token = Сookie.get("token");
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/posts/${postId}/comments`, {
        comment_content: commentText
      }, {
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

export async function getComment(commentId) {
    try{
        
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/posts/${commentId}/comments`,
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

