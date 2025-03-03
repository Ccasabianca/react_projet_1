import { Card } from "react-bootstrap";
import "../dish.scss";

function Dish({ name, price, image }) {
  return (
    <Card className="dish">
      <img src={image} alt={name} className="dish-img" />
      <h4>{name}</h4>
      <p>Prix: {price}€</p>
    </Card>
  );
}

export default Dish;
