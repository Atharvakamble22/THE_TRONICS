import React, { useState } from 'react';
import { Form, Button, Row, Col, Container, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './ContactUsPage.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const ContactUsPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phoneNo, setPhone] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [phoneNoError, setPhoneNoError] = useState('');
  const navigate = useNavigate();

  const validateName = () => {
    if (!name.trim()) {
      setNameError('Name is required');
    } else {
      setNameError('');
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const validateMessage = () => {
    if (!message.trim()) {
      setMessageError('Message is required');
    } else {
      setMessageError('');
    }
  };

  const validatePhoneNo = () => {
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phoneNo)) {
      setPhoneNoError('Please enter a valid 10-digit phone number');
    } else {
      setPhoneNoError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    validateName();
    validateEmail();
    validateMessage();
    validatePhoneNo();

    if (name && email && message && phoneNo && !nameError && !emailError && !messageError && !phoneNoError) {
      const contactDetails = {
        name,
        email,
        message,
        phoneNo
      };

      try {
        const response = await fetch('http://localhost:8080/contactUs/saveComplaints', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(contactDetails)
        });

        if (response.ok) {
          alert("Thanks for contacting us, we will get back to you");
          navigate('/');
        } else {
          throw new Error('Network response was not ok');
        }
      } catch (error) {
        console.error("There was an error sending the contact details!", error);
        alert("There was an error sending your message. Please try again later.");
      }
    }
  };

  return (
    <Container className="contact-us-page my-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <Card>
        <Card.Body>
          <Row className="text-center mb-4">
            <Col>
              <a href="https://wa.me/9960786770" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-whatsapp" style={{ fontSize: '2rem', color: 'green' }}></i>
              </a>
            </Col>
            <Col>
              <a href="tel:yourphonenumber">
                <i className="bi bi-telephone-fill" style={{ fontSize: '2rem', color: 'blue' }}></i>
              </a>
            </Col>
            <Col>
              <a href="mailto:youremail@example.com">
                <i className="bi bi-envelope-fill" style={{ fontSize: '2rem', color: 'red' }}></i>
              </a>
            </Col>
          </Row>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={validateName}
                isInvalid={!!nameError}
                required
              />
              <Form.Control.Feedback type="invalid">
                {nameError}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Your Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={validateEmail}
                isInvalid={!!emailError}
                required
              />
              <Form.Control.Feedback type="invalid">
                {emailError}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Your Message</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onBlur={validateMessage}
                isInvalid={!!messageError}
                required
              />
              <Form.Control.Feedback type="invalid">
                {messageError}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Your Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                value={phoneNo}
                onChange={(e) => setPhone(e.target.value)}
                onBlur={validatePhoneNo}
                isInvalid={!!phoneNoError}
                required
              />
              <Form.Control.Feedback type="invalid">
                {phoneNoError}
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              <i className="bi bi-envelope-fill me-2"></i> Send Message
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ContactUsPage;
