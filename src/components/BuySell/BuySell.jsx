import React from "react"
import "./style.css"
import { Col, Container, Row } from "react-bootstrap"
import { buysellData } from "../../utils/products"

const BuySell = () => {
  return (
    
      <section className='wrapper background'>
        <h1>Get Started!</h1>
        <Container>
          
          <Row>
            
          {buysellData.map((val, index) => {
            return (
              <Col md={5} sm={5} xs={9} style={{backgroundColor:val.bg}} className='feature' key={index}>
                <div className='icon'>
                  {val.icon}
                </div>
                <h3>{val.title}</h3>
                <p>{val.subtitle}</p>
              </Col>
            )
          })}
          </Row>
        </Container>
      </section>
  )
}

export default BuySell
