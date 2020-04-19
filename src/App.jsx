import React from 'react';
import PropTypes from 'prop-types';
import ShopItemFunc from './ShopItemFunc.jsx';

const App = ({item}) => {
  return(
    <div className="container">
      <div className="background-element"></div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <ShopItemFunc item={item}/>
      </div>
    </div>
  )
};

App.propTypes = {
  item: PropTypes.shape({
    brand: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    descriptionFull: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired
  }).isRequired
};

export default App;
