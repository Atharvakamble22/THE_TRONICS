import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactIcons = () => {
  return (
    <div className="contact-icons">
      <Link to="/contact">
        <FaWhatsapp size={30} title="WhatsApp" />
      </Link>
      <Link to="/contact">
        <FaPhone size={30} title="Call" />
      </Link>
      <Link to="/contact">
        <FaEnvelope size={30} title="Email" />
      </Link>
    </div>
  );
};

export default ContactIcons;
