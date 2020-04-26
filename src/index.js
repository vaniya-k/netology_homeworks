import React from 'react';
import ReactDOM from 'react-dom';
import Listing from './Listing.jsx';
import JSON_DATA from './mock-data.js';

const jsonItemAdapter = (item) => {

  const mainImage = item[`MainImage`]

  return {
    id: item.listing_id,
    itemUrl: item.url,
    imageUrl: mainImage[`url_570xN`],
    title: item.title,
    price: item.price,
    currency: item.currency_code,
    quantity: item.quantity,
  }
}

const processedData = JSON_DATA.map(item => jsonItemAdapter(item));

ReactDOM.render(
    <Listing items={processedData}/>,
  document.getElementById('root')
);
