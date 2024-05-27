import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import './OrderForm.css';

const OrderForm = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [totalPrice, setTotalPrice] = useState('');
  const [nameError, setNameError] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [addressError, setAddressError] = useState('');
  const { categoryName, productName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const price = params.get('price');
    setTotalPrice(price);
  }, []);

  const validateName = () => {
    if (!name.trim()) {
      setNameError('Name is required');
    } else {
      setNameError('');
    }
  };

  const validateMobile = () => {
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(mobile)) {
      setMobileError('Please enter a valid 10-digit mobile number');
    } else {
      setMobileError('');
    }
  };

  const validateAddress = () => {
    if (!address.trim()) {
      setAddressError('Address is required');
    } else {
      setAddressError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    validateName();
    validateMobile();
    validateAddress();

    if (name && mobile && address && !nameError && !mobileError && !addressError) {
      const orderData = {
        productName: productName,
        address: address,
        mobileNo: mobile,
        paymentMethod: paymentMethod,
        totalPrice: parseFloat(totalPrice)
      };

      try {
        const response = await fetch('http://localhost:8080/orders/orderPlaced', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(orderData)
        });

        if (response.ok) {
          alert('Order Placed Successfully');
          navigate('/');
        } else {
          const errorData = await response.json();
          alert(`Failed to place order: ${errorData.message}`);
        }
      } catch (error) {
        console.error('Error placing order:', error);
        alert('An error occurred while placing the order');
      }
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Order {productName} from {categoryName}</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
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

        <Form.Group>
          <Form.Label>Your Mobile Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter your mobile number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            onBlur={validateMobile}
            isInvalid={!!mobileError}
            required
          />
          <Form.Control.Feedback type="invalid">
            {mobileError}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label>Your Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            onBlur={validateAddress}
            isInvalid={!!addressError}
            required
          />
          <Form.Control.Feedback type="invalid">
            {addressError}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label>Payment Method</Form.Label>
          <Form.Check
            type="radio"
            label="Net Banking"
            name="paymentMethod"
            onChange={() => setPaymentMethod('Net Banking')}
          />
          <Form.Check
            type="radio"
            label="Through QR Code"
            name="paymentMethod"
            onChange={() => setPaymentMethod('Through QR Code')}
          />
          <Form.Check
            type="radio"
            label="UPI Payment"
            name="paymentMethod"
            onChange={() => setPaymentMethod('UPI Payment')}
          />
          <Form.Check
            type="radio"
            label="Cash on Delivery"
            name="paymentMethod"
            onChange={() => setPaymentMethod('Cash on Delivery')}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Total Price</Form.Label>
          <Form.Control
            type="text"
            readOnly
            value={`$${totalPrice}`}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" style={{ width: '100%' }}>
          Place Order
        </Button>
      </Form>
    </div>
  );
};

export default OrderForm;
