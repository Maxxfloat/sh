import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import s from "./App.module.scss";

import Header from "./MainComponents/Header/Header";
import Sidebar from "./MainComponents/Sidebar/Sidebar";
// -- pages --
import Home from "./Pages/Home/Home";
import SIM from "./Pages/SIM/SIM";
import Register from "./Pages/Register/Register";
import NotFind from "./Pages/NotFind";

const App = () => {
	const isPhone = useSelector((state) => {
		const { isPhone } = { ...state.windowDimention };
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
			<Route component={SIM} path="/sim" />
			<Route component={Register} path="/register" />
			<Route component={NotFind} path="*" />
		</Switch>
	);
	return (
		<div className={s.app}>
			<BrowserRouter>
				<Header />
				<div className={s.gap} />
				{isPhone ? <Sidebar /> : null}
				{pages}
			</BrowserRouter>
		</div>
	);
};

export default App;
