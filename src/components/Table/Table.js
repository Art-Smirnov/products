import React, { memo } from 'react';
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Table as MUITable
} from '@mui/material';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Table = ({ products }) => {
  return (
    <TableContainer>
      <MUITable aria-label="simple table">
        <TableHead>
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
        <TableBody>
          {products.map((row) => (
            <TableRow className="table-row" key={row.id}>
              <TableCell
                className="table-cell table-id-cell"
                component="th"
                scope="row">
                {row.id}
              </TableCell>
              <TableCell align="left" className="table-cell table-name-cell">
                <Link to={`/products/${row.id}`}>{row.title}</Link>
              </TableCell>
              <TableCell align="center" className="table-cell table-price-cell">
                ${row.price}
              </TableCell>
              <TableCell align="center" className="table-cell table-image-cell">
                <img className="table-image" src={row.image} alt={row.title} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MUITable>
    </TableContainer>
  );
};

Table.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired
    })
  ).isRequired
};

export default memo(Table);
