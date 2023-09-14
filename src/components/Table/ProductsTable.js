import React, { useState } from 'react';
import { useGetProducts } from '../../hooks/dataFetchHooks';
import InputFilter from '../InputFilter/InputFilter';

import './ProductsTable.less';
import { Pagination } from '@mui/material';
import Table from './Table';

const ProductsTable = () => {
  const { data } = useGetProducts();
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('');

  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(filter.toLowerCase())
  );

  const productsPerPage = 5;
  const totalPages = Math.ceil(filteredData.length / productsPerPage);
  const productsToShow = filteredData.slice(
    (page - 1) * productsPerPage,
    page * productsPerPage
  );

  return (
    <div className="products-table">
      <InputFilter value={filter} onChange={handleFilterChange} />
      <div className="products-table-container">
        {productsToShow.length === 0 ? (
          <h2 className="not-found-msg">Not found :(</h2>
        ) : (
          <>
            <Table products={productsToShow} />
            <Pagination
              count={totalPages}
              page={page}
              onChange={handleChange}
              showFirstButton
              showLastButton
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ProductsTable;
