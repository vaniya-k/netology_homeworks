import React from 'react';

const Weather = ({currentTemp, nextTemp, nextNextTemp}) => {
  return (
    <div style={{backgroundColor: `steelblue`}}>
      <p>ПОГОДА</p>
      <p>Cейчас: {currentTemp}</p>
      <p>Ночью: {nextTemp}</p>
      <p>Утром: {nextNextTemp}</p>
    </div>
  )
};

export default Weather;
