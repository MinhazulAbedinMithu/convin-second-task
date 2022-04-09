import { UserAction } from "../../../type";
import { ActionTypes } from "../constants/actionTypes";

const initialState = {
	users: [],
};

export const userReducer = (state = initialState, action: UserAction) => {
	switch (action.type) {
		case ActionTypes.SET_USERS:
			return { ...state, users: action.payload };

		default:
			return state;
	}
};

export const selectedUserReducer = (state = {}, action: UserAction) => {
	switch (action.type) {
		case ActionTypes.SELECTED_USER:
			return { ...state, ...action.payload };

		default:
			return state;
	}
};
