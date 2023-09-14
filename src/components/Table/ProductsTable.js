import React, { useState } from 'react';
import {
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useGetProducts } from '../../hooks/dataFetchHooks';

import './ProductsTable.less';

const ProductsTable = () => {
  const { data } = useGetProducts();
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const productsPerPage = 5;
  const totalPages = Math.ceil(data.length / productsPerPage);
  const productsToShow = data.slice(
    (page - 1) * productsPerPage,
    page * productsPerPage
  );

  return (
    <div className="table">
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className="table-head">
            <TableRow className="table-head-row">
              <TableCell>
                <span>ID</span>
              </TableCell>
              <TableCell align="left">
                <span>Name</span>
              </TableCell>
              <TableCell align="center">
                <span>Price</span>
              </TableCell>
              <TableCell align="center">
                <span>Image</span>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="table-body">
            {productsToShow.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="table-id-cell" component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="left" className="table-name-cell">
                  <Link to={`/products/${row.id}`}>{row.title}</Link>
                </TableCell>
                <TableCell align="center" className="table-price-cell">
                  ${row.price}
                </TableCell>
                <TableCell align="center" className="table-image-cell">
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
