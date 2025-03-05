import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import Header from "./components/header";
import Dish from "./components/Dish";
import Footer from "./components/Footer";

function App() {
  // Panier
  const [cartCount, setCartCount] = useState(0);
  const addToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  // Bouton new
  const [showNewOnly, setShowNewOnly] = useState(false);
  const handleShowNewOnly = () => {
    setShowNewOnly((prev) => !prev);
  };

  const dishes = [
    {
      id: 1,
      name: "Tacos à l’unité",
      price: 3,
      image:
        "https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg",
      isNew: true,
      inStock: 1,
    },
    {
      id: 2,
      name: "Enchiladas",
      price: 12,
      image:
        "https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg",
      isNew: false,
      inStock: 3,
    },
    {
      id: 3,
      name: "Mole poblano",
      price: 15,
      image:
        "https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg",
      isNew: false,
      inStock: 0,
    },
  ];

  const filteredDishes = dishes
    .filter((dish) => dish.inStock > 0)
    .filter((dish) => !showNewOnly || dish.isNew);

  return (
    <>
      <Header cartCount={cartCount} />
      <Container className="py-5">
        <div className="text-center mb-4">
          <Button variant="primary" onClick={handleShowNewOnly}>
            {showNewOnly ? "Voir tous les plats" : "Nouveautés uniquement"}
          </Button>
        </div>
        <Row className="justify-content-center mt-4">
          {filteredDishes.map((dish) => (
            <Col key={dish.id} xs={12} md={6} lg={4}>
              <Dish
                name={dish.name}
                price={dish.price}
                image={dish.image}
                isNew={dish.isNew}
                addToCart={addToCart}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default App;
