import { FETCH_SERVICES_START, FETCH_SERVICES_SUCCESS, FETCH_SERVICES_FAIL, FETCH_DETAILS_START, FETCH_DETAILS_SUCCESS, FETCH_DETAILS_FAIL } from '../actions/actionTypes'

const initialState = { 
  isLoadingServices: false,
  didLoadingServicesFail: false,
  isLoadingDetails: false,
  didLoadingDetailsFail: false,
}

export default function apiInteractionReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SERVICES_START:
      return {...state,  isLoadingServices: true, didLoadingServicesFail: false};
    case FETCH_SERVICES_SUCCESS:
      return {...state,  isLoadingServices: false, didLoadingServicesFail: false};
    case FETCH_SERVICES_FAIL:
      return {...state,  isLoadingServices: false, didLoadingServicesFail: true};
    case FETCH_DETAILS_START:
      return {...state,  isLoadingDetails: true, didLoadingDetailsFail: false};
    case FETCH_DETAILS_SUCCESS:
      return {...state,  isLoadingDetails: false, didLoadingDetailsFail: false};
    case FETCH_DETAILS_FAIL:
      return {...state,  isLoadingDetails: false, didLoadingDetailsFail: true};
    default:
      return state;
  }
}