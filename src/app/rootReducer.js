import { combineReducers } from 'redux';
import authenticationReducer from '../features/Authentication/authenticationSlice';

export default combineReducers({
  authentication: authenticationReducer,
});
