import { useGetProducts } from '../hooks/dataFetchHooks';
import ProductsTable from '../components/Table/ProductsTable';
import Header from '../components/Header';
import { Container } from '@mui/material';

const Main = () => {
  const { isLoading } = useGetProducts();

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <div>
      <Header />
      <Container>
        <ProductsTable />
      </Container>
    </div>
  );
};

export default Main;
