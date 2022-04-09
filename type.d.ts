import { ReactNode } from "react";

type ChildrenType = {
	children: ReactNode;
};

interface IUser {
	id: number;
	email: string;
	first_name: string;
	last_name: string;
	avatar: string;
}

type UserState = {
	users: IUser[];
};

type UserAction = {
	type: string;
	payload: IUser[];
};


type DisPatchType = (args: UserAction) => UserAction;

type RootState = ReturnType<typeof rootReducer>

export type { ChildrenType, IUser, UserState, UserAction, DisPatchType, RootState };
