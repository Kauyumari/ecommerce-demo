import Axios from 'axios';

const apiID = process.env.REACT_APP_MOCK_API_ID;
const url = 'mockapi.io';
const protocol = 'https://';

export const getAll = async () => {
  try {
    const response = await Axios.get(`${protocol + apiID}.${url}/products`);
    return { ...response };
  } catch (e) {
    return { ...e };
  }
};

export const getById = async (id) => {
  try {
    const response = await Axios.get(`${protocol + apiID}.${url}/products/${id}`);
    return { ...response };
  } catch (e) {
    return { ...e };
  }
};
