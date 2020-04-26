import React from 'react';

const Item = ({itemUrl, imageUrl, title, price, quantityStyle, quantity}) => {
  return (
    <div className="item">
      <div className="item-image">
        <a href={itemUrl}>
          <img src={imageUrl} alt=""></img>
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{title}</p>
        <p className="item-price">{price}</p>
        <p className={quantityStyle}>{`${quantity} left`}
        </p>
      </div>
    </div>
  )
};

const Listing = ({items}) => {
  const composePriceString = (currency, price) => {
    if(currency === `USD`) {
      return `$${price}`
    } else if(currency === `EUR`) {
      return `€${price}`
    } else {
      return `${price} ${currency}`
    }
  };

  const getQuantityStyle = (quantity) => {
    if(quantity <= 10) {
      return `item-quantity level-low`
    } else if(quantity <= 20) {
      return `item-quantity level-medium`
    } else {
      return `item-quantity level-high`
    }
  };

  const shrinkTitle = (title) => {
    if(title.length > 50) {
      return `${title.slice(0, 49).trim()}` + `...`
    } else {
      return title
    }
  };

  return (
    <div className="item-list">
      {items.map(item =>
        <Item
          key={item.id}
          itemUrl={item.itemUrl}
          imageUrl={item.imageUrl}
          title={shrinkTitle(item.title)}
          price={composePriceString(item.currency, item.price)}
          quantityStyle={getQuantityStyle(item.quantity)}
          quantity={item.quantity}
        />
      )}
    </div>
  )
};

export default Listing;
