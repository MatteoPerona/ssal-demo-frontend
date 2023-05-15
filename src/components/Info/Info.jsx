import React from "react"
import { serviceData } from "../../utils/products"
import { Col, Container, Row } from "react-bootstrap";
import "./slidercard.css";
const AboutUs = () => {
  return (
    <section  className='box' >
         <Container>
          <Row>
    <div>
      <h2>What is RISO?</h2>
      <p>Welcome to our website! We are a passionate team dedicated to providing high-quality products and services.</p>
      <p>Our mission is to make a positive impact on people's lives by delivering innovative solutions that meet their needs.</p>
      <p>At our company, we value collaboration, creativity, and excellence. We work together to achieve our goals and continuously strive for improvement.</p>
      <p>Whether you're a customer, partner, or employee, we want to ensure that your experience with us is exceptional.</p>
      <p>Feel free to explore our website and contact us if you have any questions or feedback. We'd love to hear from you!</p>
    </div>
    </Row>
    </Container>
    </section>
  );
};

export default AboutUs;