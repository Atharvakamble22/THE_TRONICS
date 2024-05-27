import React from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from './ProductCard';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ProductCardPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;

  if (!state) {
    navigate('/');
    return null;
  }

  const { productName, productCategory, productDescription, productPrice, companyName, productImage } = state;

  const handleNavigateToHomePage = () => {
    navigate('/');
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <ProductCard
            productName={productName}
            productCategory={productCategory}
            productDescription={productDescription}
            productPrice={productPrice}
            companyName={companyName}
            productImage={productImage}
          />
          <Button variant="primary" onClick={handleNavigateToHomePage} className="mt-3 w-100">
            Go to Home Page
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductCardPage;
