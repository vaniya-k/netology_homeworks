import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {changeServiceField, removeService, setIdToEdit} from '../actions/actionCreators';

function ServiceList() {
  const items = useSelector(state => state.serviceList);
  const item = useSelector(state => state.serviceAdd);
  const dispatch = useDispatch();
  const [filterValue, setFilter] = useState(``);

  const handleChangeButtonClick = (id, name, value) => {
    dispatch(setIdToEdit(id));
		dispatch(changeServiceField(name, value));
	}

  const handleRemoveButtonClick = id => {
    dispatch(removeService(id));
  }

  const handleFilterInput = evt => {
    setFilter(evt.target.value);
  }

  const getItemsToRender = (items) => {
    if (filterValue === ``) {
      return items
    } else {
      return items.filter(item => item.name.toLowerCase().includes(filterValue.toLowerCase()))
    }
  }

  return (
    <>
      <input style={{marginTop: `20px`}} type="text" value={filterValue} onChange={handleFilterInput} placeholder="поиск (по желанию)"></input>
      <ul>
        {getItemsToRender(items).map(o => (
          <li key={o.id} style={{marginBottom: `20px`}}>
            <div style={{marginBottom: `10px`}}>{`${o.name} / ${o.price} руб.`}</div>
            <button onClick={() => handleChangeButtonClick(o.id, o.name, o.price)} style={(item.idToEdit === o.id) ? {backgroundColor: `darkgrey`} : null}>...</button>
            <button style={{marginLeft: `5px`}} onClick={() => handleRemoveButtonClick(o.id)}>X</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default ServiceList
