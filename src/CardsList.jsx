import React from 'react';

const ItemCard = ({name, price, color, img}) => {
  return (
    <article className="item-card item-container">
      <div className="item-card-contents-container-for-cards">
        <header className="item-card-header">
          <h2 className="item-title">{name}</h2>
          <h4>{color}</h4>
        </header>
        <img src={img} alt=""></img>
        <footer className="item-card-footer">
          <h3>{`$${price}`}</h3>
          <div className="add-to-cart-button">ADD TO CART</div>
        </footer>
      </div>
    </article>
  )
}

const CardsList = ({products}) => {
  return (
    <div className="items-list-container-for-cards">
      {products.map((product, i) => 
        <ItemCard
          key={`key${i}`}
          name={product.name}
          price={product.price}
          color={product.color}
          img={product.img}
          />
      )}
    </div>
  )
}

export default CardsList;
