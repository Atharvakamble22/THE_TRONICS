import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './SellOnWebsitePage.css'; 
import ProductCard from './ProductCard';

const SellOnWebsitePage = () => {
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [showProductCard, setShowProductCard] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = {
      productName,
      productCategory,
      productDescription,
      productPrice,
      companyName,
      productImage
    };
    navigate('/product', { state: productData });
    window.alert('Product Added successfully!'); 
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProductImage(file);
  };

  const handleNavigateToHomePage = () => {
    navigate('/');
  };

  return (
    <Container className="sell-on-website-page my-5">
      <h2 className="text-center mb-4">Sell on Website</h2>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter product name"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Upload Image</Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Product Category</Form.Label>
                  <Form.Select
                    value={productCategory}
                    onChange={(e) => setProductCategory(e.target.value)}
                    required
                  >
                    <option value="">Select category</option>
                    <option value="Mobiles">Mobiles</option>
                    <option value="Tablets">Tablets</option>
                    <option value="Headphones">Headphones</option>
                    <option value="Chargers">Chargers</option>
                    <option value="Watches">Watches</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Product Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Enter product description"
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Product Price</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter product price"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter company name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Sell on Website
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {showProductCard && (
        <Row className="justify-content-center mt-5">
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
      )}
    </Container>
  );
};

export default SellOnWebsitePage;
