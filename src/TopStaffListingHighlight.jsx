import React from 'react';
import {useState, useEffect} from 'react';

const DetailsView = ({focusedId}) => {
  const [detailsDataSet, setDetailsDataSet] = useState([]);

  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${focusedId}.json`)
      .then(res => res.json())
      .then(data => setDetailsDataSet({id: data.id, name: data.name, city: data.details[`city`], position: data.details[`position`]}))
  },[focusedId]);

  return (
    <div className="staff-item-details">
      {(focusedId !== detailsDataSet.id)
        ? <h4>Loading...</h4>
        : <>
          <h4>Details</h4>
          <span>{`Name: ${detailsDataSet.name}`}</span>
          <span>{`City: ${detailsDataSet.city}`}</span>
          <span>{`Position: ${detailsDataSet.position}`}</span>
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
