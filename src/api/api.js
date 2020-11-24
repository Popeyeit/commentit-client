import axios from 'axios';

axios.defaults.baseURL = 'https://comment-it-server.herokuapp.com/api';

const api = {
  async getComments({ page = 1, limit = 6, popular }) {
    let result = null;
    try {
      if (popular) {
        result = await axios.get(
          `/comments/?page=${page}&limit=${limit}&popular=${popular}`,
        );
      } else {
        result = await axios.get(`/comments/?page=${page}&limit=${limit}`);
      }
      return result.data;
    } catch (error) {
      return error;
    }
  },

  async addComment(body) {
    try {
      const result = await axios.post('/comments', body);
      return result.data;
    } catch (error) {
      return error;
    }
  },

  async changeComment(id, body) {
    try {
      const result = await axios.patch(`/comments/${id}`, { likes: body });
      console.log(result);

      return result.data;
    } catch (error) {
      return error;
    }
  },
};

export default api;
