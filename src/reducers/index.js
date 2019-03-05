import { combineReducers } from 'redux';
import quotes from './quotes';

const rootReducer = combineReducers({
  quotes
});

// export default combineReducers({
//   quoteReducer
// });

export default rootReducer