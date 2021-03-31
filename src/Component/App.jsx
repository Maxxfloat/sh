import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import s from "./App.module.scss";

import Header from "./MainComponents/Header/Header";
import Sidebar from "./MainComponents/Sidebar/Sidebar";
// -- pages --
import Home from "./Pages/Home/Home";
import SIM from "./Pages/SIM/SIM";

const App = () => {
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
				<Sidebar />
				{pages}
			</BrowserRouter>
		</div>
	);
};

export default App;
