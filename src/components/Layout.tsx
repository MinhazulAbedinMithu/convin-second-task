import Footer from "./Footer";
import Header from "./Header";
import { ChildrenType } from "../../type";

const Layout = ({ children }: ChildrenType) => {
	return (
		<>
			<Header />
			<main className="container mx-auto h-[85vh]">{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
