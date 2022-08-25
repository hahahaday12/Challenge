/*
단순 index 적게 되면 폴더까지만 경로로 가지고 와도 경로로 읽음.
import from /reducer_index 읽지 못해서 import from /reducer/_index
*/

import { combineReducers } from 'react'
import todo from './r_todo';

// 여기 아래에 todo라고 index에 추가되어있음. 
const rootReducer = combineReducers({
  todo,
});
export default rootReducer;