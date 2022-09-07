import { combineReducers, createStore } from "redux";
import DressingRoomReducer from "./reducer/DressingRoomReducer";
const rootReducer = combineReducers({
  DressingRoomReducer,
});

const store = createStore(rootReducer);

export default store;
