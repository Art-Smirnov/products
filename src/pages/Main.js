import Header from '../components/Header';
import { useGetProducts } from '../hooks/dataFetchHooks';
import ProductsTable from '../components/Table/ProductsTable';

const Main = () => {
  const { isLoading } = useGetProducts();

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <div>
      <Header />
      <ProductsTable />
    </div>
  );
};

export default Main;
