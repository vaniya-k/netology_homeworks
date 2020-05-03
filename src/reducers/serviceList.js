import { POPULATE_SERVICES } from '../actions/actionTypes'

const initialState = [
];

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case POPULATE_SERVICES:
      const {services} = action.payload;
      return services.map(service => ({id: service.id, name: service.name, price: service.price}));
    default:
      return state;
  }
}
