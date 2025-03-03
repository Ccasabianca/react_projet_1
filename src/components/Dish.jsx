import { Card } from "react-bootstrap";
import "../dish.scss";

function Dish({ name, price, image }) {
  return (
    <Card className="dish">
      <Card.Img variant="top" src={image} alt={name} className="dish-img" />
      <Card.Body>
        <Card.Text>
          {name}
          <br />
          Prix: {price}€
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Dish;
