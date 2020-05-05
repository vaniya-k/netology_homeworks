import React from 'react';
// import FocusedIdContext from './contexts/FocusedIdContext.js';

const Details = () => {
  const {name, details} = personDetails;
  const {city, position} = details;

  return (
    <div class="staff-item-details">
      <h4>Details</h4>
      <span>{`Name: ${name}`}</span>
      <span>{`City: ${city}`}</span>
      <span>{`Position: ${position}`}</span>
    </div>
  )
};

export default Details;

const personDetails = {
  "id": 7,
  "name": "Laron Trantow",
  "avatar": "https://i.pravatar.cc/300",
  "details": {
      "city": "South Aydenmouth",
      "company": "Jacobson LLC",
      "position": "Investor Integration Consultant"
  }
};
