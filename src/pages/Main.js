import ProductsTable from '../components/Table/ProductsTable';
import Header from '../components/Header';
import { Container } from '@mui/material';

const Main = () => {
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
