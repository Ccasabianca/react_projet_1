import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./components/header";
import Dish from "./components/Dish";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Container className="py-5">
        <Row className="justify-content-center mt-4">
          <Col xs={12} md={6} lg={4}>
            <Dish
              name="Tacos à l’unité"
              price={3}
              image="https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg"
              isNew={true}
            />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Dish
              name="Enchiladas"
              price={12}
              image="https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg"
              isNew={false}
            />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Dish
              name="Mole poblano"
              price={15}
              image="https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg"
              isNew={false}
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default App;
