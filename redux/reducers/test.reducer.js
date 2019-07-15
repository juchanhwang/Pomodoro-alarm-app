import { SAMPLE_ACTION } from '../actions/types';

const test = (state = {}, action) => {
  switch (action.type) {
    case SAMPLE_ACTION:
      return action.payload;
    default:
      return state;
  }
};

export default test;
