const Dish = ({ name, price, image }) => {
    return (
      <div className="dish">
        <img src={image} alt={name} style={{ width: '8rem' }} />
        <h4>{name}</h4>
        <p>Prix: {price}€</p>
      </div>
    );
  };
  
  export default Dish;