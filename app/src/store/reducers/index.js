import { combineReducers } from 'redux';
import { playerReducer as player } from './playerReducer';

export default combineReducers({
    player,
});