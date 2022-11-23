import axios from 'utils/axios';
import { CATEGORIES, CATEGORIES_ADD } from '../constants/api';

export const fetchCategories = async () => {
  try {
    const res = await axios.get(CATEGORIES);
    return res?.data;
  } catch (err) {
    return err?.response;
  }
};

export const addCategory = async payload => {
  try {
    const res = await axios.post(CATEGORIES_ADD, payload);
    return res?.data;
  } catch (err) {
    return err?.response;
  }
};
