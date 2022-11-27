import axios from 'utils/axios';

export const getCategories = async () => {
  try {
    const res = await axios.get('/api/categories');
    return res.data;
  } catch (err) {
    return err?.response;
  }
};

export const getCategory = async id => {
  try {
    const res = await axios.get(`/api/categories/${id}`);
    return res.data;
  } catch (err) {
    return err?.response;
  }
};
