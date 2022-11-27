import axios from 'utils/axios';

export const getRecipesWithCategory = async id => {
  try {
    const res = await axios.get(`/api/recipes?filters[category][id][$eq]=${id}&populate=image`);
    return res.data;
  } catch (err) {
    return err?.response;
  }
};

export const getRecipeDetail = async id => {
  try {
    const res = await axios.get(
      `/api/recipes/${id}?populate[steps][populate]=%2A&populate[category][populate]=%2A&populate[materials][populate]=%2A&&populate[image][populate]=%2A`
    );
    console.log(res);
    return res.data;
  } catch (err) {
    return err?.response;
  }
};
