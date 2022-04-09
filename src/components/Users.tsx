import { useSelector } from "react-redux";
import { IUser } from "../../type";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setUsers } from "../store/actions/userActions";
import { Link } from "react-router-dom";
import UserDetails from "./UserDetails";
import LoadingSpinner from "./LoadingSpinner";

const Users = () => {
	const [userList, setUserList] = useState<IUser[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const users = useSelector((state: any) => state.allUsers.users);
	const dispatch = useDispatch();

	const fetchUsers = async () => {
		setIsLoading(true);
		const response = await fetch("https://reqres.in/api/users?page=1");
		const data = await response.json();
		setUserList(data.data);
		setIsLoading(false);
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	dispatch(setUsers(userList));

	return (
		<div className="flex flex-col items-center justify-center h-[85vh]">
			{isLoading ? (
				<LoadingSpinner />
			) : (
				<>
					<div className="w-2/3 mx-auto h-[60vh] flex items-center justify-center">
						<UserDetails />
					</div>
					<div className="flex items-center justify-center gap-16 py-5 h-[15vh] ">
						{users.map((user: IUser) => (
							<div className="" key={user.id}>
								<Link
									to={`users/${user.id}`}
									className="bg-cyan-900 text-cyan-300 text-4xl px-6 py-2 rounded-lg"
								>
									{user.id}
								</Link>
							</div>
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default Users;
