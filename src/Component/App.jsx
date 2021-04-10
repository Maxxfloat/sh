import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import s from "./App.module.scss";

import Header from "./MainComponents/Header/Header";
import Sidebar from "./MainComponents/Sidebar/Sidebar";
// -- pages --
import NotFind from "./Pages/NotFind";
import Home from "./Pages/Home/Home";
import SIM from "./Pages/SIM/SIM";
import Register from "./Pages/Register/Register";
import Tutorial from "./Pages/Tutorial";

const App = () => {
	const isPhone = useSelector((state) => {
		const { isPhone } = state.dimention;
		return isPhone;
	});
	const dispatch = useDispatch();

	React.useEffect(() => {
		window.addEventListener("resize", () => dispatch({ type: "resize" }));
		return () =>
			window.removeEventListener("resize", () => dispatch({ type: "resize" }));
	}, [dispatch]);

	const pages = (
		<Switch>
			<Route component={Home} path="/" exact />
			<Route component={SIM} path="/sim/:pageNumber" />
			<Route component={Register} path="/register/:k" exact />
			<Route component={Tutorial} path="/tutorial" />
			<Route component={NotFind} path="*" />
		</Switch>
	);
	return (
		<div className={s.app}>
			<BrowserRouter>
				<Header />
				<div className={s.gap} />
				{isPhone ? <Sidebar /> : null}
				{/* <Sidebar /> */}
				{pages}
			</BrowserRouter>
		</div>
	);
};

export default App;
