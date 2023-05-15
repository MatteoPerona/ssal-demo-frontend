import React from "react"
import "./style.css"
import { Col, Container, Row } from "react-bootstrap"

const Footer = () => {
  return (
    <footer>
        <Container>
          <Row className="footer-row">
            <Col md={3} sm={5} className='box'>
              <div className="logo">
                  <h1  className="logo">R I S O</h1>
              </div>
              <p>
              A blockchain-based commodities exchange platform which leverages the power of distributed ledger technology to address the challenge of transparency and trust in commodity trading.</p>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>About Us</h2>
              <ul>
                <li>Buy Contracts</li>
                <li>Sell Contracts</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Contact Us</h2>
              <ul>
                <li>8280 Caminito Sonoma, La Jolla, 92307 CA, United States </li>
                <li>Email: matteoperona@mansacapital.us</li>
                <li>Phone: +1 (858) 319-5723</li>
              </ul>
            </Col>
          </Row>
        </Container>
    </footer>
  )
}

export default Footer
