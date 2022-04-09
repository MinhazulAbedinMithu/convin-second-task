import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { IUser } from "../../type";
import LoadingSpinner from "./LoadingSpinner";

const UserDetails = () => {
	const [selectedUser, setSelectedUser] = useState<IUser>({} as IUser);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const location = useLocation();
	const fullPath = location.pathname.split("/");
	const userId = fullPath.length === 3 ? fullPath[2] : "";

	const fetchMyAPI = useCallback(async () => {
		setIsLoading(true);
		const response = await fetch(`https://reqres.in/api/users/${userId}`);
		const data = await response.json();
		setSelectedUser(data.data);
		setIsLoading(false);
	}, [userId]);

	useEffect(() => {
		fetchMyAPI();
	}, [fetchMyAPI]);

	return (
		<>
			{isLoading ? (
				<LoadingSpinner />
			) : (
				<div className="flex items-center justify-center flex-col border-2 py-5 px-20 border-cyan-500 rounded-lg shadow-md shadow-cyan-300">
					{fullPath.length === 3 ? (
						<>
							<img src={selectedUser.avatar} alt="User" />
							<h4 className="font-bold text-3xl py-5">
								{selectedUser.first_name} {selectedUser.last_name}
							</h4>
							<p className="text-xl">ID: {selectedUser.id}</p>
							<p>email: {selectedUser.email}</p>
						</>
					) : (
						<>
							<img src="images.png" alt="Demo User" />
							<h4 className="font-bold text-3xl py-5">Demo User</h4>
							<p className="text-xl">ID: **</p>
							<p className="text-xl">email: User Email here</p>
							<span className="pt-5 font-bold text-3xl text-rose-600">
								Please click any button to show that user Information
							</span>
						</>
					)}
				</div>
			)}
		</>
	);
};

export default UserDetails;
