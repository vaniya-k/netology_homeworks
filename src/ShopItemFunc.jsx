import React from 'react';
import PropTypes from 'prop-types';

const ShopItemFunc = ({item}) => {
  const {brand, title, description, descriptionFull, price, currency} = item;
  
  return (
    <div className="main-content">
      <h2>{brand}</h2>
      <h1>{title}</h1>
      <h3>{description}</h3>
      <div className="description">{descriptionFull}</div>
      <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
      <div className="divider"></div>
      <div className="purchase-info">
        <div className="price">{`${currency}${price}.00`}</div>
        <button>ADD TO CART</button>
      </div>
    </div>
  )
};

ShopItemFunc.propTypes = {
  item: PropTypes.shape({
    brand: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    descriptionFull: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired
  }).isRequired
};

export default ShopItemFunc;
