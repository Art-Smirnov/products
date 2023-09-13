import axios from 'axios';

export const getProducts = async (id) => {
  const response = await axios.get(
    `https://fakestoreapi.com/products${id ? `/${id}` : ''}`
  );
  return response.data;
};
