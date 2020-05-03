import { FETCH_SERVICES_START } from '../actions/actionTypes'

const initialState = { 
  loading: false,
  error: false
}

export default function apiInteractionReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SERVICES_START:
      return {loading: true, error: false};
    default:
      return state;
  }
}