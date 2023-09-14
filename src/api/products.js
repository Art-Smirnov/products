import axios from 'axios';

export const getProducts = async (id) => {
  try {
    const response = await axios.get(
      `https://fakestoreapi.com/products${id ? `/${id}` : ''}`
    );
    return response.data;
  } catch (error) {
    console.error('An error occurred while fetching products:', error);
    throw error;
  }
};
