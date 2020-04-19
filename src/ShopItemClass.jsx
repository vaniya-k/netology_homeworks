import React from 'react';
import PropTypes from 'prop-types';

class ShopItemClass extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {brand, title, description, descriptionFull, price, currency} = this.props.item;

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
  }
};

ShopItemClass.propTypes = {
  item: PropTypes.shape({
    brand: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    descriptionFull: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired
  }).isRequired
};

export default ShopItemClass;
