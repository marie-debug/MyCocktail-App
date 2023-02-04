import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Container>
      <Row className="footer">
        <Col className="py-2">
          <span className="text-muted">
            My Cocktail | &copy; Copyright | {new Date().getFullYear()}
          </span>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
