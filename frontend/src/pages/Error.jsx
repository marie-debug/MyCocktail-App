import { Container, Row, Col } from "react-bootstrap"
import { FaSadCry } from "react-icons/fa"
import Footer from "../components/Footer"

import SearchAgain from '../components/SearchAgain'

function Error() {
  return (
    <>
      <Container>
          <Row className='content'>
            <Col>
              <h1>Oops...</h1>
              <p>Something went wrong, try again.</p>
              <Row id="cry">
                <FaSadCry size="4rem" color="#CCA79D"/>
              </Row>
            </Col>
          </Row>
          <SearchAgain />
      </Container> 
    </>
  )
}

export default Error