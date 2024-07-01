// src/components/Faq.jsx

import React from 'react';
import { Accordion } from 'react-bootstrap';
import './style.css';

const Faq = () => {
  return (
    <div className="container-fluid faq">
      <div className="container py-5">
        <h2 className="text-center text-white mb-4">Frequently Asked Questions</h2>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is Netflix?</Accordion.Header>
            <Accordion.Body>
              Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>How much does Netflix cost?</Accordion.Header>
            <Accordion.Body>
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one low fixed monthly fee. Plans range from USD8.99 to USD15.99 a month. No extra costs, no contracts.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>How do I cancel?</Accordion.Header>
            <Accordion.Body>
            Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>What can I watch on Netflix?</Accordion.Header>
            <Accordion.Body>
            Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
            </Accordion.Body>
          </Accordion.Item>
          {/* Add more FAQ items as needed */}
        </Accordion>
      </div>
    </div>
  );
}

export default Faq;