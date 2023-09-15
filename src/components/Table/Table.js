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
import { truncateText } from '../../utils/ellipsis';
import useScreen from '../../hooks/useScreen';

const Table = ({ products }) => {
  const { isMobile } = useScreen();

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
          {products.map((row) => {
            const productTitle = isMobile()
              ? truncateText(row.title, 4)
              : row.title;

            return (
              <TableRow className="table-row" key={row.id}>
                <TableCell
                  className="table-cell table-id-cell"
                  component="th"
                  scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="left" className="table-name-cell">
                  <Link to={`/products/${row.id}`}>{productTitle}</Link>
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
            );
          })}
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
