import 
  {FETCH_SERVICES_START,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICES_FAIL,
  FETCH_DETAILS_START,
  FETCH_DETAILS_SUCCESS,
  FETCH_DETAILS_FAIL,
  POPULATE_SERVICES,
  SET_FOCUSED_ITEM,
  CHANGE_FOCUSED_ITEM_ID}
from './actionTypes';

export function populateServices(services) {
  return {type: POPULATE_SERVICES, payload: {services}};
};

export function setFocusedItem(details) {
  return {type: SET_FOCUSED_ITEM, payload: {details}};
};

export function changeFocusedItemId(id) {
  return {type: CHANGE_FOCUSED_ITEM_ID, payload: {id}};
};

export function fetchServicesStart() {
  return {type: FETCH_SERVICES_START};
};

export function fetchServicesSuccess() {
  return {type: FETCH_SERVICES_SUCCESS};
};

export function fetchServicesFail() {
  return {type: FETCH_SERVICES_FAIL};
};

export function fetchDetailsStart() {
  return {type: FETCH_DETAILS_START};
};

export function fetchDetailsSuccess() {
  return {type: FETCH_DETAILS_SUCCESS};
};

export function fetchDetailsFail() {
  return {type: FETCH_DETAILS_FAIL};
};