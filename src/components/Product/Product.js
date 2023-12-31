import React, { memo } from 'react';
import { useGetProduct } from '../../hooks/dataFetchHooks';
import { useParams } from 'react-router-dom';
import { CircularProgress, Rating } from '@mui/material';
import './Product.less';

const Product = () => {
  const { productId } = useParams();
  const { data, isLoading } = useGetProduct(productId);

  if (isLoading) {
    return <CircularProgress className="spinner" />;
  }

  return (
    <div className="product">
      <div className="product-image">
        <img alt={data.title} src={data.image} />
      </div>
      <div className="product-info">
        <h1>{data.title}</h1>
        <span className="product-price">${data.price}</span>
        <Rating defaultValue={data.rating?.rate} precision={0.5} readOnly />
        <span className="product-votes-title">{data.rating?.count} votes</span>
        <p>{data.description}</p>
        <span className="product-category">Category: {data.category}</span>
      </div>
    </div>
  );
};

export default memo(Product);
