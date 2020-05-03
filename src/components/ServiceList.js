import React from 'react';
import {useSelector} from 'react-redux';

function ServiceList() {
  const items = useSelector(state => state.serviceList);

  return (
    <>
      <ul>
        {items.map(o => (
          <li key={o.id} style={{marginBottom: `20px`}}>
            <div style={{marginBottom: `10px`}}>{`${o.name} / ${o.price} руб.`}</div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default ServiceList;
