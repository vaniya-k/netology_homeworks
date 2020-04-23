import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {changeServiceField, removeService, setIdToEdit} from '../actions/actionCreators';

function ServiceList() {
  const items = useSelector(state => state.serviceList);
  const item = useSelector(state => state.serviceAdd);
  const dispatch = useDispatch();

  const handleChange = (id, name, value) => {
    dispatch(setIdToEdit(id));
		dispatch(changeServiceField(name, value));
	}

  const handleRemove = id => {
    dispatch(removeService(id));
  }

  return (
    <ul>
      {items.map(o => (
        <li key={o.id}>
          {o.name} {o.price}
          <button onClick={() => handleChange(o.id, o.name, o.price)} style={(item.idToEdit === o.id) ? {backgroundColor: `darkgrey`} : null}>...</button>
          <button onClick={() => handleRemove(o.id)}>X</button>
        </li>
      ))}
    </ul>
  )
}

export default ServiceList
