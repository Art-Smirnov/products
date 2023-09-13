import Header from '../components/Header';
import { useEffect } from 'react';
import { useAuth } from '../contecsts';
import { useNavigate, useParams } from 'react-router-dom';

const ProductCard = () => {
  const { user } = useAuth();
  const { productId } = useParams();
  console.log(productId);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [navigate, user]);

  return (
    <div>
      <Header />
    </div>
  );
};

export default ProductCard;
