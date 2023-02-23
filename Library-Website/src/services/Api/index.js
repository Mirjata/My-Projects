import axios from 'axios';

export const getProducts = async () => {
  try {
    const res = await axios.get('http://localhost:8090/api/collections/books_store/records');
    return [res.data, null];
  } catch (err) {
    return [null, err.message];
  }
};
