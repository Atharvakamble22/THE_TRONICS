import React from 'react';
import { Container, Navbar, Nav, NavDropdown, Carousel, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css';
import HappyClientsSection from './HappyClientsSection';

const categories = [
  { name: 'Mobiles', image: '/denis-cherkashin-zgUkIMKeJq4-unsplash.jpg' },
  { name: 'Headphones', image: '/sebastian-banasiewcz-oXXc-s5nNy8-unsplash.jpg' },
  { name: 'Tablets', image: '/kelly-sikkema-4xHgz_ZllQs-unsplash.jpg' },
  { name: 'Chargers', image: '/charger-usb-cable-type-c-orange-background.jpg' },
  { name: 'Watches', image: '/lloyd-dirks-0vsk2_9dkqo-unsplash.jpg' },
];

const additionalImages = [
  '/electronics.jpg',
  '/screen-post-qhnutBbnzOc-unsplash.jpg',
  '/samantha-borges-gXsJ9Ywb5as-unsplash.jpg',
  '/shiwa-id-Uae7ouMw91A-unsplash.jpg',
];

const HomePage = () => (
  <div>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">
        <img
          src="/tronics.jpg"
          alt="The Tronics Logo"
          className="d-inline-block align-top"
          style={{ height: '50px' }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <NavDropdown title="Categories" id="basic-nav-dropdown">
            {categories.map((category, index) => (
              <NavDropdown.Item key={index} href={`/category/${category.name.toLowerCase()}`}>
                {category.name}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
          <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
          <Nav.Link as={Link} to="/my-orders">My Orders</Nav.Link>
          <Nav.Link as={Link} to="/account">Account</Nav.Link>
          <Nav.Link as={Link} to="/sell">Sell on Website</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
          <Nav.Link as={Link} to="/about">About Us</Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Navbar>

    <Container fluid>
      <Carousel interval={2000} controls={true} indicators={true}>
        {categories.map((category, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={category.image}
              alt={category.name}
              style={{ height: '400px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h4>{category.name}</h4>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>

    <Container>
      <Row className="mt-4 mb-4">
        {additionalImages.map((image, index) => (
          <Col sm={3} key={index}>
  <div className="additional-image-container">
    <img src={image} alt={`Additional Image ${index}`} className="img-fluid mb-2" />
  </div>
</Col>
        ))}
      </Row>
      <HappyClientsSection />
    </Container>
  </div>
);

export default HomePage;