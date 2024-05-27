import React from 'react';
import { Card } from 'react-bootstrap';

const ProductCard = ({ productName, productCategory, productDescription, productPrice, companyName, productImage }) => {
  return (
    <Card style={{ width: '18rem', marginTop: '20px' }}>
      {productImage && (
        <Card.Img variant="top" src={URL.createObjectURL(productImage)} />
      )}
      <Card.Body>
        <Card.Title>{productName}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Category: {productCategory}</Card.Subtitle>
        <Card.Text>Description: {productDescription}</Card.Text>
        <Card.Text>Price: ${productPrice}</Card.Text>
        <Card.Text>Company: {companyName}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
