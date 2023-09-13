import { useState, useEffect } from 'react';
import { getProducts } from '../api/products';

export const useGetProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getProducts().then((products) => {
      setProducts(products);
      setIsLoading(false);
    });
  }, []);

  return { products, isLoading };
};
