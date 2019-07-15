import { CREATE_ALARM, DELETE_ALARM } from '../actions/types';

const test = (state = {}, action) => {
  switch (action.type) {
    case CREATE_ALARM:
      return {
        ...state,
        [action.payload._id]: action.payload,
      };
    case DELETE_ALARM:
      delete state[action.payload];
      return state;
    default:
      return state;
  }
};

export default test;
