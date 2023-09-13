import React, { useState } from 'react';
import {
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';

import { useGetProducts } from '../../hooks/useGetProducts';

import './ProductsTable.less';
import { Link } from 'react-router-dom';

const ProductsTable = () => {
  const { products } = useGetProducts();
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const productsPerPage = 5;
  const totalPages = Math.ceil(products.length / productsPerPage);
  const productsToShow = products.slice(
    (page - 1) * productsPerPage,
    page * productsPerPage
  );

  return (
    <div className="table">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Image</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productsToShow.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>
                  <Link to={`/products/${row.id}`}>{row.title}</Link>
                </TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>
                  <img
                    className="table-image"
                    src={row.image}
                    alt={row.title}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Pagination
        className="table-pagination"
        count={totalPages}
        page={page}
        onChange={handleChange}
        showFirstButton
        showLastButton
      />
    </div>
  );
};

export default ProductsTable;
