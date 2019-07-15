import apiServer from '../apiServer';
import { CREATE_ALARM, DELETE_ALARM } from './types';

export const createAlarm = formValues => async dispatch => {
  const response = await apiServer.post('/', {});
  dispatch({ type: CREATE_ALARM, payload: response.data });
};

export const deleteAlarm = id => async dispatch => {
  const response = await apiServer.delete(`/alarm/${id}`);
  dispatch({ type: DELETE_ALARM, payload: id });
};
