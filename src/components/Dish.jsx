import { Card, Badge } from "react-bootstrap";
import "../assets/styles/dish.scss";

function Dish({ name, price, image, isNew }) {
  return (
    <Card className="dish position-relative">
      {isNew && (
        <Badge bg="primary" className="position-absolute top-0 end-0 m-2">
          Nouveau
        </Badge>
      )}
      <Card.Img variant="top" src={image} alt={name} className="dish-img" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Prix: {price}€</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Dish;
