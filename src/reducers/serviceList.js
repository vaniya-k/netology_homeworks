import { POPULATE_SERVICES, SET_FOCUSED_ITEM, CHANGE_FOCUSED_ITEM_ID } from '../actions/actionTypes'

const initialState = {
  list: [],
  focusedItemChosenId: null,
  focusedItemDetails: {}
}

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case POPULATE_SERVICES:
      const {services} = action.payload;
      let newList = services.map(service => ({id: service.id, name: service.name, price: service.price}));
      return {...state, list: newList};
    case SET_FOCUSED_ITEM:
      const {details} = action.payload;
      let newDetails = {id: details.id, name: details.name, price: details.price, content: details.content};
      return {...state, focusedItemDetails: newDetails};
    case CHANGE_FOCUSED_ITEM_ID:
      const {id} = action.payload;
      return {...state, focusedItemChosenId: id};
    default:
      return state;
  }
}
