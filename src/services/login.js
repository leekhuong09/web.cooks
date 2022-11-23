import axios from 'utils/axios';
import { LOGIN } from '../constants/api';

export const login = async (username, password) => {
  try {
    const res = await axios.post(LOGIN, { username, password });
    return res;
  } catch (err) {
    return err?.response;
  }
};
