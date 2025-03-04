import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./components/header";
import Dish from "./components/Dish";
import Footer from "./components/Footer";

function App() {
  const dishes = [
    {
      id: 1,
      name: "Tacos à l’unité",
      price: 3,
      image: "https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg",
      isNew: true,
    },
    {
      id: 2,
      name: "Enchiladas",
      price: 12,
      image: "https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg",
      isNew: false,
    },
    {
      id: 3,
      name: "Mole poblano",
      price: 15,
      image: "https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg",
      isNew: false,
    },
  ];
  return (
    <>
      <Header />
      <Container className="py-5">
        <Row className="justify-content-center mt-4">
          {dishes.map((dish) => (
            <Col key={dish.id} xs={12} md={6} lg={4}>
              <Dish
                name={dish.name}
                price={dish.price}
                image={dish.image}
                isNew={dish.isNew}
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