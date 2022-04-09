import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Users from "./components/Users";

function App() {
	return (
		<Router>
			<Layout>
				<Users />
			</Layout>
		</Router>
	);
}

export default App;
