import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {CHANGE_FOCUSED_ITEM_ID} from '../actions/actionTypes';

function decideWhatToRender(isLoading, didFail, name, price, content, handleReload) {
  if(didFail && isLoading === false) {
    return <span>Error...&nbsp;&nbsp;
      <button onClick={handleReload}>reload</button>
    </span>
  } else if(isLoading) {
    return <span>Loading...</span>
  } else {
    return (
      <div>
        <span style={{display: `block`}}>{`Название: ${name}`}</span>
        <span style={{display: `block`}}>{`Цена: ${price} руб.`}</span>
        <span style={{display: `block`}}>{`Подробнее: ${content}`}</span>
      </div>
    )
  } 
}

function ServiceDetails() {
  const {name, price, content} = useSelector(state => state.serviceList.focusedItemDetails);
  const id = useSelector(state => state.serviceList.focusedItemChosenId);
  const {isLoadingDetails, didLoadingDetailsFail} = useSelector(state => state.apiInteraction);
  const dispatch = useDispatch();

  const handleReload = () => {
    dispatch({type: CHANGE_FOCUSED_ITEM_ID, payload: {id: id}})
  };

  return (
    <>
    <h3>Детали</h3>
    {decideWhatToRender(isLoadingDetails, didLoadingDetailsFail, name, price, content, handleReload)}
    </>
  )
}

export default ServiceDetails;
