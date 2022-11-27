import axios from 'utils/axios';

export const getMenu = async () => {
  try {
    const res = await axios.get('/api/categories');
    return res?.data;
  } catch (err) {
    return err?.response;
  }
};
