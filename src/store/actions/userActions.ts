import { IUser } from "../../../type";
import { ActionTypes } from "../constants/actionTypes";

export const setUsers = (users: IUser[]) => {
	return {
		type: ActionTypes.SET_USERS,
		payload: users,
	};
};

export const selectedUser = (user: IUser) => {
	return {
		type: ActionTypes.SELECTED_USER,
		payload: user,
	};
};
