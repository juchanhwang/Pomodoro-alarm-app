import { combineReducers } from 'redux';
import test from './test.reducer';
import alarm from './alarm.reducer';

export default combineReducers({
  test,
  alarm,
});
