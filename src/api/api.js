import axios from 'axios';

axios.defaults.baseURL = 'https://comment-it-server.herokuapp.com/api';

const api = {
  async getComments({ page = 1, limit = 6, popular, setError }) {
    let result = null;
    try {
      if (popular) {
        popular = this.transformValue(popular);
        result = await axios.get(
          `/comments/?page=${page}&limit=${limit}&popular=${popular}`,
        );
      } else {
        result = await axios.get(`/comments/?page=${page}&limit=${limit}`);
      }
      return result.data;
    } catch (error) {
      setError(error.message);
    }
  },

  async addComment(body, setError) {
    try {
      const result = await axios.post('/comments', body);
      return result.data;
    } catch (error) {
      setError(error.message);
    }
  },

  async changeComment(id, body, setError) {
    try {
      const result = await axios.patch(`/comments/${id}`, { likes: body });
      return result.data;
    } catch (error) {
      setError(error.message);
    }
  },
  transformValue(popular) {
    const transform = popular ? -1 : false;
    return transform;
  },
};

export default api;
