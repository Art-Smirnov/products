import Header from '../components/Header';
import { useEffect } from 'react';
import { useAuth } from '../contecsts';
import { useNavigate } from 'react-router-dom';
import Product from '../components/Product';

const ProductCard = () => {
  const { user } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [navigate, user]);

  return (
    <div>
      <Header />
      <Product />
    </div>
  );
};

export default ProductCard;
