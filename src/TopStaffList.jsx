import React from 'react';
import {useState, useEffect} from 'react';
import FocusedIdContext from './contexts/FocusedIdContext.js';

const LiItem = ({id, isFocused, name, onStaffLiItemClick}) => {
  return (
    <li className={(isFocused) ? `focused-li-item` : null} onClick={() => onStaffLiItemClick(id)}>{name}</li>
  )
}

const TopStaffList = () => {
  const [staffList, setStaffList] = useState([]);

  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json`)
      .then(res => res.json())
      .then(data => setStaffList(data))
  },[]);

  return (
    <div className="staff-list">
        {(staffList.length === 0)
          ? <h4>Loading...</h4>
          : <>
            <h4>Our top staff</h4>
            <ul>
              <FocusedIdContext.Consumer>
                {context => (
                  staffList.map(person =>
                  <LiItem
                    key={person.id}
                    id={person.id}
                    name={person.name}
                    onStaffLiItemClick={context.setFocusedId}
                    isFocused={(person.id === context.focusedId) ? true : false}
                  />)
                )}
              </FocusedIdContext.Consumer>
            </ul>
          </>
        }
    </div>
  )
};

export default TopStaffList;