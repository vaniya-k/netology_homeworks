import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeServiceField, addService, setIdToEdit, editService} from '../actions/actionCreators';

function ServiceAdd() {
	const item = useSelector(state => state.serviceAdd);
	const dispatch = useDispatch();

	const handleNameChange = evt => {
		dispatch(changeServiceField(evt.target.value, item.price));
	}

	const handlePriceChange = evt => {
		dispatch(changeServiceField(item.name, evt.target.value));
	}

	const handleSubmit = evt => {
		evt.preventDefault();

		if(item.idToEdit !== null) {
			dispatch(editService(item.idToEdit, item.name, item.price))
		} else {
			dispatch(addService(item.name, item.price));
		}

		dispatch(setIdToEdit(null));
		dispatch(changeServiceField(``,``));
	}

	const handleCancel = (evt) => {
		evt.preventDefault();

		dispatch(setIdToEdit(null));
		dispatch(changeServiceField(``,``));
	}

	return (
		<form>
			<input name='name' onChange={handleNameChange} value={item.name} />
			<input name='price' onChange={handlePriceChange} value={item.price} />
			<button onClick={handleSubmit}>Save</button>
			<button onClick={handleCancel}>Cancel</button>
		</form>
	);
}

export default ServiceAdd;
