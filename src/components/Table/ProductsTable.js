import React, { memo, useCallback, useMemo, useState } from 'react';
import { useGetProducts } from '../../hooks/dataFetchHooks';
import InputFilter from '../InputFilter/InputFilter';
import { CircularProgress, Pagination } from '@mui/material';
import Table from './Table';
import './ProductsTable.less';

const ProductsTable = () => {
  const { data, isLoading } = useGetProducts();
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('');

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleFilterChange = useCallback((event) => {
    setFilter(event.target.value);
    setPage(1);
  }, []);

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      item.title.toLowerCase().includes(filter.toLowerCase())
    );
  }, [data, filter]);

  const productsPerPage = 5;
  const totalPages = Math.ceil(filteredData.length / productsPerPage);

  const productsToShow = useMemo(() => {
    return filteredData.slice(
      (page - 1) * productsPerPage,
      page * productsPerPage
    );
  }, [filteredData, page, productsPerPage]);

  if (isLoading) {
    return <CircularProgress className="spinner" />;
  }

  const showNotFound = productsToShow.length === 0;

  return (
    <div className="products-table">
      <InputFilter value={filter} onChange={handleFilterChange} />
      <div className="products-table-container">
        {showNotFound ? (
          <h2 className="not-found-msg">Not found :(</h2>
        ) : (
          <>
            <Table products={productsToShow} />
            <Pagination
              className="products-table-pagination"
              count={totalPages}
              page={page}
              onChange={handlePageChange}
              showFirstButton
              showLastButton
            />
          </>
        )}
      </div>
    </div>
  );
};

export default memo(ProductsTable);
