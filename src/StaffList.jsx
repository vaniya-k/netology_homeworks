import React from 'react';
import FocusedIdContext from './contexts/FocusedIdContext.js';

const StaffListLiItem = ({id, name}) => {
  return (
    <FocusedIdContext.Consumer>
      {context => (
        <li onClick={() => context.setFocusedId(id)}>{name}</li>
      )}
    </FocusedIdContext.Consumer>
  )
}

const StaffList = ({namesList}) => {
  return (
    <div class="staff-list">
      <h4>Our staff</h4>
      <ul>
        {namesList.map(person => <StaffListLiItem id={person.id} name={person.name}/>)}
      </ul>
    </div>
  )
};

export default StaffList;
