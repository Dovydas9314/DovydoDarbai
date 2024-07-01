import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css';

const Section = ({ title, description, imageUrl, isReverse }) => {
  return (
    <div className="section">
      <Container>
        <Row className={`align-items-center ${isReverse ? 'flex-row-reverse' : ''}`}>
          <Col md={6}>
            <div className="feature-text">
              <h2 className='text-white'>{title}</h2>
              <p className='text-white'>{description}</p>
            </div>
          </Col>
          <Col md={6}>
            <div className="feature-image">
              <img src={imageUrl} alt={title} className="img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section;