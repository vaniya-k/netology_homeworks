import { ADD_SERVICE, REMOVE_SERVICE, CHANGE_SERVICE_FIELD, SET_ID_TO_EDIT, EDIT_SERVICE} from './actionTypes';

export function addService(name, price) {
  return {type: ADD_SERVICE, payload: {name, price}};
}

export function removeService(id) {
  return {type: REMOVE_SERVICE, payload: {id}};
}

export function changeServiceField(name, value) {
  return {type: CHANGE_SERVICE_FIELD, payload: {name, value}}
}

export function setIdToEdit(id = null) {
  return {type: SET_ID_TO_EDIT, payload: {id}}
}

export function editService(idToEdit, nameToEdit, valueToEdit) {
  return {type: EDIT_SERVICE, payload: {idToEdit, nameToEdit, valueToEdit}}
}
