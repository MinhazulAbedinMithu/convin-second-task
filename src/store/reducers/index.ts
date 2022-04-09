import { combineReducers } from "redux";
import { selectedUserReducer, userReducer } from "./userReducer";

const reducers = combineReducers({
	allUsers: userReducer,
	user: selectedUserReducer,
});

export default reducers;
