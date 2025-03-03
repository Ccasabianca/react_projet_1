import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header";
import Dish from "./components/Dish";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      <div className="dish-container">
        <Dish
          name="Tacos à l’unité"
          price={3}
          image="https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg"
        />
        <Dish
          name="Enchiladas"
          price={12}
          image="https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg"
        />
        <Dish
          name="Mole poblano"
          price={15}
          image="https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg"
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
