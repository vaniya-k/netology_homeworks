import React from 'react';
import {useState, useEffect} from 'react';

const LiItem = ({id, isFocused, name, onStaffLiItemClick}) => {
  return (
    <li className={(isFocused) ? `focused-li-item` : null} onClick={() => onStaffLiItemClick(id)}>{name}</li>
  )
}

const TopStaffListing = ({focusedId, setFocusedId}) => {
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
              {staffList.map(person =>
                <LiItem
                  key={person.id}
                  id={person.id}
                  name={person.name}
                  onStaffLiItemClick={setFocusedId}
                  isFocused={(person.id === focusedId) ? true : false}
                />)
              }
            </ul>
          </>
        }
    </div>
  )
};

export default TopStaffListing;