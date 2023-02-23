import axios from 'axios';

const apiUrl = 'http://localhost:8090/api/collections/pizza/records';

export const getAll = async params => {
  try {
    const res = await axios.get(`${apiUrl}`, { params });
    return [res.data, null];
  } catch (err) {
    return [null, err.message];
  }
};
