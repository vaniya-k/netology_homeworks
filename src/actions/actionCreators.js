import { FETCH_SERVICES_START, POPULATE_SERVICES} from './actionTypes';

export function populateServices(services) {
  return {type: POPULATE_SERVICES, payload: {services}};
}

export function fetchServicesStart() {
  return {type: FETCH_SERVICES_START};
}
