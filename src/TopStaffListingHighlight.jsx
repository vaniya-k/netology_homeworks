import React from 'react';
import {useState, useEffect} from 'react';

const DetailsView = ({focusedId}) => {
  const [detailsDataSet, setDetailsDataSet] = useState([]);

  const buildDetailsDataSet = (data) => {
    const {id, name, details} = data;
    const {city, position} = details;

    setDetailsDataSet([`${name}`,`${city}`, `${position}`, id])
  }
  
  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${focusedId}.json`)
      .then(res => res.json())
      .then(data => buildDetailsDataSet(data))
  },[focusedId]);

  return (
    <div className="staff-item-details">
      {(focusedId !== detailsDataSet[3])
        ? <h4>Loading...</h4>
        : <>
          <h4>Details</h4>
          <span>{`Name: ${detailsDataSet[0]}`}</span>
          <span>{`City: ${detailsDataSet[1]}`}</span>
          <span>{`Position: ${detailsDataSet[2]}`}</span>
        </>
      }
    </div>
  )
};

const TopStaffListingHighlight = ({focusedId}) => {
  return (
    <>
      {focusedId !== null && <DetailsView focusedId={focusedId}/>}
    </>
  )
}

export default TopStaffListingHighlight;
