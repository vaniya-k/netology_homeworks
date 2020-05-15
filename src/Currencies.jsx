import React from 'react';

const Currencies = ({currencies}) => {
  return (
    <ul style={{backgroundColor: `aquamarine`, marginBlockStart: `0`, marginBlockEnd: `0`}}>
      {currencies.map(currency => <li style={{display: `inline`, marginRight: `20px`}}>{currency.code}&nbsp;{currency.rate}</li>)}
    </ul>
  )
};

export default Currencies;
