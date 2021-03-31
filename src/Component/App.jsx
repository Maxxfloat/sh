import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import s from "./App.module.scss";

import Header from "./MainComponents/Header/Header";
import Sidebar from "./MainComponents/Sidebar/Sidebar";
// -- pages --
import Home from "./Pages/Home/Home";
import SIM from "./Pages/SIM/SIM";

const App = () => {
	const [windowWidth, setWindowWidth] = React.useState(0);

	const dispatch = useDispatch();

	const updateDimensions = () => {
		const width = window.innerWidth;
		setWindowWidth(width);
		() => dispatch({ type: "resize", payload: width });
	};

	React.useEffect(() => {
		window.addEventListener("resize", updateDimensions);
		return () => window.removeEventListener("resize", updateDimensions);
	}, []);

	const pages = (
		<Switch>
			<Route component={Home} path="/" exact />
			<Route component={SIM} path="/sim" />
		</Switch>
	);
	return (
		<div className={s.app}>
			<BrowserRouter>
				<Header />
				<div className={s.gap} />
				{/* <Sidebar /> */}
				{windowWidth <= 600 ? <Sidebar /> : null}
				{pages}
			</BrowserRouter>
		</div>
	);
};

export default App;
