import { useState, useEffect } from 'react';
import { getProducts } from '../api/products';

const useFetchData = (id) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts(id).then((res) => {
      setData(res);
      setIsLoading(false);
    });
  }, [id]);

  return { data, isLoading };
};

export const useGetProducts = () => {
  return useFetchData();
};

export const useGetProduct = (id) => {
  return useFetchData(id);
};
