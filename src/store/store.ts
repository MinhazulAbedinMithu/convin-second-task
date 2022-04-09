import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";

// declare global {
// 	interface Window {
// 		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
// 	}
// }

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancers = composeWithDevTools({});

const store = createStore(reducers, {}, composeEnhancers());

export default store;

// import { IUser, UserAction } from "../../type";

// export const SET_USERS = "SET_USERS";

// export const setUsers = (users: IUser[]) => ({
// 	type: SET_USERS,
// 	payload: users,
// });

// const initialState = {
// 	users: [],
// };

// export const userReducer = (state = initialState, action: UserAction) => {
// 	switch (action.type) {
// 		case SET_USERS: {
// 			return { ...state, users: action.payload };
// 		}

// 		default:
// 			return state;
// 	}
// };

// export const loadUsers = () => async (dispatch: any) => {
// 	const users = await fetch("https://reqres.in/api/users?page=1").then((res) =>
// 		res.json()
// 	);
// 	dispatch(setUsers(users));
// };
