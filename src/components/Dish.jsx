const Dish = ({ name, price, image }) => {
    return (
      <div>
        <img src={image} alt={name} style={{ width: '100px' }} />
        <h3>{name}</h3>
        <p>Prix: {price}€</p>
      </div>
    );
  };
  
  export default Dish;