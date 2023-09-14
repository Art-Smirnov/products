import { useEffect } from 'react';
import { useAuth } from '../contecsts';
import { useNavigate } from 'react-router-dom';
import Product from '../components/Product';
import Header from '../components/Header';
import { Container } from '@mui/material';

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
      <Container>
        <Product />
      </Container>
    </div>
  );
};

export default ProductCard;
