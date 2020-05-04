import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {FETCH_SERVICES_START} from '../actions/actionTypes';
import {Link} from 'react-router-dom';

function buildLiItem(item) {
  return (
    <li key={item.id} style={{marginBottom: `20px`}}>
      <span style={{marginBottom: `10px`, display: `block`}}>
        {`${item.name} / ${item.price} руб.`}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to={`/${item.id}`}>{`>> подробнее`}</Link>
      </span>
    </li>
  )
}

function decideWhatToRender(isLoading, didFail, items, handleReload) {
  if(didFail && isLoading === false) {
    return <span>Error...&nbsp;&nbsp;<button onClick={handleReload}>reload</button></span>
  } else if(isLoading) {
    return <span>Loading...</span>
  } else {
    return <ul>{items.map(item => buildLiItem(item))}</ul>
  } 
}

function ServiceList() {
  const items = useSelector(state => state.serviceList.list);
  const status = useSelector(state => state.apiInteraction);
  const dispatch = useDispatch();
  const handleReload = () => dispatch({type: FETCH_SERVICES_START});

  return (
    <>
    <h3>Список сервисов</h3>
    {decideWhatToRender(status.isLoadingServices, status.didLoadingServicesFail, items, handleReload)}
    </>
  )
}

export default ServiceList;
