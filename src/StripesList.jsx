import React from 'react';

const ItemStripe = ({name, price, color, img}) => {
 return (
  <article className="item-stripe">
    <div className="item-stripe-contents-container item-container">
      <img src={img} alt=""></img>
      <span className="item-stripe-title item-title">{name}</span>
      <span className="item-stripe-color">{color}</span>
      <span className="item-stripe-price">{`$${price}`}</span>
      <span className="item-stripe-button add-to-cart-button">ADD TO CART</span>
    </div>
  </article>
 )
}

const StripesList = ({products}) => {
  return (
    <div className="items-list-container-for-stripes">
      {products.map((product, i) => 
        <ItemStripe
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

export default StripesList;
