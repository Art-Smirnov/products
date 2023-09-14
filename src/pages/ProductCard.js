import { memo, useEffect } from 'react';
import { useAuth } from '../contecsts';
import { useNavigate } from 'react-router-dom';
import Product from '../components/Product';
import { Container } from '@mui/material';
import Header from '../components/Header';

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
      <Header isProductCard />
      <Container>
        <Product />
      </Container>
    </div>
  );
};

export default memo(ProductCard);
