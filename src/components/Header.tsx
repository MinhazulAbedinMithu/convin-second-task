import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="bg-gradient-to-br from-emerald-700 via-pink-900 to-teal-800 flex items-center justify-center h-[10vh] ">
			<Link to="/" className="text-4xl font-bold text-teal-300">
				Convin Second Job Assignment
			</Link>
		</div>
	);
};

export default Header;
