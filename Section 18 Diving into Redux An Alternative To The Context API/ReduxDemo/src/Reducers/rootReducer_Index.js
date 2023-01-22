import { combineReducers } from 'redux';

import changeTheNumber from './increaseDecrements';

const rootReducer = combineReducers({ changeTheNumber });

export default rootReducer;