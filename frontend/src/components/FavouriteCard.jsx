import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

function FavouriteCard({ favourite }) {
  return (
    <Col md={6} sm={12}>
      <Card>
        <Card.Body>
          <Card.Title>{favourite.name.toUpperCase()}</Card.Title>
          <h2>Ingredients:</h2>
          <ListGroup variant="flush">
            {favourite.ingredients.map((ingred, i) => (
              <ListGroup.Item key={i}>{ingred}</ListGroup.Item>
            ))}
          </ListGroup>
          <h2>Instructions:</h2>
          <Card.Text>{favourite.instructions}</Card.Text>
          <div className="d-flex justify-content-center">
            <Button variant="danger">Delete</Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default FavouriteCard;
