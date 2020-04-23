import {CHANGE_SERVICE_FIELD, SET_ID_TO_EDIT} from '../actions/actionTypes'

const initialState = {
  name: '',
  price: '',
  idToEdit: null
};

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const {name, value} = action.payload;
      return Object.assign({}, state, {
        name: name,
        price: value,
      })
    case SET_ID_TO_EDIT:
      const {id} = action.payload;
      return Object.assign({}, state, {
        idToEdit: id
      })
    default:
      return state;
  }
}
