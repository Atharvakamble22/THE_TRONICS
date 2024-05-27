import React from 'react';
import { Accordion } from 'react-bootstrap';
import './HomePage.css';

const happyClients = [
  { name: 'Atharva', feedback: 'Excellent service!', rating: 5 },
  { name: 'Vaibhav', feedback: 'Great prices!', rating: 4 },
  { name: 'Sachin', feedback: 'Fast delivery!', rating: 5 },
  { name: 'Deepesh', feedback: 'Good quality.', rating: 4 },
  { name: 'Pravin', feedback: 'Will shop again.', rating: 5 },
];

const HappyClientsSection = () => {
    return (
      <section className="combined-feedback">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Our Happy Clients</Accordion.Header>
            <Accordion.Body>
              <ul>
                {happyClients.map((client, index) => (
                  <li key={index}>
                    <strong>{client.name}:</strong> {client.feedback} <br />
                    Rating: {'⭐'.repeat(client.rating)}
                  </li>
                ))}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </section>
    );
  };

export default HappyClientsSection;
