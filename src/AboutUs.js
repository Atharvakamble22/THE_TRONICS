import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutUs.css';

const AboutUs = () => (
  <Container className="about-us my-5">
    <Row className="text-center mb-4">
      <Col>
        <h2 className="display-4">About Us</h2>
      </Col>
    </Row>
    <Row className="mb-3">
      <Col md={{ span: 8, offset: 2 }}>
        <p className="mb-3">
          Welcome to The Tronics Website, your number one source for all things electronic. 
          We're dedicated to providing you with the very best products, focusing on quality, 
          customer service, and uniqueness.
        </p>
      </Col>
    </Row>
    <Row className="mb-3">
      <Col md={{ span: 8, offset: 2 }}>
        <p>
          Founded in 2020, The Tronics Website has come a long way from its beginnings in a small office. 
          When we first started, our passion for providing the best customer experience drove us to do intense research,
          and it gave us the impetus to turn hard work and inspiration into a booming online store.
        </p>
      </Col>
    </Row>
    <Row className="mb-3">
      <Col md={{ span: 8, offset: 2 }}>
        <p>
          Our head office is located in New York City, USA. This is where we coordinate our global operations and
          ensure the best customer service.
        </p>
      </Col>
    </Row>
    <Row className="mb-3">
      <Col md={{ span: 8, offset: 2 }}>
        <p>
          Our Managing Director, John Wick, has over 20 years of experience in the e-commerce industry. 
          His leadership and vision have been instrumental in the growth and success of our company.
        </p>
      </Col>
    </Row>
    <Row className="mb-3">
      <Col md={{ span: 8, offset: 2 }}>
        <p>
          We hope you enjoy our products as much as we enjoy offering them to you. 
          If you have any questions or comments, please don't hesitate to <a href="/contact">contact us</a>.
        </p>
      </Col>
    </Row>
  </Container>
);

export default AboutUs;
